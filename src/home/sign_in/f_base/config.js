// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB2bybhYn2TZoP7ocl6f1pEOAtqhrR8fEU",
    authDomain: "netflix-clone-fee03.firebaseapp.com",
    projectId: "netflix-clone-fee03",
    storageBucket: "netflix-clone-fee03.appspot.com",
    messagingSenderId: "288052031896",
    appId: "1:288052031896:web:f784dca35b54f32a11bbed",
    measurementId: "G-HV9RZZE9ND"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
