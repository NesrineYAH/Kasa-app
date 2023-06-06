import React from "react";
import Banner from "../../components/Banner/Banner";
import EspaceLogement from "../../components/EspaceLogement/EspaceLogement";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <EspaceLogement />
      <Footer />
    </div>
  );
};

export default Home;
