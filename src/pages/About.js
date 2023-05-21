import React from "react";
//import { Routes, Route, HashRouter } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import AboutBanner from "../components/AboutBanner/AboutBanner";
// import Collapse from "../components/Collapse/Collapse";
// import CollapseData from "../data/collapses.json";

const About = () => {
  return (
    <div className="about-Page">
      <Header />
      <main>
        <AboutBanner />
        {/* <div className="collapse">
          <div className="collapse__disply">
            {CollapseData.map((item) => {
              return (
                <div key={item.id}>
                  <Collapse content={item.content} title={item.title} />
                </div>
              );
            })}
          </div>
        </div> */}
      </main>
      <Footer />
    </div>
  );
};

export default About;
