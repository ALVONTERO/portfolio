import React from "react";
import { Nav, Navbar, Container, Button, Row } from "react-bootstrap";
import "./Navbar.css";
import brandImage from "./assets/images/vistaz.jpg";
import SearchIcon from "@mui/icons-material/Search";
import ScatterPlotIcon from "@mui/icons-material/ScatterPlot";
import EditIcon from "@mui/icons-material/Edit";
import { CardContent, Card, CardMedia, Typography } from "@mui/material";
import MonitorIcon from "@mui/icons-material/Monitor";
import PowerIcon from "@mui/icons-material/Power";
import html from "./assets/images/html.jpg";
import css from "./assets/images/css.jpg";
import js from "./assets/images/js.png";
import bootstrap from "./assets/images/bootstrap.png";
import react from "./assets/images/react.jpg";
import mui from "./assets/images/mui.jfif";

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

            <Button className="login-btn rounded-pill">Login</Button>
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
      <div className="features text-center pt-5 pb-5">
        <Container>
          <div className="main-title mt-5 mb-5 position-relative">
            <ScatterPlotIcon
              className="mb-4"
              sx={{ fontSize: "5rem", color: "#ffc400" }}
            />
            <h2>We are Good at</h2>
            <p className="text-black-50 text-uppercase">
              Some of These Stuff Below
            </p>
          </div>
          <Row className="justify-content-around align-items-centers">
            <Card style={{ maxWidth: 330 }} className="mt-5 col-md-6 col-lg-4">
              <CardContent className="card-content">
                <Typography className="typography-icon" component="div">
                  <EditIcon className="icon mb-3 " />
                </Typography>
                <Typography
                  className="sh-title"
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  Graphic Design
                </Typography>
                <Typography
                  variant="body2"
                  className="text-start text-black-50 text-uppercase lh-base"
                  color="text.secondary"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
              </CardContent>
            </Card>
            <Card style={{ maxWidth: 330 }} className="mt-5 col-md-6 col-lg-4">
              <CardContent className="card-content">
                <Typography className="typography-icon" component="div">
                  <MonitorIcon className="icon mb-3 " />
                </Typography>
                <Typography
                  className="sh-title"
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  Graphic Design
                </Typography>
                <Typography
                  variant="body2"
                  className="text-start text-black-50 text-uppercase lh-base"
                  color="text.secondary"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
              </CardContent>
            </Card>
            <Card style={{ maxWidth: 330 }} className="mt-5 col-md-6 col-lg-4">
              <CardContent className="card-content">
                <Typography className="typography-icon" component="div">
                  <PowerIcon className="icon mb-3 " />
                </Typography>
                <Typography
                  className="sh-title"
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  Graphic Design
                </Typography>
                <Typography
                  variant="body2"
                  className="text-start text-black-50 text-uppercase lh-base"
                  color="text.secondary"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
              </CardContent>
            </Card>
          </Row>
        </Container>
      </div>
      <div className="work-section text-center pt-5 pb-5">
        <Container>
          <div className="main-title mt-5 mb-5 position-relative">
            <ScatterPlotIcon
              className="mb-4"
              sx={{ fontSize: "5rem", color: "#ffc400" }}
            />
            <h2>We Make This</h2>
            <p className="text-black-50 text-uppercase">Prepare to be Amazed</p>
          </div>
          <Row className="justify-content-around align-items-center">
            <Card
              className="mt-3 mb-3"
              sx={{ minHeight: 432.52, border: "none", maxWidth: 345 }}
            >
              <CardMedia
                component="img"
                alt="Hyper Text Markup Language"
                height="200"
                sx={{ objectFit: "contain" }}
                image={html}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Hyper Text Markup Language
                </Typography>
                <Typography
                  variant="body2"
                  className="text-start"
                  color="text.secondary"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
              </CardContent>
            </Card>
            <Card
              className="mt-3 mb-3"
              sx={{ minHeight: 432.52, border: "none", maxWidth: 345 }}
            >
              <CardMedia
                component="img"
                alt="Cascading Style Sheet"
                height="200"
                sx={{ objectFit: "contain" }}
                image={css}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Cascading Style Sheet
                </Typography>
                <Typography
                  variant="body2"
                  className="text-start"
                  color="text.secondary"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
              </CardContent>
            </Card>
            <Card
              className="mt-3 mb-3"
              sx={{ minHeight: 432.52, border: "none", maxWidth: 345 }}
            >
              <CardMedia
                component="img"
                alt="JavaScript"
                height="200"
                sx={{ objectFit: "contain" }}
                image={js}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  JavaScript
                </Typography>
                <Typography
                  variant="body2"
                  className="text-start"
                  color="text.secondary"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
              </CardContent>
            </Card>
            <Card
              className="mt-3 mb-3"
              sx={{ minHeight: 432.52, border: "none", maxWidth: 345 }}
            >
              <CardMedia
                component="img"
                alt="Bootstrap"
                height="200"
                sx={{ objectFit: "contain" }}
                image={bootstrap}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Bootstrap
                </Typography>
                <Typography
                  variant="body2"
                  className="text-start"
                  color="text.secondary"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
              </CardContent>
            </Card>
            <Card
              className="mt-3 mb-3"
              sx={{ minHeight: 432.52, border: "none", maxWidth: 345 }}
            >
              <CardMedia
                component="img"
                alt="React"
                height="200"
                sx={{ objectFit: "contain" }}
                image={react}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  React
                </Typography>
                <Typography
                  variant="body2"
                  className="text-start"
                  color="text.secondary"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
              </CardContent>
            </Card>
            <Card
              className="mt-3 mb-3"
              sx={{ minHeight: 432.52, border: "none", maxWidth: 345 }}
            >
              <CardMedia
                component="img"
                alt="Material-UI"
                height="200"
                sx={{ objectFit: "contain" }}
                image={mui}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Material-UI
                </Typography>
                <Typography
                  variant="body2"
                  className="text-start"
                  color="text.secondary"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
              </CardContent>
            </Card>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default NavBar;
