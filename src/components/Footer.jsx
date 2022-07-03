import React from "react";
import cv from "./Cv-Ignacio-Calvagna.pdf";
import '../assets/css/footer.css'
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

    <div className='pDelFooter'>
      <p>
        Portfolio diseñado y desarrollado por Ignacio Calvagna <br />
        Todos los derechos reservados © 2022 
      </p>
    </div>
    </>
  );
};

export default Footer;
