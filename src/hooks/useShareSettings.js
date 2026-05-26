import { useState, useEffect } from 'react';
import { doc, onSnapshot, setDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase';

/**
 * Manages the list of emails that have been granted viewer access.
 *
 * Firestore paths written:
 *   users/{uid}/data/settings          → { viewers: ['email@...', ...] }
 *   viewerIndex/{viewerEmail}/owners/{uid} → { ownerUID, ownerName, ownerPhoto }
 *
 * The viewerIndex acts as a reverse lookup so a viewer can discover
 * whose progress they've been granted access to when they sign in.
 */
export function useShareSettings(uid, user) {
  const [viewers, setViewers] = useState([]);

  useEffect(() => {
    if (!uid) { setViewers([]); return; }
    const ref = doc(db, 'users', uid, 'data', 'settings');
    const unsub = onSnapshot(ref, (snap) => {
      setViewers(snap.exists() ? (snap.data()?.viewers ?? []) : []);
    });
    return unsub;
  }, [uid]);

  const addViewer = async (email) => {
    if (!uid || !email) return;
    const normalized = email.trim().toLowerCase();
    if (viewers.includes(normalized)) return;

    const next       = [...viewers, normalized];
    const settingsRef = doc(db, 'users', uid, 'data', 'settings');
    const indexRef    = doc(db, 'viewerIndex', normalized, 'owners', uid);

    await Promise.all([
      setDoc(settingsRef, { viewers: next }, { merge: true }),
      setDoc(indexRef, {
        ownerUID:   uid,
        ownerName:  user?.displayName || user?.email || uid,
        ownerPhoto: user?.photoURL    || null,
      }),
    ]);
  };

  const removeViewer = async (email) => {
    if (!uid) return;
    const normalized  = email.trim().toLowerCase();
    const next        = viewers.filter((v) => v !== normalized);
    const settingsRef = doc(db, 'users', uid, 'data', 'settings');
    const indexRef    = doc(db, 'viewerIndex', normalized, 'owners', uid);

    await Promise.all([
      setDoc(settingsRef, { viewers: next }, { merge: true }),
      deleteDoc(indexRef),
    ]);
  };

  return { viewers, addViewer, removeViewer };
}
