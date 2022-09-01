import React from "react";
import cv from "../Cv-Ignacio-Calvagna.pdf";
import "../assets/css/footer.css";
import github from "../assets/img/githubFooter.png";
import lin from "../assets/img/in.png";
import ig from "../assets/img/ig.png";

const Footer = () => {
  return (
    <>
      <div className="download">
        <button className=" btn btn-dark">
          <a href={cv} download="Cv-Ignacio-Calvagna.pdf">
            Descargar CV
          </a>
        </button>
      </div>

      <div className="toti">
        <div className="redes" style={{ float: "left" }}>
          <p>Podes encontrarme en :</p>
          <img className="logo" src={github} width="3%" alt="GitHub" />
          <img className="logo" src={lin} width="3%" alt="Linkedin" />
          <img className="logo" src={ig} width="2.5%" alt="Instagram" />
        </div>
        <div className="pDelFooter">
          <p>
            Portfolio diseñado y desarrollado por Ignacio Calvagna <br />
            Todos los derechos reservados © 2022
          </p>
        </div>
      </div>
      <br />
    </>
  );
};

export default Footer;
