// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
//google


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxW-JjPNCvHodGmF-yQmJ0FdE1QYTJ39Y",
  authDomain: "calendar-auth-d4960.firebaseapp.com",
  projectId: "calendar-auth-d4960",
  storageBucket: "calendar-auth-d4960.appspot.com",
  messagingSenderId: "565734778729",
  appId: "1:565734778729:web:3abdbee384ae6223ef7ff8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app);