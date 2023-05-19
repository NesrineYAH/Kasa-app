import React from "react";
import aboutBanner from "../assets/images/banner/aboutBanner.png";

const About = () => {
  return (
    <div className="Page-about">
      <div className="Banner__conteneur">
        <img src={aboutBanner} alt="Bannier page About" />
      </div>
    </div>
  );
};

export default About;
