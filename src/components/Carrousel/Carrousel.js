import React, { useState } from "react";
import left from "../../assets/images/carrousel/flech-left.png";
import right from "../../assets/images/carrousel/flech-right.png";

export default function Carrousel({ slides }) {
  const [current, setCurrent] = useState(0); //j'ai initialisé l'index du premier slide à 0
  const length = slides.length; // longueur du tableau de slides

  //   /**Function pour l'image precedente */
  //   const nextImage = () => {
  //     setCurrent(current === length - 1 ? 0 : current + 1); // on début avec le premier slide quand on arrive au dernier
  //   };
  //   /**Function pour l'image suivante */
  //    const prevImage = () => {
  //     setCurrent(current === 0 ? length - 1 : current - 1); // on repart au dernier slide quand on est au premier
  //   };

  //   return (
  //     <section className="Carrousel__Contanier">
  //       {length > 1 && (
  //         <img
  //           src={left} //Affichage des flèches seulement si length > 1
  //           alt="gauche"
  //           onClick={prevImage}
  //           className="left-Arrow"
  //         />
  //       )}
  //       {length > 1 && (
  //         <img
  //           src={right}
  //           alt="droite"
  //           onClick={nextImage}
  //           className="right-Arrow"
  //         />
  //       )}

  //       {slides.map((slide, index) => {
  //         <div
  //           key={index}
  //           className={current === index ? "slider active" : "slider"}
  //         >
  //           {index === current && (
  //             <img src={slide} alt="img-appartement" className="slide__image" />
  //           )}
  //           {index === current && length > 1 && (
  //             <span className="slider__number">
  //               {current + 1}/{length}
  //             </span>
  //           )}
  //         </div>;
  //       })}
  //     </section>
  //   );
  // }

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
