import React from "react";
import { Carousel } from "react-bootstrap";
import sativa from "../assets/img/proyectos/sativaCo.png";
import imas from "../assets/img/proyectos/ImasApp.jpg";
import satindica from "../assets/img/proyectos/satindica.jpg";
import gift from "../assets/img/proyectos/gift-experience.jpg";
import '../assets/css/carouselProyectos.css'
const CaroucelProyectos = ({ proyectos }) => {


    const fotos = [sativa,imas,satindica,gift]
  return (
    <div className="totCarru">
      <Carousel>
        {proyectos.map((p, i,img) => {
          return (
            <Carousel.Item>
              <div className="container itemCarru">
                <div className="info">
                    <h5>{p.titulo}</h5>
                    <p>{p.description}</p>
                </div>
                <div className="imagen">
                  <img className="d-block w-100" src={fotos[i]} alt="First slide" />
                </div>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CaroucelProyectos;
