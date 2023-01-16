import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/CreatePost.css"
import { AuthContext } from "../Context/Appcontext";


import {
    uploadBytes,
    getDownloadURL,
} from "firebase/storage";
import { storage } from "../firebase";
import { ref } from "firebase/storage"
import { v4 } from "uuid";


function CreatePost() {
    const navigate = useNavigate();
    const { setTitle, setPostText, createPost, isAuth, imgurl, setImgUrl } = useContext(AuthContext);

    // image uploading 
    const [imageUpload, setImageUpload] = useState(null);
    const uploadFile = () => {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setImgUrl(url);
                alert("image uploaded");
            });
        });
    };

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
                <div className="imgs">
                    <input
                        type="file"
                        onChange={(event) => {
                            setImageUpload(event.target.files[0]);
                        }}
                    />
                    <button onClick={uploadFile}> Upload Image</button>
                </div>
                <button className="btn" onClick={createPost}> Post Blog!</button>
            </div>
        </div>
    );
}

export default CreatePost;