import React from "react";
import '../assets/css/aboutMe.css'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rosa from "react-on-scroll-animation";
import html from "../img/skills/html.png";
import css from "../img/skills/css.png";
import js from "../img/skills/js.png";
import node from "../img/skills/node.png";
import react from "../img/skills/react.png";
import redux from "../img/skills/redux.png";
import postman from "../img/skills/postman.png";
import github from "../img/skills/github.png";
import bootstrap from "../img/skills/bootstrap.png";
import psql from "../img/skills/psql.png";

const AboutMe = () => {
  return (
    <>
      <Rosa animation={"fade-down"}>
        {" "}
        <h3 className="miH3">Acerca de mi</h3>
      </Rosa>

      <div className="total container">
        <div className="tresCuartos">
          <p className="sobreMi">
            <Rosa animation={"fade-right"}>
              Mi nombre es Ignacio Calvagna tengo 28 años, resido en Tigre,
              Buenos Aires{" "}
            </Rosa>
          </p>
          <p className="sobreMi">
            <Rosa animation={"zoom-in-up"}>
              Soy estudiate de segundo año de la carrera de Analista de
              Sistemas, egresado del coding bootcamp de Plataforma 5 en donde
              realice un curso de mas de 800 Hs en donde aprendí diversas
              tecnologias desempeñando tareas Front-end y Back-end Actualmente
              me encuentro haciendo un curso en CoderHouse de ReactJs para
              seguir profundizando en el mundo del front-end
            </Rosa>
          </p>
        </div>
        <div className="cuarto">
          <Rosa animation={"zoom-in-left"}>
            <h3>Skills</h3>
            <div className="misLogos">
              <img className="logos" src={html} width="15%" alt="" />
              <img className="logos" src={css} width="15%" alt="" />
              <img className="logos" src={js} width="15%" alt="" />
              <img className="logos" src={node} width="15%" alt="" />
              <img className="logos" src={react} width="15%" alt="" />
            </div>
            <div>
              <img className="logos" src={redux} width="15%" alt="" />
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
