import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Container, Navbar, Nav, Col, Row } from "react-bootstrap";
// import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Homepage = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Container fluid>
        <Navbar collapseOnSelect expand="lg" className="Navbar">
          <Container className="nbar">
            <Navbar.Brand href="#home">
              <img src="./palynx-logo.png" alt="logo" className="logo-img" />
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              className="border border-0 Nav-Toggle"
              onClick={() => setExpanded(expanded ? false : "expanded")}
            >
              <i className={`bi ${expanded ? "bi-x" : "bi-list"}`}></i>
            </Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav" className="menu-event">
              <Nav className="me-auto">
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link href="#" className="">
                  Blog
                </Nav.Link>
                <Nav.Link href="#" className="">
                  FAQs
                </Nav.Link>
                <Nav.Link href="#" className="">
                  Contact
                </Nav.Link>
              </Nav>
              <Nav>
                <button className="btn F-btn">
                  <Nav.Link href="#" className="D-app">
                    Download the App
                  </Nav.Link>
                </button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
      <Container className="hero">
        <Row>
          <Col sm={8}>
            <h2>
              <span>Discover</span> Your City and Make New Friends with Ease
            </h2>
            <p>
              Connect with people with like minds, similar interests, goals and
              motivations and make plans all with Palynx.
            </p>
            <button className="btn">Download the App</button>
          </Col>
          <Col sm={4}>
            <img src="./content.png" alt="palynx-img" className="img-1" />
            <img src="./Underline.png" alt="palynx-img" className="img-3" />

            <img src="./card.png" alt="palynx-img" className="img-2" />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Homepage;
