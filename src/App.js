import React from "react";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import { Routes, Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import FicheLogements from "./pages/logements/FicheLogements";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
import "./App.scss";

const App = () => {
  return (
    <div className="App ">
      <main>
        <Header />
        <HashRouter>
          <Nav></Nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/logement/:id" element={<FicheLogements />} />
          </Routes>
        </HashRouter>
      </main>
      <Footer />
    </div>
  );
};

export default App;
