import React from "react";
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
import { NavLink as RouterNavLink, Outlet } from "react-router-dom";

function Navigation() {
  return (
    <Navbar bg="light" expand="lg" className="navbar fixed-top" id="mainNav">
      <Container fluid className=" px-4 px-lg-5">
        <Navbar.Brand href="#page-top">
          <img src="/assets/img/logo.jpg" alt="" />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#about">About</Nav.Link>

            <NavDropdown title="Executives" id="basic-nav-dropdown">
              <NavDropdown.Item href="#officers">
                IMT Principal Officers
              </NavDropdown.Item>
              <NavDropdown.Item href="#excos">
                IMT 2002 Set Excos
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Branches" id="basic-nav-dropdown">
              <NavDropdown.Item href="#officers">Enugu Branch</NavDropdown.Item>
              <NavDropdown.Item href="#excos">Lagos Branch</NavDropdown.Item>
              <NavDropdown.Item href="#officers">Abuja Branch</NavDropdown.Item>
              <NavDropdown.Item href="#excos">
                Port-Harcourt Branch
              </NavDropdown.Item>
              <NavDropdown.Item href="#officers">
                Imo/Abia Branch
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">E-Library</Nav.Link>
            <NavDropdown title="Newsletter" id="basic-nav-dropdown">
              <NavDropdown.Item href="#officers">
                Social Media Rules
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Mission/Vision" id="basic-nav-dropdown">
              <NavDropdown.Item href="#officers">Mission</NavDropdown.Item>
              <NavDropdown.Item href="#officers">Vision</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#about">Gallery</Nav.Link>
            <Nav.Link href="#about">Contact</Nav.Link>
            <Nav.Link>
              <RouterNavLink to="/login">Login</RouterNavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
