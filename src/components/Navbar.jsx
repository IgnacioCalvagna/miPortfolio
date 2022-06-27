import React from "react";
// import Idiomas from "./Idiomas";
import "../assets/css/navbar.css";
import Idiomas from "./Idiomas";
// import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a href="/"> Ignacio Calvagna </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/"
                  rel="noopener noreferrer"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#aboutMe"
                  rel="noopener noreferrer"
                >
                  About me
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#proyects">
                  Proyects
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#contactMe"
                  rel="noopener noreferrer"
                >
                  Contactame
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
