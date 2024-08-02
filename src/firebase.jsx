// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7FBYjZpN_QztKXDbXkS7c68beULmc0Ro",
  authDomain: "fir-auth-be1cc.firebaseapp.com",
  projectId: "fir-auth-be1cc",
  storageBucket: "fir-auth-be1cc.appspot.com",
  messagingSenderId: "610100406075",
  appId: "1:610100406075:web:b1bfd35a585617d1c4b91e",
  measurementId: "G-WXT2CMD942",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
