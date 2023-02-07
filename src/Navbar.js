import React from "react";
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import "./Navbar.css";
import brandImage from "./assets/images/vistaz.jpg";
import SearchIcon from "@mui/icons-material/Search";

function NavBar() {
  return (
    <>
      <Navbar fixed="top" variant="dark" expand="md">
        <Container>
          <Navbar.Brand href="#">
            <img
              src={brandImage}
              width="65"
              height="65"
              className="rounded-circle d-inline-block align-top"
              alt="brand logo"
            />
          </Navbar.Brand>
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
            
              <Button className="login-btn rounded-pill">
                Login
              </Button>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="landing d-flex justify-content-center align-items-center">
        <div className="text-center text-light">
          <h1>Taste the Creativity</h1>
          <p className="fs-6 fw-light mb-5 text-white-50">
            We make awesome graphic and web design
          </p>
          <Button className="btn-primary rounded-pill main-btn">
            Get Started
          </Button>
        </div>
      </div>
    </>
  );
}

export default NavBar;
