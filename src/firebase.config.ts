import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQWCKEo8QpBMgg7AEfFu8MX7cIzalgis4",
  authDomain: "smarttrip-7b1eb.firebaseapp.com",
  projectId: "smarttrip-7b1eb",
  storageBucket: "smarttrip-7b1eb.appspot.com",
  messagingSenderId: "814981308818",
  appId: "1:814981308818:web:6575f69fece4791de2614b"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
