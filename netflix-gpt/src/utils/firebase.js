// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpMoXPUH0IL4i_kjEr-JABBaobr5c2zWE",
  authDomain: "netflixgpt-76b0b.firebaseapp.com",
  projectId: "netflixgpt-76b0b",
  storageBucket: "netflixgpt-76b0b.firebasestorage.app",
  messagingSenderId: "126120750965",
  appId: "1:126120750965:web:6dc9a79fd1714c3d38ed3c",
  measurementId: "G-GTHS410HEP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();