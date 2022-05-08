// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABbaHXTPcCXYvYG7lbziTABdfvPC6NTFI",
  authDomain: "dereference.firebaseapp.com",
  projectId: "dereference",
  storageBucket: "dereference.appspot.com",
  messagingSenderId: "215594623822",
  appId: "1:215594623822:web:668e9e21c08fe4d7db341f",
  measurementId: "G-B819KPW9PT",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
