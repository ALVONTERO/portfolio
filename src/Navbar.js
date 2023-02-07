import React from "react";
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import "./Navbar.css";
import brandImage from "./assets/images/hotpoint.png";
import SearchIcon from "@mui/icons-material/Search";

function NavBar() {
  return (
    <Navbar fixed="top" variant="dark" expand="md">
      <Container>
        <Navbar.Brand href="#">
          <img
            src={brandImage}
            width="80"
            height="50"
            className="d-inline-block align-top"
            alt="brand logo"
          />
        </Navbar.Brand>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto mb-2 mb-lg-0" id="main">
            <Nav.Link className="p-2 p-lg-3 active" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="p-2 p-lg-3" href="#services">
              Services
            </Nav.Link>
            <Nav.Link className="p-2 p-lg-3" href="#portfolio">
              Portfolio
            </Nav.Link>
            <Nav.Link className="p-2 p-lg-3" href="#about">
              About
            </Nav.Link>
            <Nav.Link className="p-2 p-lg-3" href="#contact">
              Contact
            </Nav.Link>
          </Nav>
          <SearchIcon 
          fontSize="large"
            className="search ps-2 mb-2 mt-2 ms-1 me-1 d-none d-lg-block"
            sx={{
              color: "#33d1cc",
              borderLeft: "1px solid #33d1cc",
            }}
          />
          <Button className="btn-primary rounded-pill">Login</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
