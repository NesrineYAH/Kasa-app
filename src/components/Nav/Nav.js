import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar-header">
      <NavLink to="/" className="navbar-header__nav-link-home">
        Acceuil
      </NavLink>
      <NavLink to="/about" className="navbar-header__nav-link-about">
        A propos
      </NavLink>
    </nav>
  );
};

export default Navbar;
