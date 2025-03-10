import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAcoWZg9xu6c6pYQHRMis1Zj0j0nVJrsLI",
    authDomain: "apli-web-materia.firebaseapp.com",
    projectId: "apli-web-materia",
    storageBucket: "apli-web-materia.firebasestorage.app",
    messagingSenderId: "666122716925",
    appId: "1:666122716925:web:45994907d6fbda51552094",
    measurementId: "G-ELD774F1T4"
};

const app = initializeApp(firebaseConfig);
const db= getFirestore(app);

export {db};