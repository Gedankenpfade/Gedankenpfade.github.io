// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgwtwWLYO3mx64YqmiGLOYzVShiKyocYI",
  authDomain: "gedankenpfade-a2cc9.firebaseapp.com",
  projectId: "gedankenpfade-a2cc9",
  storageBucket: "gedankenpfade-a2cc9.firebasestorage.app",
  messagingSenderId: "555433406669",
  appId: "1:555433406669:web:ac0ace641bba0dc33d3984",
  measurementId: "G-52YWXEG0EK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db };