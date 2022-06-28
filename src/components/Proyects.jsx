import React from "react";
import fakeData from "../fakeData.json";
import sativaCo from "../assets/img/proyectos/sativaCo.png";
import imasApp from "../assets/img/proyectos/ImasApp.jpg";
import satindica from "../assets/img/proyectos/satindica.jpg";
import "../assets/css/proyects.css";
const Proyects = () => {

  const imgProyects = [sativaCo,imasApp,satindica]
  const misProyectos = fakeData.proyectos.map((p,i) => {
    return (
      <div className="item-producto "key={i}>
        <div key={p.id} className="desc-producto">
          <h2>{p.titulo}</h2>
          <p>{p.description}</p>
        </div>
        <div className="img-producto">
          <img src={imgProyects[i]} width="100%" alt="" />
        </div>
      </div>
    );
  });


  return (
    <>
    <h3 className='miH3' id='proyects'> Proyects</h3>
    <div>
      {misProyectos}
    </div>
    </>
  );
};

export default Proyects;
