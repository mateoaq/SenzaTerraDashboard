// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getDatabase, ref, child, get } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyBkfsQJdR7gAlpHMYEgYvnHSiQvmaKAgXU",
    authDomain: "senza-terra.firebaseapp.com",
    databaseURL: "https://senza-terra-default-rtdb.firebaseio.com",
    projectId: "senza-terra",
    storageBucket: "senza-terra.appspot.com",
    messagingSenderId: "118016022623",
    appId: "1:118016022623:web:f3deb2a49a0b8c415c63ea",
    measurementId: "G-BVN9MN6D32"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Get a reference to the database service
export const db = getDatabase(app);

const dbRef = ref(getDatabase());



