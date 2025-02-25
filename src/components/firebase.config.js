// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: "AIzaSyDNw8s8DVVbIfi_3TMM3_RfOVAKVjjb3Ww",
  authDomain: "starsync-fc893.firebaseapp.com",
  projectId: "starsync-fc893",
  storageBucket: "starsync-fc893.firebasestorage.app",
  messagingSenderId: "87624912388",
  appId: "1:87624912388:web:4bf3843d07f5f666b76f51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);