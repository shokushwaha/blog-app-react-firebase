import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

import { getStorage } from "firebase/storage";


const firebaseConfig = {

    apiKey: "AIzaSyCPjV9x3oUTeIXqCWAKMWKr_4YB868t9LU",
    authDomain: "blogs-60b63.firebaseapp.com",
    projectId: "blogs-60b63",
    storageBucket: "blogs-60b63.appspot.com",
    messagingSenderId: "184791569044",
    appId: "1:184791569044:web:f8ea365895a4e65f365a81"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const storage = getStorage(app);
