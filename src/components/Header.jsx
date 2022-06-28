import React from "react";
import "../assets/css/header.css";
import Rosa from "react-on-scroll-animation";
const Header = () => {
  return (
    <>
      {/* <div className="algo"> */}
        <Rosa animation="fade-right" anchorPlacement="top-bottom" delay={800}>
          <div className="headDesc">
            <h1> Ignacio Calvagna</h1>
            <h2> Desarrollador web FullStack</h2>
          </div>
        </Rosa>
      {/* </div> */}
    </>
  );
};

export default Header;
