import React from "react";
import "../assets/css/header.css";
import Rosa from "react-on-scroll-animation";
import gif from "../assets/img/gif.gif";
const Header = () => {
  return (
    <>
    <div >
      <img autoPlay loop muted  src={gif} alt="..." width="100%" />
    </div>
      <div className="yo">
      <Rosa  animation="fade-right" anchorPlacement="top-bottom" delay={800}>
        
          <span className="limit">Ignacio Calvagana</span>
          <br />
          <span className="limit">Desarrollador Web Front-End FullStack</span>
        
        </Rosa>
      </div>
    </>
  );
};

export default Header;
