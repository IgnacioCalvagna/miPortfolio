import React, { useEffect, useState } from "react";
import fakeData from "../fakeData.json";
import CaroucelProyectos from "./CaroucelProyectos";
import '../assets/css/contenedorProyectos.css'

const ContenedorProyectos = () => {
  const [proyectos, setProyectos] = useState([]);

  useEffect(() => {
    setProyectos(fakeData.proyectos);
  }, []);

  return (
    <>
        <h2 style={{textAlign: 'center'}} > Proyectos</h2>
      <CaroucelProyectos proyectos={proyectos} />
    </>
  );
};

export default ContenedorProyectos;
