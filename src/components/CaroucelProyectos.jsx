import React from "react";
import { Carousel } from "react-bootstrap";
import sativa from "../assets/img/proyectos/sativaCo.png";
import imas from "../assets/img/proyectos/imas.jpeg";
import satindica from "../assets/img/proyectos/satindica.jpeg";
import gift from "../assets/img/proyectos/gitf-experience.jpeg";
import "../assets/css/carouselProyectos.css";
const CaroucelProyectos = ({ proyectos }) => {
   const fotos = [sativa,imas,satindica,gift]
  return (
    <div className="totCarru">
      <h2 style={{textAlign: 'center'}} > Proyectos</h2>
      <Carousel>
        {proyectos.map((p, i, img) => {
          return (
            <Carousel.Item key={i}>
              {!p.url ? (
                <>
                  <div className="container itemCarru">
                    <div className="info">
                      <h1>{p.titulo}</h1>
                    </div>
                    <div className="imagen">
                      <img  src={fotos[i]} width={'100%'} height={'auto'} objetcfit="contain" alt="First slide" />
                    </div>
                    <div>
                    <h4 className="descriptionProject">{p.description.slice(0,100)}...</h4>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="container itemCarru">
                    <a href={p.url} target="_blank" rel="noopener noreferrer" >
                    <div className="info">
                      <h1>{p.titulo}</h1>
                    </div>
                    <div className="imagen">
                      <img  src={fotos[i]} width={'100%'} height={'auto'} objetcfit="contain" alt="First slide" />
                    </div>
                    <div>
                      <h4 className="descriptionProject">{p.description.slice(0,100)}...</h4>
                    </div>
                    </a>
                  </div>
                </>
              )}
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CaroucelProyectos;
