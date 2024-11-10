// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvpKYXuTIzwUYBasRVNX6lTydiwfPU4h4",
  authDomain: "syncpress-93756.firebaseapp.com",
  projectId: "syncpress-93756",
  storageBucket: "syncpress-93756.firebasestorage.app",
  messagingSenderId: "193767649694",
  appId: "1:193767649694:web:31916780b88ca0fd7d268f",
  measurementId: "G-CQ2610RQDV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { auth };