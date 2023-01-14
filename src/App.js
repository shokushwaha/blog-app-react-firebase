import "./App.css";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./Components/Home";
import CreatePost from "./Components/CreatePost";
import Login from "./Components/Login";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";
import Footer from "./Components/Footer";
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import CreateIcon from '@mui/icons-material/Create';
function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };

  return (
    <Router>
      <nav>
        <NavLink to="/" className="btns">< HomeIcon /> Home </NavLink>

        {!isAuth ? (
          <NavLink to="/login" className="btns"><LoginIcon /> Login </NavLink>
        ) : (
          <>
            <NavLink to="/createpost"> <CreateIcon />Create Post </NavLink>
            <button onClick={signUserOut} className="lgbtn"><LogoutIcon /> Log Out</button>
          </>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} />} />
        <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;