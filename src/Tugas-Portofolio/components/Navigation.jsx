import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
class Navigation extends React.Component {
  render() {
    return (
      <Navbar sticky="top" bg="light" variant="light" expand="lg">
        <Container>
          <Navbar.Brand className="fw-semibold">FahriKurniawan</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#profile">Profile</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
export default Navigation;
