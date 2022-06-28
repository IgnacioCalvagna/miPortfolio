import React from "react";
import "../assets/css/header.css";
import Rosa from "react-on-scroll-animation";
import gif from "../assets/img/gif.gif";
const Header = () => {
  return (
    <>
      <img src={gif} width="100%" />

      <div className="yo">
        <Rosa animation={"fade-right"}>
          <h1>Ignacio Calvagana</h1>
          <h2>Desarrollador Web Front-End FullStack</h2>
        </Rosa>
      </div>
    </>
  );
};

export default Header;
