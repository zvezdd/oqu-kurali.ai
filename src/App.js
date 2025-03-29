import React, { useState, useEffect } from "react";
import Chat from "./pages/Chat";
import { signInWithGoogle, logOut } from "./firebase";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import icon from './images/icon.png'

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = async () => {
    const loggedInUser = await signInWithGoogle();
    setUser(loggedInUser);
  };

  const handleLogout = async () => {
    await logOut();
    setUser(null);
  };

  useEffect(() => {
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'icon';
    link.href = icon;
    document.head.appendChild(link);
  }, []);

  return (
    <div className="App">
      {user ? (
        <div>
          <Navbar user={user} handleLogout={handleLogout} />
         
          <Routes>
            <Route path="/" element={<Chat/>}/>
            <Route path="/about" element={<About/>}/>
          </Routes>
        </div>
      ) : (
        <div>
          <h1 className="title">Өз <span className="text-gradient">тіліңізге <br/> сүңгіңіз!</span> </h1>
          <button className="button" onClick={handleLogin}>
            Sign in with Google
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
