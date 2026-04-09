import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqJskAn9WUfwdpUAmnbmYaqmgK-Cq4rsE",
  authDomain: "farhanirtiza-sportfolio.firebaseapp.com",
  databaseURL: "https://farhanirtiza-sportfolio-default-rtdb.firebaseio.com",
  projectId: "farhanirtiza-sportfolio",
  storageBucket: "farhanirtiza-sportfolio.firebasestorage.app",
  messagingSenderId: "832148936740",
  appId: "1:832148936740:web:ffa8ad1620fef80d4060b1",
  measurementId: "G-QJJP23D62X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Authentication and Provider
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getDatabase(app);
