import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <Nav className="nav-header">
      <NavLink to="/" className="nav-header_link-home">
        Accueil
      </NavLink>
      <NavLink to="/About" className="nav-header_link-about">
        A Propos
      </NavLink>
    </Nav>
  );
}
