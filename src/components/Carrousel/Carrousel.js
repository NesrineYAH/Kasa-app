import React from "react";

const Carrousel = ({ images }) => {
  return (
    <div>
      {images.map((image) => {
        return <img height="50" src={image} alt="image" />;
      })}
    </div>
  );
};

export default Carrousel;
