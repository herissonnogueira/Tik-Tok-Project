
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyCeVyZfhaC1DBBhqzVJPtFVKfOHE21L0cc",
  authDomain: "tiktok---jornada-a1e47.firebaseapp.com",
  projectId: "tiktok---jornada-a1e47",
  storageBucket: "tiktok---jornada-a1e47.appspot.com",
  messagingSenderId: "48924569918",
  appId: "1:48924569918:web:56487831d01d62a2187c6f"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;