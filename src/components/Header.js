import React from "react";
import {
  Container,
  Nav,
  Navbar,
  Button,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";

export default function Header() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="/">Style Your own</Navbar.Brand>
      </Container>
      <Container>
        <Nav className="App-header" fill variant="tabs" href="/home">
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <NavDropdown title="About me" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/about">About me</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/recipes">
                My Favorite recipes
              </NavDropdown.Item>
            </NavDropdown>
          </Nav.Item>
        </Nav>
        <Nav.Item>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Nav.Item>
      </Container>
    </Navbar>
  );
}