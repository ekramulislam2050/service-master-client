// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1ML7QMa_VetCItlERSz5zYZBxIbHGWbw",
  authDomain: "service-master-1db71.firebaseapp.com",
  projectId: "service-master-1db71",
  storageBucket: "service-master-1db71.firebasestorage.app",
  messagingSenderId: "990941511695",
  appId: "1:990941511695:web:5f53bfe1226cfaa36ba37a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth