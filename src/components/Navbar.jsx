import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ user, handleLogout }) => {
  return (
    
    <nav className="navbar">
      <h2>Oqu <span className="text-gradient">Quraly</span></h2>
      <div className="navbar-menu">
        <Link to="/" className="navbar-item">Home</Link>
        <Link to="/about" className="navbar-item">About</Link>
      </div>
      {user && (
        <div className="navbar-user">
          <img src={user.photoURL} alt="User Profile" />
          <span className="navbar-item">{user.displayName}</span>
          <button className="button" onClick={handleLogout}>Logout</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
