import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAZIDkWc5-Pu2r6HELbfAJdSzkvpOqxeZM",
  authDomain: "codeforge-7cf2a.firebaseapp.com",
  projectId: "codeforge-7cf2a",
  storageBucket: "codeforge-7cf2a.appspot.com",
  messagingSenderId: "17975894703",
  appId: "1:17975894703:web:a9c1b257bb817dc6f7ea5a"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore, app };