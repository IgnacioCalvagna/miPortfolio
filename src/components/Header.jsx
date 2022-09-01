import React from "react";
import "../assets/css/header.css";
import Rosa from "react-on-scroll-animation";
import gif from "../assets/img/gif2.gif";
import downArrow from "../assets/img/downArrow.png";
import Typewriter from "typewriter-effect";

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
          <span className="limit">Ignacio Calvagna</span>
          <br />
          <span className="limit2">
          <Typewriter
          options={{
            autoStart: true,
            loop: true,
            delay: 80,
            strings: ["Desarrollador Frontend", "Desarrollador Web FullStack"],
          }}
        />
          </span>
        </Rosa>
        

        <a href="#aboutMe">
          {" "}
          <img className="downArrow" src={downArrow} width="11%" alt="" />
        </a>
      </div>
    </>
  );
};

export default Header;
