import React from "react";
import cv from "../Cv-Ignacio-Calvagna.pdf";
import "../assets/css/footer.css";
import github from "../assets/img/githubFooter.png";
import lin from "../assets/img/in.png";
import ig from "../assets/img/ig.png";
import location from '../assets/img/location.png'

const Footer = () => {
  return (
    <section className="footerTot">
      <div className="download">
        <button className=" btn btn-dark b">
          <a href={cv} download="Cv-Ignacio-Calvagna.pdf">
            Descargar CV
          </a>
        </button>
      </div>

      <section className="infoFooter">
        <div className="donde">
            <img src={location} width="5%" alt="" />
          <p>
            {" "}
            Buenos Aires <br />
            Argentina
          </p>
        </div>

        <div className="redes" style={{ float: "left" }}>
          <p>Podes encontrarme en :</p>

          <a href="https://github.com/IgnacioCalvagna/" target="_blank" rel="noopener noreferrer">
            <img className="logo" src={github} width="8%" alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/ignacio-calvagna/" target="_blank" rel="noopener noreferrer">
            <img className="logo" src={lin} width="6.8%" alt="Linkedin" />
          </a>
          <a href="https://www.instagram.com/nachitocal/" target="_blank" rel="noopener noreferrer">
          <img className="logo" src={ig} width="5.5%" alt="Instagram" />
          </a>
        </div>
      </section>

      <div className="toti">
        <div className="pDelFooter">
          <p>
            Portfolio diseñado y desarrollado por Ignacio Calvagna <br />
            Todos los derechos reservados © 2022
          </p>
        </div>
      </div>
      <br />
    </section>
  );
};

export default Footer;
