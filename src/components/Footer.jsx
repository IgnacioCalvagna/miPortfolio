import React from "react";
import "../assets/css/footer.css";

const Footer = () => {
  return (
    <>
      <div className="totFooter">
        <div className="redes">
          <h2 className="MIP">Contactame tambien en </h2>
          <a href="https://github.com/IgnacioCalvagna" target={"_blank"}rel="noopener noreferrer">
            {" "}
            {/* <img className="logoFooter" src={githubFooter} width="5%" alt="" /> */}
          </a>
          <a
            href="https://www.linkedin.com/in/ignacio-calvagna/"
            target="_blank" rel="noopener noreferrer"
          >
            {/* <img className="logoFooter" src={linkedin} width="4.8%" alt="" />{" "} */}
          </a>
          <a href="https://www.instagram.com/nachitocal/" target={"_blank"}rel="noopener noreferrer">
            {/* <img className="logoFooter" src={ig} width="4%" alt="" /> */}
          </a>
        </div>
        <div>
        </div>
      </div>
      <div>
        <p>
          Portfolio desarrollado por Ignacio Calvagna Copyright © 2022. <br />{" "}
          todos los derechos reservados.
        </p>
      </div>
    </>
  );
};

export default Footer;
