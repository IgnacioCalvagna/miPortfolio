import React from "react";
import "../assets/css/aboutMe.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rosa from "react-on-scroll-animation";
import html from "../assets/img/skills/html.png";
import css from "../assets/img/skills/css.png";
import js from "../assets/img/skills/js.png";
import node from "../assets/img/skills/node.png";
import react from "../assets/img/skills/react.png";
import redux from "../assets/img/skills/redux.png";
import postman from "../assets/img/skills/postman.png";
import github from "../assets/img/skills/github.png";
import bootstrap from "../assets/img/skills/bootstrap.png";
import psql from "../assets/img/skills/psql.png";

const AboutMe = () => {
  return (
    <>
      
     

        <h3 className="miH3" >
        {" "}
        Acerca de mi 
        </h3>
      
      <div className="total ">
    
        <div className="tresCuartos container ">
      
            <p className="sobreMi container">
            Acerca de mi <br />
              Mi nombre es Ignacio Calvagna tengo 28 años, Desarrollador Web FullStack orientado a Front-End. <br />
              Hace algunos años me interese en el mundo de la tecnología y comence a estudiar programacion
            </p>
      
         
            <p className="sobreMi container">
                Acerca de mi
              Soy estudiate de segundo año de la carrera de Analista de
              Sistemas, egresado del coding bootcamp de Plataforma 5 de mas de 800 Hs. En donde aprendí todos los dias diversas tecnologías y tecnicas de programacion 
              Actualmente me encuentro haciendo un curso en CoderHouse de ReactJs para seguir profundizando en el mundo del front-end
            </p>
         
        </div>
        <div className="cuarto">
          <Rosa animation={"zoom-in-left"}>
            <h3>Skills</h3>
            <div className="misLogos">
              <img className="logos" src={html} width="15%" alt="" />
              <img className="logos" src={css} width="15%" alt="" />
              <img className="logos" src={js} width="15%" alt="" />
              <img className="logos" src={react} width="15%" alt="" />
              <img className="logos" src={redux} width="14%" alt="" />
            </div>
            <div className="misLogos">
              <img className="logos" src={node} width="15%" alt="" />
              <img className="logos" src={postman} width="15%" alt="" />
              <img className="logos" src={github} width="15%" alt="" />
              <img className="logos" src={psql} width="15%" alt="" />
              <img className="logos" src={bootstrap} width="15%" alt="" />
            </div>
          </Rosa>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
