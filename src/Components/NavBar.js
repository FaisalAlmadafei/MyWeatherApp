// src/components/NavBar.js
import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-item">
        My Location
      </Link>

      <Link to="/search" className="nav-item">
       Search
      </Link>
    
    </nav>
  );
}

export default NavBar;
