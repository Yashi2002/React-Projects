// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZ8hsDwE3caY9c0ZDnWWpPBlAFCrbkZRE",
  authDomain: "vite-contact-58a8c.firebaseapp.com",
  projectId: "vite-contact-58a8c",
  storageBucket: "vite-contact-58a8c.appspot.com",
  messagingSenderId: "776155379482",
  appId: "1:776155379482:web:08ae6d4e61bd2ba9801ea3",
  measurementId: "G-VVV1NE929H"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);