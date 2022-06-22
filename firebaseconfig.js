// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1acmn8Ds6MI0kH0aBaSONzTDIxGE9mCg",
  authDomain: "next-chat-app-700af.firebaseapp.com",
  projectId: "next-chat-app-700af",
  storageBucket: "next-chat-app-700af.appspot.com",
  messagingSenderId: "1032421228408",
  appId: "1:1032421228408:web:b7104f0e9d7797dd61d28d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export{auth, db}; 