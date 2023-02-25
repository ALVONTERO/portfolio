import React from "react";
import {
  Nav,
  Navbar,
  Container,
  Button,
  Row,
  Col,
  Form,
} from "react-bootstrap";
import "./Navbar.css";
import brandImage from "./assets/images/vistaz.jpg";
import SearchIcon from "@mui/icons-material/Search";
import ScatterPlotIcon from "@mui/icons-material/ScatterPlot";
import EditIcon from "@mui/icons-material/Edit";
import {
  CardContent,
  Card,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";
import MonitorIcon from "@mui/icons-material/Monitor";
import PowerIcon from "@mui/icons-material/Power";
import html from "./assets/images/html.jpg";
import css from "./assets/images/css.jpg";
import js from "./assets/images/js.png";
import bootstrap from "./assets/images/bootstrap.png";
import react from "./assets/images/react.jpg";
import mui from "./assets/images/mui.jfif";
import HelloAvatar from "./assets/images/hello-avatar.png";
import Lizard from "./assets/images/lizard.jpg";
import Croc from "./assets/images/croc.jpg";
import Chameleon from "./assets/images/chameleon.jpg";
import Cobra from "./assets/images/cobra.jpg";

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
          <Row className="justify-content-around align-items-center mb-5">
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
      <div className="stuff-section  align-items-center justify-content-center">
        <div className="main-title mt-5 mb-5 position-relative">
          <ScatterPlotIcon
            className="mui-scat-icon"
            sx={{ fontSize: "5rem", color: "#ffc400" }}
          />
          <h2 className="text-center">Some Stuff About Us</h2>
          <p className="text-black-50 text-center text-uppercase">
            The Great Team
          </p>
        </div>
        <Container>
          <p className="m-auto text-center mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <Row className="align-items-center">
            <Col
              lg={4}
              xs={12}
              className="col-lg-4 mt-5 text-center text-md-start"
            >
              <h3>Retina Design</h3>
              <p className="text-black-50 fs-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-black-50 fs-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </Col>
            <Col lg={8} className="img text-center mt-5 m-auto">
              <img
                alt=""
                className="img-fluid"
                style={{ maxHeight: 750 }}
                src={HelloAvatar}
              />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="team pb-5 pt-5 text-center">
        <Container className="pb-5 pt-5">
          <h2 className="fw-bold">Meet the Team</h2>
          <p className="text-black-50 fs-5 mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <Row className="align-items-center">
            <Col md={6} lg={3} className="mb-5 m-auto">
              <Card className="m-auto" sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={Lizard}
                    className="img-fluid"
                    alt="green iguana"
                  />
                  <CardContent sx={{ padding: 0 }}>
                    <Typography
                      gutterBottom
                      sx={{ padding: 0.59 }}
                      style={{ backgroundColor: "#00B8C3" }}
                      variant="h5"
                      component="div"
                    >
                      Lizard
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ padding: 2 }}
                      color="text.secondary"
                    >
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Col>
            <Col md={6} lg={3} className="mb-5">
              <Card className="m-auto" sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={Croc}
                    className="img-fluid"
                    alt="Crocodile"
                  />
                  <CardContent sx={{ padding: 0 }}>
                    <Typography
                      gutterBottom
                      sx={{ padding: 0.59 }}
                      style={{ backgroundColor: "#00B8C3" }}
                      variant="h5"
                      component="div"
                    >
                      Crocodile
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ padding: 2 }}
                      color="text.secondary"
                    >
                      Crocodiles are the largest and the heaviest of present-day
                      reptiles. The largest representatives, the Nile crocodile
                      of Africa and the estuarine crocodile of Australia, attain
                      lengths of up to 6 metres and weigh over 1,000 kg
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Col>
            <Col md={6} lg={3} className="mb-5">
              <Card className="m-auto" sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={Chameleon}
                    className="img-fluid"
                    alt="Chameleon"
                  />
                  <CardContent sx={{ padding: 0 }}>
                    <Typography
                      gutterBottom
                      sx={{ padding: 0.59 }}
                      style={{ backgroundColor: "#00B8C3" }}
                      variant="h5"
                      component="div"
                    >
                      Chameleon
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ padding: 2 }}
                      color="text.secondary"
                    >
                      Chameleons are disting-uished by their zygoda-ctylous
                      feet, their prehensile tail, their laterally com-pressed
                      bodies, their head casques, their projectile tongues,
                      their swaying gait, and crests or horns on their brow and
                      snout.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Col>
            <Col md={6} lg={3} className="mb-5">
              <Card className="m-auto" sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={Cobra}
                    className="img-fluid"
                    alt="Cobra"
                  />
                  <CardContent sx={{ padding: 0 }}>
                    <Typography
                      gutterBottom
                      sx={{ padding: 0.59 }}
                      style={{ backgroundColor: "#00B8C3" }}
                      variant="h5"
                      component="div"
                    >
                      Cobra
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ padding: 2 }}
                      color="text.secondary"
                    >
                      Desert cobra is a species of venomous snakes in the family
                      Elapidae that is native to the Middle East. The specific
                      epithet aegyptia refers to part of its geographic range.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="subs-section pt-5 pb-5 text-center">
        <Form as={Row} className="m-0 p-5">
          <Col sm="12" md="8" className="pb-3">
            <label className="fs-5 fw-bold me-4 col-sm-4 col-md-3 pb-3">Subscribe Now</label>
            <input placeholder="Enter your Email Here" className="inp col-sm-8" type="text" />
          </Col>
          <Col md="4">
            <Button variant="primary" type="submit">
              Subscribe
            </Button>
          </Col>
        </Form>
      </div>
    </>
  );
}

export default NavBar;
