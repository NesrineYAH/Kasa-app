import React from "react";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import { Routes, Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Header className="header">
        <Nav className="Nav">
          <HashRouter>
            <Routes>
              <Route path="/" element={<NavLink replace to="/Accueil" />} />
              <Route path="Acceuil" element={<Home />} />
              <Route path="About" element={<About />} />
            </Routes>
          </HashRouter>
        </Nav>
      </Header>
    </div>
  );
};

export default App;
