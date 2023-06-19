// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCRScbL1Bm6Z672rGB1D8eGh5FOE8_ZcEQ",
  authDomain: "clone-a4dee.firebaseapp.com",
  projectId: "clone-a4dee",
  storageBucket: "clone-a4dee.appspot.com",
  messagingSenderId: "224136360437",
  appId: "1:224136360437:web:7417acd8c96bf387dd30bc",
  measurementId: "G-93E3RN23N1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
