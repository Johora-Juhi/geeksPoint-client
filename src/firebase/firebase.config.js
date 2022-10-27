// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyDOyXYW-MQj1QupeIwQlMRqvZ2hhlUBWag",
  // authDomain: "geeksacademy-7a1f7.firebaseapp.com",
  // projectId: "geeksacademy-7a1f7",
  // storageBucket: "geeksacademy-7a1f7.appspot.com",
  // messagingSenderId: "652976723886",
  // appId: "1:652976723886:web:428e84f29b2eb291a65a3f"
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;