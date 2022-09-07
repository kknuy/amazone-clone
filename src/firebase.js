import { initializeApp } from "firebase/app";
import firebase from "firebase";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDtHETJActfwjiKEoXrlF5XA8toZmGhYP4",
  authDomain: "e-1b43a.firebaseapp.com",
  projectId: "e-1b43a",
  storageBucket: "e-1b43a.appspot.com",
  messagingSenderId: "308495411628",
  appId: "1:308495411628:web:b056d9ee2cd0cacc63b209",
  measurementId: "G-VKZ74FYPVQ"
};
/* import firebase from 'firebase/app'; */

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
export const firestore = firebase.firestore()


export {auth};