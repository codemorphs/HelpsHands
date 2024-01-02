// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxt8eGcz_PoE-7S2fKHUm7YoBboAP8OoY",
  authDomain: "thehelpinghand-b1a4a.firebaseapp.com",
  projectId: "thehelpinghand-b1a4a",
  storageBucket: "thehelpinghand-b1a4a.appspot.com",
  messagingSenderId: "264817458382",
  appId: "1:264817458382:web:3e3a91b8869dc2eb4ca49f",
  measurementId: "G-562WH4KL2Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);