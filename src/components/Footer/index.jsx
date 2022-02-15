import React from "react";
import "./index.css";

const Footer = () => {
  
  const dynamicDateCopyright = () => {
    return new Date().toLocaleDateString("fr-FR", {
          year: "numeric"
      })
  }  
  return (
    <footer className="main-footer">
      <img src="/images/logo-white.png" alt="logo de l'agence Kasa" />
      <p>
        <span className="far fa-copyright"></span> {dynamicDateCopyright()} Kasa. All rights
        reserved
      </p>
    </footer>
  );
};

export default Footer;
