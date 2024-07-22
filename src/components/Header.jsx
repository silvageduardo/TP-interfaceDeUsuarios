import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import unahurLogo from '/logo.jpg'

const openGaleria = () => {
    window.open('./Galeria.jsx', '_blank'); // Abre Galeria.jsx en una nueva ventana
  };

function Header() {
  return (
    <>
    <div >
        <a id = "home" href="https://unahur.edu.ar/" target="_blank">
          <img src={unahurLogo} className="logo" alt="Unahur logo" />
        </a>
    </div>
    <Navbar expand="lg" className="bg-body-tertiary" >
      <Container>
        <Navbar.Brand href="#home">Cafetería Unahur</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link onClick={openGaleria}>Galería </Nav.Link>
            <Nav.Link href="#Integrantes">Nosotros</Nav.Link>
            <Nav.Link href="#locacion">Dónde estamos</Nav.Link>
            <Nav.Link href="#Integrantes">Integrantes</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  </>
  )
}

export default Header