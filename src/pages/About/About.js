import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import AboutBanner from "../../components/AboutBanner/AboutBanner";
import Collapse from "../../components/Collapse/Collapse";
import CollapseData from "../../data/collapses.json";

const About = () => {
  return (
    <div className="about">
      {/* <Header>
        <Nav></Nav>
      </Header> */}
      <main>
        <AboutBanner />
        <div className="collapse">
          <div className="collapseDisply">
            {CollapseData.map((item) => {
              return (
                <div key={item.id}>
                  <Collapse content={item.content} title={item.title} />
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
