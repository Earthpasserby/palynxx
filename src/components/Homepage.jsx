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
            <img src="./arrow.png" alt="palynx-img" className="img-4" />

            <h2>
              <span>Discover</span> Your City and Make New Friends with Ease
            </h2>
            <p>
              Connect with people with like minds, similar interests, goals and
              motivations and make plans all with Palynx.
            </p>
            <button className="btn btn-1">Download the App</button>
          </Col>
          <Col sm={4} className="img-cont">
            <img src="./content.png" alt="palynx-img" className="img-1" />
            <img src="./Underline.png" alt="palynx-img" className="img-3" />
            <img src="./card.png" alt="palynx-img" className="img-2" />
          </Col>
        </Row>
      </Container>
      <Container className="hero-2">
        <Row className="justify-content-center">
          <Col sm={4} className="card-1">
            <img src="./search.png" alt="palynx-img" className="hero-2Img" />
            <div className="hero-cont">
              <h6>Find events close to you</h6>
              <p>
                You don’t need to go far, all events around your location will
                be shown.
              </p>
            </div>
          </Col>
          <Col sm={4} className="card-1">
            <img src="./prof.png" alt="palynx-img" className="hero-2Img" />
            <div className="hero-cont">
              <h6>Meet people & connect</h6>
              <p>
                We recommend events and people that are specifically tailored to
                you.
              </p>
            </div>
          </Col>
          <Col sm={4} className="card-1">
            <img src="./file.png" alt="palynx-img" className="hero-2Img" />
            <div className="hero-cont">
              <h6>Share memories</h6>
              <p>Get to know more about your connections and share memories.</p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="hero-3 ">
        <Row className="justify-content-center">
          <h4>
            <span>Explore</span> Your City{" "}
          </h4>
          <img
            src="./underline1.png"
            alt="palynx-img"
            className="img-5 img-fluid"
          />
          <p>
            Discover new places, hidden gems, and popular hotspots in your city.
          </p>
          <Col sm={4} className="card-2">
            <img src="./view.png" alt="palynx-img" className="img-fluid" />
            <button className="btn btn-3">Romantic</button>
            <div className="card-2Cont">
              <h6>Sea & Romantic dinner</h6>
              <pre>New York, NY - August 12</pre>
            </div>
          </Col>
          <Col sm={4} className="card-2">
            <img src="./yatch.png" alt="palynx-img" className="img-fluid" />
            <button className="btn btn-4">party</button>
            <div className="card-2Cont">
              <h6>Yacht day & Friend’s party</h6>
              <pre>New York, NY - August 18</pre>
            </div>
          </Col>
          <Col sm={4} className="card-2">
            <img src="./bale.png" alt="palynx-img" className="img-fluid" />
            <button className="btn btn-5">Dance classes</button>
            <div className="card-2Cont">
              <h6>Beginner & Intermediate Ballet Class</h6>
              <pre>New York, NY - August 24</pre>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="hero-4 ">
        <Row className="">
          <Col sm={5} className="hero4-1">
            <h5>
              Last-minute <span>hangout</span> option for any spontaneous plans
            </h5>
            <img src="./minute.png" alt="palynx-img" className="img-fluid" />
          </Col>
          <Col sm={7} className="hero4-2">
            <h5>
              <span>Host</span> events and <span>find</span> attendees
            </h5>
            <img
              src="./company.png"
              alt="palynx-img"
              className="img-fluid Img1"
            />
            <img
              src="./following.png"
              alt="palynx-img"
              className="img-fluid Img2"
            />

            <img
              src="./Event Details.png"
              alt="palynx-img"
              className="img-fluid Img3"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Homepage;
