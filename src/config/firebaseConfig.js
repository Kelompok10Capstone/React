// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCP_6OBpDbYzLHD4z-J1KCJkw_jgxmgj-Q",
  authDomain: "capstone-project-7c76b.firebaseapp.com",
  projectId: "capstone-project-7c76b",
  storageBucket: "capstone-project-7c76b.appspot.com",
  messagingSenderId: "114222653966",
  appId: "1:114222653966:web:163acc74eb15e46a0dd25f",
  measurementId: "G-K5DPWP7H6T"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);