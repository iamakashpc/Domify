// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: "domify-34d5f.firebaseapp.com",
	projectId: "domify-34d5f",
	storageBucket: "domify-34d5f.appspot.com",
	messagingSenderId: "518344264821",
	appId: "1:518344264821:web:9b2cb01ff4338ee4283c3c",
	measurementId: "G-0MBV6W7K64",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

