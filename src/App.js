import React from "react";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import { Routes, Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "./App.scss";

const App = () => {
  return (
    <div className="App ">
      <Header>
        <HashRouter>
          {/* <nav>
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/about">A Propos</NavLink>
          </nav> */}
          <Nav></Nav>
          <Routes>
            <Route path="/" element={<NavLink replace to="/acceuil" />} />
            <Route path="/acceuil" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </HashRouter>
      </Header>
    </div>
  );
};

export default App;
