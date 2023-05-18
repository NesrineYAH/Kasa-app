import React from "react";

function Card({ image, title }) {
  return (
    <article className="card">
      <img
        height="100"
        width="100"
        src={image}
        alt={title}
        className="card__img"
      />
      <div className="card-article"></div>
      <h2 className="card_title">{title}</h2>
    </article>
  );
}

export default Card;
