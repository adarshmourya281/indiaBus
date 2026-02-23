import React from "react";
import "../../styles/layout/Navbar.css";


function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <span className="logo-black">India</span>
          <span className="logo-orange">Bus</span>
        </div>

        <ul className="nav-links">
          <li>Home</li>
          <li>Ticket</li>
          <li>Help</li>
          <li>Login/Signup</li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
