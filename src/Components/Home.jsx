import React, { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import { auth } from "../firebase";
import DeleteIcon from '@mui/icons-material/Delete';
import { AuthContext } from "../Context/Appcontext";
import { ToastContainer, toast } from "react-toastify";
import "../CSS/Home.css"

function Home({ isAuth }) {

    const { postLists, getPosts, deletePost, dark } = useContext(AuthContext);
    useEffect(() => {
        getPosts();
    }, []);



    return (
        <motion.div
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{
                type: "tween",
                duration: "0.4",
                delay: "0"
            }}>
            <ToastContainer />
            <div className="homePage" style={{ backgroundColor: dark ? "#17252a" : "azure" }}>
                {postLists.map((post) => {
                    return (
                        <div className="wrap">

                            <div className="post" key={post.author.id} style={{ backgroundColor: dark ? "azure" : "#d6f6f9" }}>
                                <div className="xbox">
                                    <div className="imgs">
                                        {post.imgurl === "" ?
                                            null : <img src={post.imgurl} />}
                                    </div>
                                    <div className="ybox">

                                        <div className="title">
                                            <h1> {post.title}</h1>
                                        </div>
                                        <div className="postWriter" >@ {post.author.name}</div>
                                        <div className="postDate" >{post.createdAt}</div>
                                    </div>

                                </div>

                                <div className="postText"> {post.postText} </div>

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

                        </div>
                    );
                })}
            </div>
        </motion.div>
    );
}

export default Home;