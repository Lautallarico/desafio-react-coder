// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB9Y4-O9sj2f2yWEWdLNLVM3zFs1w6pWG8",
    authDomain: "df-lautaro-tallarico.firebaseapp.com",
    projectId: "df-lautaro-tallarico",
    storageBucket: "df-lautaro-tallarico.appspot.com",
    messagingSenderId: "836444616266",
    appId: "1:836444616266:web:d599f7063bafa971f898b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)


export default db