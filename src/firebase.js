// Import necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3W4MbJXW7Ks8ThlabHngcqPi65WN9kM0",
  authDomain: "toga-635e9.firebaseapp.com",
  projectId: "toga-635e9",
  storageBucket: "toga-635e9.appspot.com",
  messagingSenderId: "217536201521",
  appId: "1:217536201521:web:babccdab946830cedda610",
  measurementId: "G-3L4J0BFMRK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize Firebase Authentication
const db = getFirestore(app); // Initialize Firestore
const analytics = getAnalytics(app); // Initialize Analytics

export { auth, db, analytics };
