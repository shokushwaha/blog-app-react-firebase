import "./App.css";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./Components/Home";
import CreatePost from "./Components/CreatePost";
import Login from "./Components/Login";
import { useContext, useEffect, useState } from "react";
import Footer from "./Components/Footer";
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import CreateIcon from '@mui/icons-material/Create';
import { AuthContext } from "./Context/Appcontext";
function App() {
  const { isAuth, setIsAuth, signUserOut, dark, setDark } = useContext(AuthContext);
  const [name, setName] = useState("  ");
  let x = localStorage.getItem("name");
  useEffect(() => {
    setName(x);
  }, [isAuth]);

  const handleDark = () => {
    setDark(!dark);

  }
  return (
    <Router>
      <nav style={{ backgroundColor: dark ? "#17252a" : "azure" }} >
        <NavLink to="/" className="btns" style={{ color: dark ? "white" : "black" }} >< HomeIcon /> Home </NavLink>


        {!isAuth ? (
          <NavLink to="/login" className="btns" style={{ color: dark ? "white" : "black" }}><LoginIcon /> Login </NavLink>
        ) : (
          <>
            <NavLink to="/createpost"> <CreateIcon />Create Post </NavLink>
            <button onClick={signUserOut} className="lgbtn" style={{ backgroundColor: dark ? "azure" : "red", color: dark ? "black" : "azure" }}><PowerSettingsNewIcon /> </button>
          </>
        )}
        <>
          <label className="switch">
            <input type="checkbox" onChange={handleDark} />
            <span className="slider"></span>
          </label>
        </>
      </nav>
      {
        isAuth ?

          <div className="greet" style={{ backgroundColor: dark ? "#d6f6f9" : "black", color: dark ? "black" : "azure" }}>
            Welcome!! {name}
          </div> : null}
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