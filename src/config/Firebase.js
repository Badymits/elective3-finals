// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEjjFRz2YDszqD2SemZr5B_6A42eOZk0k",
  authDomain: "reactfinals-f9d3b.firebaseapp.com",
  projectId: "reactfinals-f9d3b",
  storageBucket: "reactfinals-f9d3b.appspot.com",
  messagingSenderId: "421028990870",
  appId: "1:421028990870:web:76f7d4b13b3e5341dd57b7",
  measurementId: "G-0WMSPMN7FM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const db = getFirestore();
export { auth,db }