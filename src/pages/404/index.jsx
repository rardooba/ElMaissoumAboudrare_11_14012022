import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Error = () => {
  return (
    <div className="homepage">
      <main className="error-main">
        <span className="error">404</span>
        <span className="error-tagline">
          Oops! La page que vous demandez n'existe pas.
        </span>
        <Link to="/" title="Home">
          Retourner sur la page d'accueil
        </Link>
      </main>
    </div>
  );
};

export default Error;
