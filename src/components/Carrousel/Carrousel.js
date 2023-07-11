import React, { useState } from "react";
import left from "../../assets/images/carrousel/flech-left.png";
import right from "../../assets/images/carrousel/flech-right.png";

export default function Carrousel({ slides }) {
  const [current, setCurrent] = useState(0); //j'ai initialisé l'index du premier slide à 0
  const length = slides.length; // longueur du tableau de slides

  const nextImage = () => {
    setCurrent(current + 1);
    if (current === length - 1) setCurrent(0);
  };

  const prevImage = () => {
    setCurrent(current - 1);
    if (current === 0) setCurrent(length - 1);
  };
  return (
    <section
      className="Carrousel__Contanier"
      style={{ backgroundImage: `url(${slides[current]})` }}
    >
      {length > 1 && (
        <>
          <img
            className="right-Arrow"
            src={right}
            alt="droite"
            onClick={nextImage}
          />
          <img
            className="left-Arrow"
            src={left}
            alt="gauche"
            onClick={prevImage}
          />

          <p className="slide">
            {current + 1}/{length}
          </p>
        </>
      )}
    </section>
  );
}
