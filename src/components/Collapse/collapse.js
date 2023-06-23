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
    <div className="collapseDisply__container">
      <div className="collapseDisply__title">
        <h2 className="titleCollapse">{title}</h2>
        <img
          onClick={display}
          className={Open ? "arrow arrow__up" : "arrow arrow__down"}
          src={arrow}
          alt="show content"
        />
      </div>
      {/* Si le collapse est à TRUE alors il affichera la description */}
      <div className="collapseDisply__content ">{Open && <p>{content}</p>}</div>
    </div>
  );
};

export default Collapse;
