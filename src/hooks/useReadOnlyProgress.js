import { useState, useEffect } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';

/**
 * Read-only subscription to another user's task completion data.
 * Used by the ViewerDashboard — no writes, no migrations.
 *
 * Data path: users/{ownerUID}/data/progress
 */
export function useReadOnlyProgress(ownerUID) {
  const [completed, setCompleted] = useState({});
  const [loading,   setLoading]   = useState(true);

  useEffect(() => {
    if (!ownerUID) { setCompleted({}); setLoading(false); return; }

    const ref  = doc(db, 'users', ownerUID, 'data', 'progress');
    const unsub = onSnapshot(
      ref,
      (snap) => {
        setCompleted(snap.exists() ? (snap.data() ?? {}) : {});
        setLoading(false);
      },
      () => { setCompleted({}); setLoading(false); },
    );

    return unsub;
  }, [ownerUID]);

  return { completed, loading };
}
