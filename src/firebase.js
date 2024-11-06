import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDbRkLs5bHsHjubin4EU5QyoAYSg4QMPX8",
  authDomain: "messenger-d9f45.firebaseapp.com",
  projectId: "messenger-d9f45",
  storageBucket: "messenger-d9f45.appspot.com",
  messagingSenderId: "1006847452431",
  appId: "1:1006847452431:web:1b1e1202fba770c1244a7a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore()