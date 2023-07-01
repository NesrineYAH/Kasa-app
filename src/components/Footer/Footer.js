import React from "react";
import logo from "../../assets/images/logo/logo_footer.png";

export default function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="footer logo" className="footer__logo" />
      <p className="footer__text-copyright">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
