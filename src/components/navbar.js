import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css" 

function Navbar(){
  return (
    <nav className="navBar">
      <div className="navbar__logo">
        <img src ="../assets/images/logo/LOGO.SVG" alt "Logo kasa" />
          <NavLink to="/" className={nav} />
      </div>
      <div>Acceuil</div>
      <div>A propos</div>
    </nav>
  );
};

export default Navbar;
 
