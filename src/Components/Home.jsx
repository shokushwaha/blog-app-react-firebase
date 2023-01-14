import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase";
import DeleteIcon from '@mui/icons-material/Delete';
import "../CSS/Home.css"

function Home({ isAuth }) {

    const [postLists, setPostList] = useState([]);
    const postsCollectionRef = collection(db, "posts");

    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(postsCollectionRef);
            setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };

        getPosts();
    }, []);

    const deletePost = async (id) => {
        const postDoc = doc(db, "posts", id);
        await deleteDoc(postDoc);
        window.location.reload();
    };
    return (
        <div className="homePage">
            {postLists.map((post) => {
                return (
                    <div className="wrap">

                        <div className="post">
                            <div className="postHeader">
                                <div className="title">
                                    <h1> {post.title}</h1>
                                </div>
                                <div className="deletePost">
                                    {isAuth && post.author.id === auth.currentUser.uid && (
                                        <button
                                            onClick={() => {
                                                deletePost(post.id);
                                            }}
                                        >
                                            <DeleteIcon />
                                        </button>
                                    )}
                                </div>
                            </div>
                            <div className="postText"> {post.postText} </div>
                            <div className="postWriter" >@ {post.author.name}</div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Home;