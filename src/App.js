import React, {useState} from "react";
import Chat from "./components/Chat";
import { signInWithGoogle, logOut } from "./firebase";


function App() {
  
const [user, setUser] = useState(null);

const handleLogin = async () => {
  const loggedInUser = await signInWithGoogle();
  setUser(loggedInUser)
}

const handleLogout = async () => {
  await logOut();
  setUser(null);
}

  return (
    <div className="App">
            {user ? (
        <div>
           <Chat />
          <p>👤 {user.displayName}</p>
          <p>📧 {user.email}</p>
          <img src={user.photoURL} alt="Profile" width="100" />
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <button onClick={handleLogin}>Sign in with Google</button>
      )}

     
    </div>
  );
}

export default App;
