// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth ,GoogleAuthProvider} from'firebase/auth';
 import {getFirestore}from'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBC0XYs2Yuk4a8WNmh5mqyTOMJlcyu-G0Q",
  authDomain: "react-course-48b21.firebaseapp.com",
  projectId: "react-course-48b21",
  storageBucket: "react-course-48b21.appspot.com",
  messagingSenderId: "356198257145",
  appId: "1:356198257145:web:d1e8a28856b8a02bc0ad28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);


