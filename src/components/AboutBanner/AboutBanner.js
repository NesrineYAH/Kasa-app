import React from "react";
import aboutBanner from "../../assets/images/banner/aboutBanner.png";

const AboutBanner = () => {
  return (
    <div className="AboutBanner__conteneur">
      <img
        className="BannerContainer__img"
        src={aboutBanner}
        alt="About-page"
      />
    </div>
  );
};

export default AboutBanner;
