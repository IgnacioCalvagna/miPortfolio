import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
const navbar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Ignacio Calvagna</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#link">About me</Nav.Link>
              <Nav.Link href="#link">Proyects</Nav.Link>
              <Nav.Link href="#link">Contact me</Nav.Link>
              <Nav.Link href="#link">Algo mas</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default navbar;
