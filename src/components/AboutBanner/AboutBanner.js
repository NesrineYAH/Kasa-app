import React from "react";
import aboutBanner from "../../assets/images/banner/aboutBanner.png";

const AboutBanner = () => {
  return (
    <div className="Banner__conteneur">
      <img className="Banner__img" src={aboutBanner} alt="About-page" />
    </div>
  );
};

export default AboutBanner;
