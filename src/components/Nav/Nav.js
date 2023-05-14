import React from "react";
import { Link } from "react-router-dom";

 export default function Nav() {   
  return (
     <nav className="nav-header">
      <Link to="/" className="nav-header_link-home">
        Accueil
      </Link>
      <Link to="/About" className="nav-header_link-about">
        A Propos
      </Link>
   </nav>
   );
 }
