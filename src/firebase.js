// Import Firebase functions
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

// 🔹 Firebase Configuration (Check `storageBucket` in Firebase Console)
const firebaseConfig = {
  apiKey: "AIzaSyDXMtK6zXfI08Tbv-jgHS6MsuZRh-KuC5k",
  authDomain: "oqu-kurali.firebaseapp.com",
  projectId: "oqu-kurali",
  storageBucket: "oqu-kurali.appspot.com", // ✅ Fixed storage bucket
  messagingSenderId: "308258071585",
  appId: "1:308258071585:web:e1b3c4ddcc63a0105cef60",
  measurementId: "G-VR4SPQ5NM7",
};

// 🔹 Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider(); // ✅ FIX: Function Call

// 🔹 Google Sign-In Function
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    console.error("Google Sign-In Error:", error.message);
    return null;
  }
};

// 🔹 Logout Function
export const logOut = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Logout Error:", error.message);
  }
};

// Export Firebase Authentication
export { auth };
