import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import logo from '../../images/logo.png';

import NavDropdown from 'react-bootstrap/NavDropdown';
import './navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const NavBar= () => {
    return (
        <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        
  <Navbar.Brand href="#home">F & T Nature</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      
    </Nav>
    <Nav>
    <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="#skills">Product</Nav.Link>
      <Nav.Link href="#experience">Coantact</Nav.Link>
      <Nav.Link href="#projects">Signup</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default NavBar
