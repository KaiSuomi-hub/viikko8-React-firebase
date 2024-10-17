// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from '@react-native-firebase/app';
import {getFirestore,collection,addDoc,serverTimestamp} from '@react-native-firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjKVEKP5554kjmDtWLwm7bXGDYn5Ooo68",
  authDomain: "reactnative-week8.firebaseapp.com",
  projectId: "reactnative-week8",
  storageBucket: "reactnative-week8.appspot.com",
  messagingSenderId: "1086378529890",
  appId: "1:1086378529890:web:fdb14e35a6b452aff9ad3b",
  measurementId: "G-TEQG2003E1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const TODO = 'todo';
initializeApp(firebaseConfig);

const firebase = getFirestore();
// Export Firestore instance
export {
  firebase,
  collection,
  addDoc,
  serverTimestamp,
  TODO
}