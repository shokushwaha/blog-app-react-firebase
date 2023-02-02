import React, { useState, createContext } from 'react'
import { getDocs, collection, deleteDoc, doc, addDoc } from "firebase/firestore";
import { signOut } from 'firebase/auth';
import { auth, db } from "../firebase";
import { provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

import { ToastContainer, toast } from 'react-toastify';
export const AuthContext = createContext();
export default function AppProvider({ children }) {

    //dark mode
    const [dark, setDark] = useState(true);

    // blur navigatin bar on scroll
    const [blur, isBlur] = useState(false);

    // app.js
    const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
    const signUserOut = () => {
        signOut(auth).then(() => {
            localStorage.clear();
            setIsAuth(false);
            window.location.replace("/");
        });
    };



    // login.js

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem("isAuth", true);
            setIsAuth(true);
            localStorage.setItem("email", result.user.email);
            localStorage.setItem("name", result.user.displayName);
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
    const [imgurl, setImgUrl] = useState("");


    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    const createPost = async () => {
        await addDoc(postsCollectionRef, {
            title,
            postText,
            author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
            imgurl,
            createdAt: `${day}-${month}-${year}`
        });
        toast("Congratulations! Blog posted....")

        setTimeout(() => {

            window.location.replace("/");
        }, 4000);

    };


    return (
        <AuthContext.Provider value={{ dark, setDark, isAuth, setIsAuth, signUserOut, signInWithGoogle, postLists, setPostList, postsCollectionRef, getPosts, deletePost, title, setTitle, postText, setPostText, createPost, imgurl, setImgUrl, blur, isBlur }} >
            {children}
        </AuthContext.Provider>
    )
}
