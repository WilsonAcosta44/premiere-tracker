import { initializeApp }                              from 'firebase/app';
import { getAuth, GoogleAuthProvider }                from 'firebase/auth';
import { initializeFirestore, persistentLocalCache }  from 'firebase/firestore';

const firebaseConfig = {
  apiKey:            'AIzaSyDFR_hg9dQSCFB1Phb0PX2BR9-b_fas6ko',
  authDomain:        'premiere-tracker.firebaseapp.com',
  projectId:         'premiere-tracker',
  storageBucket:     'premiere-tracker.firebasestorage.app',
  messagingSenderId: '526594542038',
  appId:             '1:526594542038:web:a54c38169b97b229effc77',
};

const app = initializeApp(firebaseConfig);

export const db = initializeFirestore(app, {
  localCache: persistentLocalCache(),
});

export const auth           = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
