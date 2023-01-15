import React, { useContext } from "react";
import "../CSS/Login.css"
import { AuthContext } from "../Context/Appcontext";
function Login() {

    const { signInWithGoogle } = useContext(AuthContext);

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