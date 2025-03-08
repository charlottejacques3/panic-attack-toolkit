// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import firebase from
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8pK-JASMlxZeBQ_EcnbW-TBUVZOzQd9w",
  authDomain: "panic-attack-toolkit.firebaseapp.com",
  projectId: "panic-attack-toolkit",
  storageBucket: "panic-attack-toolkit.firebasestorage.app",
  messagingSenderId: "154705286327",
  appId: "1:154705286327:web:2abf741537c83755d0a932"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// var database = firebase.database();
export default app;