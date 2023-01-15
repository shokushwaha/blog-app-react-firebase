import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/CreatePost.css"
import { AuthContext } from "../Context/Appcontext";
function CreatePost() {
    const navigate = useNavigate();
    const { setTitle, setPostText, createPost, isAuth } = useContext(AuthContext);

    useEffect(() => {
        if (!isAuth) {
            navigate("/login");
        }
    }, []);

    return (
        <div className="createPost">
            <div className="cpContainer">
                <div className="one">Write A Blog</div>
                <div className="inputGp">
                    <div className="two"> Title:</div>
                    <input
                        placeholder="Title..."
                        onChange={(event) => {
                            setTitle(event.target.value);
                        }}
                    />
                </div>
                <div className="inputGp">
                    <div className="three"> Post:</div>
                    <textarea
                        placeholder="Post..."
                        onChange={(event) => {
                            setPostText(event.target.value);
                        }}
                    />
                </div>
                <button className="btn" onClick={createPost}> Post Blog!</button>
            </div>
        </div>
    );
}

export default CreatePost;