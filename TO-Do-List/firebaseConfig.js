// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxvn-xRzrVSXVeRdDMoWG3uJNMwNmWAps",
  authDomain: "to-do-app-560ca.firebaseapp.com",
  projectId: "to-do-app-560ca",
  storageBucket: "to-do-app-560ca.firebasestorage.app",
  messagingSenderId: "523700044620",
  appId: "1:523700044620:web:e27e37e05675fc49e3c5e9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)