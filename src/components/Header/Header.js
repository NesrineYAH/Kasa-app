import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo/LOGO.svg";

function Header() {
  return (
    <header className="header">
      <figure className="header__fig">
        <img className="logo" src={logo} alt="logo de l'agence kasa" />
      </figure>
    </header>
  );
}

export default Header;
