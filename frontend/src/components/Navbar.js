// src/components/Navbar.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">Expenses Tracker</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link as={Link} to="/">Ver Gastos</Nav.Link>
        <Nav.Link as={Link} to="/add-expense">Agregar Gasto</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavbarComponent;
