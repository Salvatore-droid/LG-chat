import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "lg-chat-ec2a8.firebaseapp.com",
  projectId: "lg-chat-ec2a8",
  storageBucket: "lg-chat-ec2a8.firebasestorage.app",
  messagingSenderId: "253384800094",
  appId: "1:253384800094:web:35b9962a2be5089da281cf"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()