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
import mongo from '../assets/img/skills/mongo.png'

const AboutMe = () => {
  return (
    <>
      {" "}
      <h3 className="miH3"> Acerca de mi</h3>
      <div className="total ">
        {" "}
        <div className="tresCuartos container ">
          {" "}
          <p className="sobreMi container">
            {/* Acerca de mi <br /> */}
            Hola 👋🏻 <br />
            Me presento, mi nombre es Ignacio Calvagna y tengo 28 años. Soy
            Desarrollador Web Full Stack orientado en Front-End. Hace algunos
            años me interesé en el mundo de la tecnología, comencé a estudiar
            programación de manera autodidacta, al poco tiempo, decidí anotarme
            en la carrera de Analista de Sistemas dando comienzo a mi formación
            profesional. <br />
            En el año 2021 me enfoqué a realizar diversos cursos de desarrollo
            web, el primer curso fue de introducción al desarrollo web ( HTML
            CSS JavaScript), luego apliqué al Coding Bootcamp de Plataforma 5
            (Full Stack) un curso intensivo de más de 800 hs donde aprendí el
            stack de tecnologías PERN, luego de comencé el curso de ReactJS en
            CoderHouse para seguir perfeccionando mis habilidades frontend.
            Actualmente, me encuentro realizando un curso de desarrollo BackEnd
            en el que estoy aprendiendo el stack de tecnologías MERN.
            <br />
            Aspiro perfeccionar mis habilidades frontend todos los días y
            conseguir un trabajo en el mundo IT.
          </p>
        </div>
        <div className="cuarto">
          <Rosa animation={"zoom-in-left"}>
            <h3>Skills</h3>
            <div className="misLogos">
              <img className="logos" src={html} width="15%" alt="" />
              <img className="logos" src={css} width="15%" alt="" />
              <img className="logos" src={js} width="15%" alt="" />
            </div>
            <div className="misLogos">
              <img className="logos" src={react} width="15%" alt="" />
              <img className="logos" src={redux} width="14%" alt="" />
              <img className="logos" src={node} width="15%" alt="" />
            </div>
            <div className="misLogos">
              <img className="logos" src={postman} width="15%" alt="" />
              <img className="logos" src={github} width="15%" alt="" />
              <img className="logos" src={psql} width="15%" alt="" />
            </div>
            <div className="misLogos">
              <img className="logos" src={bootstrap} width="15%" alt="" />
              <img className="logos" src={mongo} width="15%" alt="" />
            </div>
          </Rosa>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
