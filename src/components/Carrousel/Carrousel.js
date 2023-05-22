import React, { useState } from "react";

const Carrousel = ({ images }) => {
  const [Current, setCurrent] = useState(0);
  return (
    <div>
      {images.map((image) => {
        return <img height="250" src={image} alt="image" />;
      })}
    </div>
  );
};

export default Carrousel;
