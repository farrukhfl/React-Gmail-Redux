// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNAKv-rj82LjxPeYiMJjtqUfz3ddj-b5g",
  authDomain: "clone-ddd2d.firebaseapp.com",
  projectId: "clone-ddd2d",
  storageBucket: "clone-ddd2d.appspot.com",
  messagingSenderId: "515551199916",
  appId: "1:515551199916:web:2cb9bc204e8803c2d6d509",
  measurementId: "G-2F8RYSDL10",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
