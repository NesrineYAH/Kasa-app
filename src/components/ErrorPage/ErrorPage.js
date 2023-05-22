import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="errorConatiner">
      <span className="errorNomber">404</span>
      <p className="errorText">Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="errorLinkHome">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
};

export default ErrorPage;
