import React, { useState } from "react";
import Chat from "./components/Chat";
import { signInWithGoogle, logOut } from "./firebase";
import "./App.css";
import Navbar from "./components/Navbar";

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
          <h1>
            Талқылауды <span className="text-gradient">бастаңыз</span>
          </h1>
          <Chat />
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
