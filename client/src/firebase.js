import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAggl0XOlf-ZSJ3FWxhskgphLXwlGUvttw",
  authDomain: "hipassist-auth.firebaseapp.com",
  projectId: "hipassist-auth",
  storageBucket: "hipassist-auth.appspot.com",
  messagingSenderId: "513252775489",
  appId: "1:513252775489:web:68d5c8592c7c9ab47f58c0",
  measurementId: "G-WPZN4D39RL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default auth;