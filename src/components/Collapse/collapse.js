import React, { useState } from "react";
import arrow from "../../assets/images/Collapse/arrow.png";

const Collapse = ({ title, content }) => {
  //déclaration d'un état en utlisant useState()
  const [Open, setOpen] = useState(false); // j'initial le state(false) du toggle
  //fonction pour gérer l'affichage du contenu des collapses
  const display = () => {
    setOpen(!Open);
  };
  return (
    //afficher un collapse fermé par défaut et l'utlisateur clique sur le chevron pour ouvrire et apparaitre le content
    <div className="collapse__disply__container">
      <div>
        <h2 className="collapse__disply__title" onClick={display}>
          {title}
          <img
            className={display ? "arrow arrow__up" : "arrow arrow__down"}
            src={arrow}
            alt="show content"
          />
        </h2>
      </div>
      <div className="collapse__disply__content">
        {Open && <p>{content}</p>}
      </div>
    </div>
  );
};

export default Collapse;
