import React, { useState } from "react";
import Chat from "./pages/Chat";
import { signInWithGoogle, logOut } from "./firebase";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";

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
