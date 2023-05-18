import React from "react";
import { Link } from "react-router-dom";
import logements from "../../data/logements.json";
import Card from "../Card/Card";

export default function EspaceLogement() {
  return (
    <div className="Espace-Logements">
      {logements.map((logement) => {
        return (
          <div key={logement.id}>
            <Link to={`/logement/${logement.id}`}>
              <Card image={logement.cover} title={logement.title}></Card>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
