import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href='./'>Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href='./personalDetails'>Personal Details</Nav.Link>
              <Nav.Link href='./highSchool'>High School</Nav.Link>
              <Nav.Link href='./intermidiate'>Intermidiate</Nav.Link>
              </Nav>
              </Navbar.Collapse>
        </Container>
      </Navbar> 
    </div>
  )
}

export default Navigation
