import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

import '../assets/css/navbar.css'
const navbar = () => {
  return (
    <>
     <Navbar className="navbar sticky-top"bg="dark" variant="dark" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Ignacio Calvanga </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
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
