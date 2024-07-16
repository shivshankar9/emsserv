// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Firebase configuration object
const firebaseConfig = {
    apiKey: "AIzaSyAImLOQCeUdhuJyFKT_ocVb6Eyb8AjlA0Q",
    authDomain: "emspos1.firebaseapp.com",
    projectId: "emspos1",
    storageBucket: "emspos1.appspot.com",
    messagingSenderId: "26414442733",
    appId: "1:26414442733:web:42bff349945544fbb104e4",
    measurementId: "G-EWZLCVP2PK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firebase Authentication instance
const auth = getAuth(app);

// Create a Google Auth provider instance
const provider = new GoogleAuthProvider();

/**
 * Sign in with Google and navigate based on email.
 * @param {Function} navigate - Navigation function to change routes.
 */
const signInWithGoogle = async (navigate) => {
    try {
        const result = await signInWithPopup(auth, provider);
        const email = result.user.email;
        console.log(result.user); // Log user information

        // Check email and navigate accordingly
        if (email === 'shivshankar4287@gmail.com') {
            navigate('/employees');  // Redirect to /employees if the email is admin
        } else {
            navigate('/employee-details');  // Redirect to employee details page for other users
        }
    } catch (error) {
        console.error('Error during Google sign-in:', error);
    }
};

export { auth, signInWithGoogle };
