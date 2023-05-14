import logo from "../../assets/images/logo/LOGO.svg";
import Nav from "../Nav/Nav";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <header className="header">
      <figure className="header__fig">
        <img className="logo" src={logo} alt="logo de l'agence kasa" />
      </figure>
      <nav className="navbar-header">
        <div>{props.children}</div>
      </nav>
    </header>
  );
}
