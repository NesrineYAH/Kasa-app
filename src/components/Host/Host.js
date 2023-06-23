import React from "react";

const Host = ({ image, name }) => {
  return (
    <div className="HostContainer">
      <h2 className="HostContainer__name">{name}</h2>
      <img src={image} className="HostContainer__img" alt="" />
    </div>
  );
};

export default Host;
