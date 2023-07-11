import logo from "../../assets/images/logo/LOGO.svg";

export default function Header(props) {
  return (
    <header className="header">
      <figure className="header__fig">
        <img className="header__logo" src={logo} alt="logo de l'agence kasa" />
      </figure>
      <nav className="nav-header">
        <div>{props.children}</div>
      </nav>
    </header>
  );
}
