// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB8Nyf5YbZVgzyyRcsAL_EHXXeuBEYK0DA",
    authDomain: "desafio-lautaro-tallarico.firebaseapp.com",
    projectId: "desafio-lautaro-tallarico",
    storageBucket: "desafio-lautaro-tallarico.appspot.com",
    messagingSenderId: "607151733801",
    appId: "1:607151733801:web:91ecbcbdf7821f3d547038"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)


export default db