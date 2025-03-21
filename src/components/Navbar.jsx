import React from "react";

const Navbar = ({ user, handleLogout }) => {
  return (
    <nav className="navbar">
      <h2>Oqu <span className="text-gradient">Quraly</span></h2>
      <div className="navbar-menu">
        <a href="#" className="navbar-item">Home</a>
        <a href="#" className="navbar-item">About</a>
        <a href="#" className="navbar-item">Contact</a>
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
