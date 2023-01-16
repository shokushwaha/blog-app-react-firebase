import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
<<<<<<< HEAD
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
=======
>>>>>>> 51c406da71463afd8a9ce92ab16a0d9da2db1664

const firebaseConfig = {
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
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
<<<<<<< HEAD
export const storage = getStorage(app);
=======
>>>>>>> 51c406da71463afd8a9ce92ab16a0d9da2db1664
