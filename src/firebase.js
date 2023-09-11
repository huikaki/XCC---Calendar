// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

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

// import firebase from "firebase/app";
// import "firebase/auth";
// const app = firebase.initializeApp({
//     apiKey: process.env.REACT_FIREBASE_APIKEY,
//   authDomain:process.env.REACT_FIREBASE_AUTHDOMAIN,
//   projectId: process.env.REACT_FIREBASE_PROJECTID,
//   storageBucket: process.env.REACT_FIREBASE_STORAGEBUCKET,
//   messagingSenderId: process.env.REACT_FIREBASE_MESSAGESENDERID,
//   appId:process.env.REACT_FIREBASE_APPID
// })

export const auth = getAuth(app);