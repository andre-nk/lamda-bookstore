// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBKf993tB3y7VxmiV76nQ8O657LE544Y2I",
  authDomain: "lamda-bookstore.firebaseapp.com",
  projectId: "lamda-bookstore",
  storageBucket: "lamda-bookstore.appspot.com",
  messagingSenderId: "904626727780",
  appId: "1:904626727780:web:ff9c4bf470a33a52e8e871",
  measurementId: "G-4TWH8YVWML",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export default firestore;
