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
            <Carousel.Item key={i}>
              <div className="container itemCarru">
                <div className="info">
                    <h1>{p.titulo}</h1>
                  
                </div>
                <div className="imagen">
                  <img  src={fotos[i]} width={'100%'} height={'auto'} objetcfit="contain" alt="First slide" />
                </div>
                <div>
                <h4>{p.description}</h4>
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
