import React from "react";
import emptyStar from "../../assets/images/rate/startRempli.png";
import fullStar from "../../assets/images/rate/startVide.png";

const Rate = (props) => {
  const classement = props.classement;
  const notes = [1, 2, 3, 4, 5];
  return (
    <div className="rate-container">
      {notes.map((note) =>
        classement >= note ? (
          <img
            key={note.toString()}
            className="etoile"
            src={emptyStar}
            alt="star"
          />
        ) : (
          <img
            key={note.toString()}
            className="etoile"
            src={fullStar}
            alt="star"
          />
        )
      )}
    </div>
  );
};

export default Rate;
