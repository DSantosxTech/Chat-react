// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDAVSGUoQE94HICMCRR4nBZWLilpPdcdc",
  authDomain: "chat-96e81.firebaseapp.com",
  projectId: "chat-96e81",
  storageBucket: "chat-96e81.appspot.com",
  messagingSenderId: "189237951336",
  appId: "1:189237951336:web:65c268662ded3a6075b4dd",
  measurementId: "G-PQP2S04QTS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const databaseapp = getFirestore(app);