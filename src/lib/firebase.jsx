// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvlPTV7JsGqn02sU2u_aj2srFNE1hWn78",
  authDomain: "smart-gate-ai.firebaseapp.com",
  projectId: "smart-gate-ai",
  storageBucket: "smart-gate-ai.firebasestorage.app",
  messagingSenderId: "127110801665",
  appId: "1:127110801665:web:2139dc7738194887a39300",
  measurementId: "G-T5EBMPWEM2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);