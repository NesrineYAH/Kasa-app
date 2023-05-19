import React from "react";

const Host = ({ image, name }) => {
  return (
    <div className="Host__container">
      <h2 className="Host__name">{name}</h2>
      <img src={image} className="Host__img" alt="" />
    </div>
  );
};

export default Host;
