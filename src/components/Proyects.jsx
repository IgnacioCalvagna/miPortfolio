import React from "react";
import data from "../fakeData.json";
import sativaCo from "../img/proyectos/sativaCo.png";
import "../assets/css/proyects.css";
const Proyects = () => {
  const misProyectos = data.proyectos.map((p,i) => {
    return (
      <div className="item-producto "key={i}>
        <div key={p.id} className="desc-producto">
          <h2>{p.titulo}</h2>
          algo para ver {p.id}
          <p>{p.description}</p>
        </div>
        <div className="img-producto">
          <img src={sativaCo} width="100%" alt="" />
        </div>
      </div>
    );
  });


  return (
    <div>
      {misProyectos}
    </div>
  );
};

export default Proyects;
