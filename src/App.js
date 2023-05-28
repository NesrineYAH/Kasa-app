import React from "react";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import FicheLogements from "./pages/logements/FicheLogements";
//import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
import Error from "./pages/Error/Error";
import "./App.scss";
import EspaceLogement from "./components/EspaceLogement/EspaceLogement";

const App = () => {
  return (
    <div className="App ">
      <main className="main">
        <Header />
        <HashRouter>
          <Nav></Nav>
          <Routes>           
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/logement/:id" element={<FicheLogements />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </HashRouter>
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
