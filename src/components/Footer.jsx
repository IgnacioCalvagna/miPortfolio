import React from "react";
import {} from "react-router-dom";

import "../assets/css/footer.css";
// import ig from "../img/ig.png";
// import linkedin from "../assets/img/in.png";
// import githubFooter from "../img/githubFooter.png";
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

 
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26327.992951588745!2d-58.59339763345018!3d-34.42677749731584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bca5a2d0ddb9b1%3A0x2c1a974c67cba1e4!2sTigre%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1654622745187!5m2!1ses-419!2sar"
            width="400"
            height="300"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          /> */}
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
