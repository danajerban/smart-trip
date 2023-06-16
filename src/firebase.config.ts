import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_FIRESTORE_KEY,
  authDomain: 'smarttrip-8c5a0.firebaseapp.com',
  projectId: 'smarttrip-8c5a0',
  storageBucket: 'smarttrip-8c5a0.appspot.com',
  messagingSenderId: '977574882504',
  appId: '1:977574882504:web:14b78eb2d3596bc412c9fd',
  measurementId: 'G-NSKD9836H6',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
