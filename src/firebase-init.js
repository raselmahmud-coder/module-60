// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_qNI4FLyvXGHVZGQ1JRWp0OI3-5M4cPk",
  authDomain: "genius-car-service-c8250.firebaseapp.com",
  projectId: "genius-car-service-c8250",
  storageBucket: "genius-car-service-c8250.appspot.com",
  messagingSenderId: "682204379516",
  appId: "1:682204379516:web:0c2e7f6b43d138b58accf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;