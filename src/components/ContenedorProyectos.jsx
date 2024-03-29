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
      <CaroucelProyectos proyectos={proyectos} />
    </>
  );
};

export default ContenedorProyectos;
