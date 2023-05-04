import { initializeApp } from "firebase/app";
import { initializeAuth } from "firebase/auth/react-native";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBgSWPPUT6fX7Bb2K0xrYlSutFmbP-jv58",
  authDomain: "hobi-aee63.firebaseapp.com",
  projectId: "hobi-aee63",
  storageBucket: "hobi-aee63.appspot.com",
  messagingSenderId: "224388703470",
  appId: "1:224388703470:web:5dacffc0c6ae0fca73bfff",
  measurementId: "G-XHGBXF2BD1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app);
