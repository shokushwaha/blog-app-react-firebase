import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

import { getStorage } from "firebase/storage";


const firebaseConfig = {
<<<<<<< HEAD
    apiKey: "AIzaSyCPjV9x3oUTeIXqCWAKMWKr_4YB868t9LU",
    authDomain: "blogs-60b63.firebaseapp.com",
    projectId: "blogs-60b63",
    storageBucket: "blogs-60b63.appspot.com",
    messagingSenderId: "184791569044",
    appId: "1:184791569044:web:f8ea365895a4e65f365a81"
=======
<<<<<<< HEAD
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
=======
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
>>>>>>> 51c406da71463afd8a9ce92ab16a0d9da2db1664
>>>>>>> c846df1849f1443b406526d6790153afc715fd8e
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const storage = getStorage(app);
