import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

import "../assets/css/navbar.css";
const navbar = () => {


   const handleVerClick = (e) =>{
      console.log(e)
   }
  return (
    <>
      <Navbar  className='sticky-md-top' fixed={'top'}  bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Ignacio Calvagna </Navbar.Brand>
          <Navbar.Toggle onClick={handleVerClick}  aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" navbarScroll>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#aboutMe">AboutMe</Nav.Link>
              <Nav.Link href="#proyects">Proyects</Nav.Link>
              <Nav.Link href="#contactMe">Contact me </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default navbar;
