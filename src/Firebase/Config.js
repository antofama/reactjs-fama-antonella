// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhoasTvilBpSRF29zZXt9G9apObEw8-eM",
  authDomain: "tiendabags-675ec.firebaseapp.com",
  projectId: "tiendabags-675ec",
  storageBucket: "tiendabags-675ec.appspot.com",
  messagingSenderId: "730907104307",
  appId: "1:730907104307:web:7901bd6c2ce8066a447f46",
  measurementId: "G-C4SFB2BSWE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

