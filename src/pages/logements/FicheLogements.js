import React from "react";
import { Link } from "react-router-dom";
import logements from "../../data/logements.json";
import Card from "../../components/Card/Card";
import { useParams, Navigate } from "react-router-dom";
import Tag from "../../components/Tag/Tag";
import Collapse from "../../components/Collapse/Collapse";
import Carrousel from "../../components/Carrousel/Carrousel";
import Rate from "../../components/Rate/Rate";
import Host from "../../components/Host/Host";

export default function FicheLogements() {
  const { id } = useParams();
  const ficheLogement = logements.find((logement) => logement.id === id);

  /* Tags */
  const tagsLogement = ficheLogement?.tags.map((tags, i) => {
    return <Tag key={i} nom={tags} />;
    //return <p key={i}>{tags}</p>;
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
    <div>
      {ficheLogement ? (
        <div className="Fiche-container">
          <Carrousel images={ficheLogement?.pictures} />
          <section className="Fiche-logement">
            <div className="informations">
              <div className="informations__titletags">
                <div className="informations__titletags__title">
                  <span className="titre-logement">{ficheLogement?.title}</span>
                  <span className="endroit-logement">
                    {ficheLogement?.location}
                  </span>
                </div>
                {/* Tags */}
                <div className="informations__titletags__tags">
                  {tagsLogement}
                </div>
              </div>

              <div className="informations__proprietaire">
                {/* Host */}

                <div className="informations__proprietaire__nom-propre">
                  <Host
                    name={ficheLogement?.host.name}
                    image={ficheLogement?.host.picture}
                  />
                </div>
                {/* Rate */}
                <div className="informations__proprietaire__rate">
                  <Rate classement={ficheLogement.rating} />
                  <p>{ficheLogement.Rate}</p>
                </div>
              </div>
            </div>
          </section>
          {/* Collapse */}
          <div className="description-centent">
            <div className="description-centent__description">
              <Collapse
                title="Description"
                content={ficheLogement?.description}
              />
              <p>{ficheLogement?.description}</p>
            </div>
            <div className="description-centent__equipement">
              <Collapse title="Équipements" content={equipements} />
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
