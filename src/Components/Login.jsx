import React from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "../CSS/Login.css"
function Login({ setIsAuth }) {
    let navigate = useNavigate();

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem("isAuth", true);
            setIsAuth(true);
            navigate("/");
        });
    };

    return (
        <div className="loginPage">
            <p>Sign In With Google to Continue..!</p>
            <button className="login" onClick={signInWithGoogle}>
                Sign In!
            </button>
        </div>
    );
}

export default Login;