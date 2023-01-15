import React, { useState, createContext } from 'react'
import { getDocs, collection, deleteDoc, doc, addDoc } from "firebase/firestore";
import { signOut } from 'firebase/auth';
import { auth, db } from "../firebase";
import { provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
export const AuthContext = createContext();
export default function AppProvider({ children }) {

    // app.js
    const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
    const signUserOut = () => {
        signOut(auth).then(() => {
            localStorage.clear();
            setIsAuth(false);
            window.location.replace("/login");
        });
    };



    // login.js
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem("isAuth", true);
            setIsAuth(true);
            window.location.replace("/");
        });
    };


    // home.js
    const [postLists, setPostList] = useState([]);
    const postsCollectionRef = collection(db, "posts");
    const getPosts = async () => {
        const data = await getDocs(postsCollectionRef);
        setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    const deletePost = async (id) => {
        const postDoc = doc(db, "posts", id);
        await deleteDoc(postDoc);
        window.location.reload();
    };

    // create post.js
    const [title, setTitle] = useState("");
    const [postText, setPostText] = useState("");


    const createPost = async () => {
        await addDoc(postsCollectionRef, {
            title,
            postText,
            author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
        });
        window.location.replace("/");
    };

    return (
        <AuthContext.Provider value={{ isAuth, setIsAuth, signUserOut, signInWithGoogle, postLists, setPostList, postsCollectionRef, getPosts, deletePost, title, setTitle, postText, setPostText, createPost }} >
            {children}
        </AuthContext.Provider>
    )
}
