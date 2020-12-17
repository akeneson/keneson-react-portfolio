import React, { useState } from "react";
import { Row, Container, Col, Nav, Navbar, NavLink, NavDropdown, Form, FormControl, Button } from "react-bootstrap"; 
import "./Navigation.css"
 
const Navigation = () => {

  return (


<Navbar expand="lg" className="mb-5">
  <Navbar.Brand className="pink d-block d-md-none">AK</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mx-auto ">
      <Nav.Link href="#home"><h4>PROFILE</h4></Nav.Link>
      <Nav.Link href="#portfolio"><h4>PORTFOLIO</h4></Nav.Link>
      <Nav.Link href="#resume"><h4>RESUME</h4></Nav.Link>
     <Nav.Link href="#contact"><h4>CONTACT</h4></Nav.Link>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
 );
};

export default Navigation;