import firebase from 'firebase/app'
import "firevase/auth"
const app = firebase.initializeApp({
    apiKey: process.env.REACT_FIREBASE_APIKEY,
  authDomain:process.env.REACT_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_FIREBASE_MESSAGESENDERID,
  appId:process.env.REACT_FIREBASE_APPID
})

export const auth = app.auth()
export default app