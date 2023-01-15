import React, { useEffect, useContext } from "react";

import { auth } from "../firebase";
import DeleteIcon from '@mui/icons-material/Delete';
import { AuthContext } from "../Context/Appcontext";
import "../CSS/Home.css"

function Home({ isAuth }) {

    const { postLists, getPosts, deletePost } = useContext(AuthContext);




    useEffect(() => {
        getPosts();
    }, []);


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