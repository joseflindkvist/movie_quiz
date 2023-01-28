import { initializeApp } from "firebase/app";
export const firebaseConfig = {
  apiKey: "AIzaSyBcriXbLyTxC6atvh70tAJEk4XBsoRVu_s",
  authDomain: "film-quiz-92db7.firebaseapp.com",
  databaseURL:
    "https://film-quiz-92db7-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "film-quiz-92db7",
  storageBucket: "film-quiz-92db7.appspot.com",
  messagingSenderId: "532209241278",
  appId: "1:532209241278:web:192a5f7dfe58cda39622ef",
  measurementId: "G-C1X8G8F88S",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
// Lägg in era egna parametrar från Firebase


