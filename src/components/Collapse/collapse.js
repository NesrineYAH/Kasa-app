import React, { useState } from "react";
//import ChevronBas from "../../assets/images/Collapse/vectorBas.svg";
//import ChevronUp from "../../assets/images/Collapse/vectorHaut.svg";

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
      <div className="collapse__disply__title">
        <h2>{title}</h2>
        <p onClick={display}>
          {Open ? (
            <i className="fa-solid fa-chevron-up"></i>
          ) : (
            <i className="fa-solid fa-chevron-down"></i>
          )}
        </p>
      </div>
      <div className="collapse__disply__content">
        {Open && <p>{content}</p>}
      </div>
    </div>
  );
};

export default Collapse;
