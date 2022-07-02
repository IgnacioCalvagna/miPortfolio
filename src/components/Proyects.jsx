import React from 'react'

import sativaCo from "../assets/img/proyectos/sativaCo.png";
import imasApp from "../assets/img/proyectos/ImasApp.jpg";
import satindica from "../assets/img/proyectos/satindica.jpg";
import gif from "../assets/img/proyectos/gift-experience.jpg";
import Proyect from './Proyect';

const Proyects = ( { proyects } ) => {

    const imgProyects = [sativaCo, imasApp, satindica, gif];




    const misProyectos = proyects.map((p, i) => {
        return (
          <Proyect p={p} img={imgProyects[i]} key={i} />
        );
      });


  return (
    <>
    HOLA
     {/* {misProyectos} */}
    
    </>
  )
}

export default Proyects