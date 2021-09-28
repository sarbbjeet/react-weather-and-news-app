import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavBar(props) {
  const { bgColor, fontColor } = props;
  return (
    <Navbar style={{ backgroundColor: bgColor }}>
      <Container>
        <Navbar.Brand href="weather" style={{ color: fontColor }}>
          XYZ
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} style={{ color: fontColor }} to="/weather">
              Weather
            </Nav.Link>
            <Nav.Link style={{ color: fontColor }} as={Link} to="/news">
              News
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
