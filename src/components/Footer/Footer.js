import React from "react";
import logo from "../../assets/images/logo/logo_footer.png";

const Footer = () => {
  return (
    <Footer className="footer">
      <img src={logo} alt="" className="footer__logo" />
      <p className="footer__text-copyright">© 2020 Kasa. All rights reserved</p>
    </Footer>
  );
};

export default Footer;
