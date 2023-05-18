import React from "react";
import { Link } from "react-router-dom";
import logements from "../../data/logements.json";
import Card from "../../components/Card/Card";
import { useParams, Navigate } from "react-router-dom";
//import Tag from "./Tag";
//import Collapse from "../collapse/Collapse";
import Carrousel from "../../components/Carrousel/Carrousel";
//import Rate from "./Rate";
import Host from "../../components/Host/Host";

export default function FicheLogements() {
  const { id } = useParams();
  const ficheLogement = logements.find((logement) => logement.id === id);

  /* Tags */
  const tagsLogement = ficheLogement?.tags.map((tags, i) => {
    //return <Tag key={i} nom={tags} />;
    return <p key={i}>{tags}</p>;
  });

  /* Équipements */
  const equipements = ficheLogement?.equipments.map((equipment, i) => {
    return (
      <ul key={i}>
        <li>{equipment}</li>
      </ul>
    );
  });

  return (
    <div style={{ marginTop: "10" + "em" }}>
      {ficheLogement ? (
        <div className="Fiche-container">
          <Carrousel images={ficheLogement?.pictures} />
          <section className="Fiche-logement">
            <div className="description-info">
              <div className="description-info__titletags">
                <div className="description-info__titletags__title">
                  <span className="titre-logement">{ficheLogement?.title}</span>
                  <span className="endroit-logement">
                    {ficheLogement?.location}
                  </span>
                </div>
                {/* Tags */}
                <div className="description-info__titletags__tags">
                  {tagsLogement}
                </div>
              </div>

              <div className="description-info__proprietaire">
                {/* Hosting */}
                <div className="description-info__proprietaire__nom-prop">
                  <Host
                    name={ficheLogement?.host.name}
                    image={ficheLogement?.host.picture}
                  />
                </div>
                {/* Rating */}
                <div className="description-info__proprietaire__rate">
                  {/* <Rate score={ficheLogement.rating} /> */}
                  <p>{ficheLogement.rating}</p>
                </div>
              </div>
            </div>
          </section>
          {/* Collapse */}
          <div className="description-centent">
            <div className="description-centent__description">
              {/* <Collapse
                title="Description"
                content={ficheLogement?.description}
              /> */}
              <p>{ficheLogement?.description}</p>
            </div>
            <div className="description-centent__equipement">
              {/* <Collapse title="Équipements" content={equipements} /> */}
              <div>{equipements}</div>
            </div>
          </div>
        </div>
      ) : (
        <Navigate replace to="/404" />
      )}
    </div>
  );
}
