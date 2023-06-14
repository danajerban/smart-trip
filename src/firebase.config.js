import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAAgTVtg7EuMTTpnHu4yMIWJ5nnPWZj5A",
  authDomain: "smart-trip-7986c.firebaseapp.com",
  projectId: "smart-trip-7986c",
  storageBucket: "smart-trip-7986c.appspot.com",
  messagingSenderId: "718553278295",
  appId: "1:718553278295:web:da58af561d833f2bdd8012"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()