import { useState, useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';

/**
 * Detects whether the signed-in user has been granted viewer access
 * to another user's progress.
 *
 * Queries: viewerIndex/{userEmail}/owners  →  one doc per owner who granted access
 *
 * Returns an array of access grants: [{ ownerUID, ownerName, ownerPhoto }]
 * An empty array means no shared access has been configured.
 */
export function useViewerAccess(user) {
  const [viewerAccess, setViewerAccess] = useState([]);
  const [viewerLoading, setViewerLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) {
      setViewerAccess([]);
      setViewerLoading(false);
      return;
    }

    const colRef = collection(db, 'viewerIndex', user.email, 'owners');
    const unsub  = onSnapshot(
      colRef,
      (snap) => {
        const access = snap.docs.map((d) => ({ ownerUID: d.id, ...d.data() }));
        setViewerAccess(access);
        setViewerLoading(false);
      },
      () => {
        // Permission denied or not found — user has no viewer access
        setViewerAccess([]);
        setViewerLoading(false);
      },
    );

    return unsub;
  }, [user?.email]);

  return { viewerAccess, viewerLoading };
}
