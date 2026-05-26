import { useState, useEffect, useRef } from 'react';
import { doc, onSnapshot, setDoc } from 'firebase/firestore';
import { db } from '../firebase';

const LS_KEY      = 'premiere-tracker-notes';
const DEBOUNCE_MS = 800; // wait this long after last keystroke before writing to Firestore

/**
 * Firestore-backed notes hook with debounced writes.
 *
 * Notes are updated on every keystroke, so we debounce the Firestore write
 * to avoid burning through our daily write quota. The local state updates
 * instantly; Firestore is updated 800 ms after the user stops typing.
 *
 * Data path: users/{uid}/data/notes
 */
export function useNotes(uid) {
  const [notes, setNotes] = useState({});
  const notesRef  = useRef({});   // always holds the latest notes for use inside timers
  const timersRef = useRef({});   // one debounce timer per phaseId

  // Keep notesRef in sync with state
  useEffect(() => { notesRef.current = notes; }, [notes]);

  useEffect(() => {
    if (!uid) { setNotes({}); return; }

    const ref = doc(db, 'users', uid, 'data', 'notes');

    const unsub = onSnapshot(ref, (snap) => {
      if (!snap.exists()) {
        // First login — migrate localStorage notes
        const local = (() => {
          try { return JSON.parse(localStorage.getItem(LS_KEY) ?? '{}'); }
          catch { return {}; }
        })();
        setDoc(ref, local).catch(console.error);
        localStorage.removeItem(LS_KEY);
        setNotes(local);
        notesRef.current = local;
      } else {
        const data = snap.data() ?? {};
        setNotes(data);
        notesRef.current = data;
      }
    });

    return () => {
      unsub();
      // Cancel any pending write timers when uid changes or component unmounts
      Object.values(timersRef.current).forEach(clearTimeout);
      timersRef.current = {};
    };
  }, [uid]);

  const setNote = (phaseId, text) => {
    const next = { ...notesRef.current, [phaseId]: text };
    setNotes(next);
    notesRef.current = next;

    // Debounce the Firestore write
    clearTimeout(timersRef.current[phaseId]);
    timersRef.current[phaseId] = setTimeout(() => {
      if (uid) setDoc(doc(db, 'users', uid, 'data', 'notes'), notesRef.current).catch(console.error);
    }, DEBOUNCE_MS);
  };

  const importNotes = (data) => {
    setNotes(data);
    notesRef.current = data;
    if (uid) setDoc(doc(db, 'users', uid, 'data', 'notes'), data).catch(console.error);
  };

  return { notes, setNote, importNotes };
}
