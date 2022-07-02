import React, { useEffect, useState } from "react";
import fakeData from "../fakeData.json";

import "../assets/css/proyects.css";
const Proyects = () => {
  

  const [proyects, setProyects] = useState([])

useEffect(() => {
  // const proyectitos = 
    setProyects(fakeData.proyectos)
    console.log("Mis PROYECTOS------->",proyects)
}, [proyects])

  

  return (
    <>
      Proyectos
      <Proyects proyects={proyects} />

      
    </>
  );
};

export default Proyects;
