import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
const navbar = () => {
  return (
    <>
     <Navbar bg="dark" variant="dark" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Ignacio Calvanga </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">AboutMe</Nav.Link>
        <Nav.Link href="#link">Proyects</Nav.Link>
        <Nav.Link href="#link">Contact me </Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </>
  );
};

export default navbar;
