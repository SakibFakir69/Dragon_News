// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvms5v9HejFc_AKbiD7_i3pX7A_Tf8lyg",
  authDomain: "dragon-news-d7234.firebaseapp.com",
  projectId: "dragon-news-d7234",
  storageBucket: "dragon-news-d7234.firebasestorage.app",
  messagingSenderId: "499142797939",
  appId: "1:499142797939:web:b46836a7ed39a72f585806"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;