import { useState, useEffect } from 'react';
import { doc, onSnapshot, setDoc } from 'firebase/firestore';
import { db } from '../firebase';

const LS_KEY = 'premiere-tracker-progress';

/**
 * Firestore-backed progress hook.
 *
 * On first login, migrates any existing localStorage data to Firestore
 * then clears the local copy. Subsequent loads stream from Firestore
 * (with offline IndexedDB cache for resilience).
 *
 * Data path: users/{uid}/data/progress
 */
export function useProgress(uid) {
  const [completed, setCompleted] = useState({});

  useEffect(() => {
    if (!uid) { setCompleted({}); return; }

    const ref = doc(db, 'users', uid, 'data', 'progress');

    const unsub = onSnapshot(ref, (snap) => {
      if (!snap.exists()) {
        // First login — migrate localStorage progress if any
        const local = (() => {
          try { return JSON.parse(localStorage.getItem(LS_KEY) ?? '{}'); }
          catch { return {}; }
        })();
        setDoc(ref, local).catch(console.error);
        localStorage.removeItem(LS_KEY);
        setCompleted(local);
      } else {
        setCompleted(snap.data() ?? {});
      }
    });

    return unsub;
  }, [uid]);

  const toggle = (taskId) => {
    setCompleted((prev) => {
      const next = { ...prev, [taskId]: !prev[taskId] };
      if (uid) setDoc(doc(db, 'users', uid, 'data', 'progress'), next).catch(console.error);
      return next;
    });
  };

  const reset = () => {
    if (!window.confirm('Reset all progress? This cannot be undone.')) return;
    setCompleted({});
    if (uid) setDoc(doc(db, 'users', uid, 'data', 'progress'), {}).catch(console.error);
  };

  const importProgress = (data) => {
    setCompleted(data);
    if (uid) setDoc(doc(db, 'users', uid, 'data', 'progress'), data).catch(console.error);
  };

  return { completed, toggle, reset, importProgress };
}
