import React from "react";
import "../assets/css/header.css";
import Rosa from "react-on-scroll-animation";
import gif from "../assets/img/gif2.gif";
import downArrow from "../assets/img/downArrow.png"

const Header = () => {
  return (
    <>
      <div className="laImg">
        <img
          src={gif}
          alt="..."
          width="100%"

          
          objetcfit="contain"
          autoPlay
          className="header"
        />
      </div>
      <div className="yo">
        <Rosa animation="fade-right" anchorPlacement="top-bottom">
          <span className="limit">Ignacio Calvagana</span>
          <br />
          <span className="limit2">Desarrollador Web Front-End FullStack</span>
        </Rosa>

      <a href="#aboutMe" > <img className="downArrow" src={downArrow} width='11%' alt="" /></a>
      </div>


    </>
  );
};

export default Header;
