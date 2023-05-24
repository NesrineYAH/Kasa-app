import React, { useState } from "react";
import left from "../../assets/images/carrousel/flech-left.png";
import right from "../../assets/images/carrousel/flech-right.png";

const Carrousel = ({ slides }) => {
  const [Current, setCurrent] = useState(0); //j'ai initialié l'index du premier slide à 0
  const length = slides.length; // longueur du tableau de slides

  /**Function pour l'image precedente */
  const nextImage = () => {
    setCurrent(Current === length - 1 ? 0 : Current + 1); // on début avec le premier slide quand on arrive au dernier
  };
  /**Function pour l'image suivante */
  const prevImage = () => {
    setCurrent(Current === 0 ? length - 1 : Current - 1); // on repart au dernier slide quand on est au premier
  };

  return (
    <section className="Carrousel__Contanier">
      {length > 1 && (
        <img
          src={left} //Affichage des flèches seulement si length > 1
          alt="gauche"
          onClick={prevImage}
          className="leftArrow"
        />
      )}
      {length > 1 && (
        <img
          src={right}
          alt="droite"
          onClick={nextImage}
          className="rightArrow"
        />
      )}

      {slides.map((image, index) => {
        <div
          key={index}
          className={Current === index ? "slider active" : "slider"}
        >
          {index === Current && (
            <img src={image} alt="img-appartement" className="slide__image" />
          )}
          {index === Current && length > 1 && (
            <span className="slider__number">
              {/* {Current + 1}/{length} */}
            </span>
          )}
        </div>;
      })}
    </section>
  );
};

export default Carrousel;
