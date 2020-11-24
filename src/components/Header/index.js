import React from "react";
import "./style.css";
import { Navbar, Nav } from "react-bootstrap";

function Header() {
  return (
    <Navbar
      collapseOnSelect
      expand="sm"
      bg="light"
      variant="light"
      sticky="top"
    >
      <Navbar.Brand href="#about">Pha Kpa</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
