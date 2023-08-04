// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5pI9WT9vQyn88TBs29xn-1gi9x438cFk",
  authDomain: "nextauth-8b7a7.firebaseapp.com",
  projectId: "nextauth-8b7a7",
  storageBucket: "nextauth-8b7a7.appspot.com",
  messagingSenderId: "360370326910",
  appId: "1:360370326910:web:280a4da6e167895b98372f",
  measurementId: "G-DRK76QN9T7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
// const analytics = getAnalytics(app);
