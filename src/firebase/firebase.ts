import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCr4KKgcwzNNkJ_TjqLIU2Z4vYLG26vwgk",
  authDomain: "codeforge-69a01.firebaseapp.com",
  projectId: "codeforge-69a01",
  storageBucket: "codeforge-69a01.appspot.com",
  messagingSenderId: "308815094605",
  appId: "1:308815094605:web:d545df2ad9d2515b910d04",
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore, app };