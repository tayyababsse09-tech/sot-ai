import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" variant="dark" className="glass-nav fixed-top py-3 z-50">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold fs-4 gradient-text">
          &lt;Tayyaba&gt;
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="border-0 shadow-none" />
        
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto text-center gap-3 pt-3 pt-lg-0">
            <Nav.Link href="#home" className="text-slate-300 hover:text-teal-400">Home</Nav.Link>
            <Nav.Link href="#about" className="text-slate-300 hover:text-teal-400">About</Nav.Link>
            <Nav.Link href="#skills" className="text-slate-300 hover:text-teal-400">Skills</Nav.Link>
            <Nav.Link href="#projects" className="text-slate-300 hover:text-teal-400">Projects</Nav.Link>
            <Nav.Link href="#contact" className="text-slate-300 hover:text-teal-400">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;