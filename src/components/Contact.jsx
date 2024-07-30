import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import {
  Container,
  Navbar,
  Nav,
  Col,
  Row,
  Accordion,
  Image,
  Form,
  Button,
} from "react-bootstrap";
import { BiLogoLinkedin } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Title from "./Title";
const Contact = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Title title="Contact us | Palynx" />

      <Navbar collapseOnSelect expand="lg" className="Navbar custom-sticky">
        <Container className="nbar">
          <Navbar.Brand href="/">
            <img src="./loogo.png" alt="logo" className="logo-img" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="border border-0 Nav-Toggle"
            onClick={() => setExpanded(expanded ? false : "expanded")}
          >
            <i className={`bi ${expanded ? "bi-x" : "bi-filter-right"}`}></i>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav" className="menu-event">
            <Nav className="me-auto tem">
              <Nav.Link as={NavLink} to="/" className="">
                Home
                <i class="bi bi-chevron-right footer-Angle"></i>
              </Nav.Link>

              <Nav.Link as={NavLink} to="/blog" className="d-none">
                Blog
                <i class="bi bi-chevron-right footer-Angle"></i>
              </Nav.Link>
              <Nav.Link as={NavLink} to="/faqs" className="">
                FAQS
                <i class="bi bi-chevron-right footer-Angle"></i>
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contact" className="">
                Contact
                <i class="bi bi-chevron-right footer-Angle"></i>
              </Nav.Link>
              <Nav.Link className="footer-Angle2">
                Contact
                <i class="bi bi-chevron-right footer-Angle2"></i>
              </Nav.Link>
            </Nav>
            <Nav
              as={NavLink}
              to="https://play.google.com/store/apps/details?id=com.palynx.app"
              className="bav-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="F-btn">
                <Nav href="#donload" className="D-app">
                  Download the App
                </Nav>
              </button>
            </Nav>

            <div className="Navbar-icon-Cont">
              <h6>
                We are <span>Social</span>
              </h6>
              <div className="d-flex  Navbar-iconMobile">
                <Link
                  to=" https://www.linkedin.com/company/palynxapp/"
                  className="Linked-btn2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn-icon7">
                    <BiLogoLinkedin />
                  </button>
                </Link>
                <Link
                  to="https://www.instagram.com/palynxapp?igsh=cTd0Zmp5eG42NGgw"
                  className="Linked-btn2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn-icon7">
                    <BsInstagram />
                  </button>
                </Link>
                <Link
                  to="https://www.facebook.com/palynxapp?mibextid=JRoKGi"
                  className="Linked-btn2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn-icon7">
                    <FaFacebookF />
                  </button>
                </Link>
                <Link
                  to="https://x.com/palynxapp"
                  className="Linked-btn2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn-icon7">
                    <FaXTwitter />
                  </button>
                </Link>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Container>
          <Row className="contact">
            <Col xs={12} md={5} className="contact-details">
              <Row>
                <Col>
                  <h4>
                    <b>Get in touch with us.</b>{" "}
                  </h4>
                  <p>Reach out for any inquiry.</p>
                  <hr className="contactLine" />
                  <pre>Send us an email on:</pre>
                  <div>
                    <p className="contactSupport">
                      <i class="bi bi-envelope mx-2"></i>
                      <b>support@palynx.com</b>
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col className="Contact-form" xs={12} md={7}>
              <Form className="contact-form">
                <Form.Group className="mb-2" controlId="formBasicEmail">
                  <Form.Control
                    type="text"
                    placeholder="First name"
                    className="lastName bg-transparent outline-0"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="text"
                    placeholder="Last name"
                    className="lastName bg-transparent"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="text"
                    placeholder="Phone number"
                    className="lastName bg-transparent"
                  />
                </Form.Group>

                <Form.Group controlId="floatingTextarea2" label="Comments">
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: "200px" }}
                    className="bg-transparent"
                  />
                </Form.Group>
                <Link to="/">
                  <button className="contact-btn">Submit</button>
                </Link>
              </Form>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid>
        <Container fluid className="footer">
          <Container>
            <div class="row">
              <div class=" col-sm-3 footerP">
                <img
                  src="./palynxwlogo.png"
                  alt="logo"
                  className="logo-img b-ff"
                />
                <p className="">Discover, Connect, Plan</p>
                <div className="d-flex footerp-iconMobile">
                  <Link
                    to="https://www.linkedin.com/company/palynxapp/"
                    className="Linked-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="btn-icon2">
                      <BiLogoLinkedin />
                    </button>
                  </Link>

                  <Link
                    to="https://www.instagram.com/palynxapp?igsh=cTd0Zmp5eG42NGgw"
                    className="Linked-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="btn-icon2">
                      <BsInstagram />
                    </button>
                  </Link>

                  <Link
                    to="https://www.facebook.com/palynxapp?mibextid=JRoKGi"
                    className="Linked-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="btn-icon2">
                      <FaFacebookF />
                    </button>
                  </Link>

                  <Link
                    to="https://x.com/palynxapp"
                    className="Linked-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="btn-icon2">
                      <FaXTwitter />
                    </button>
                  </Link>
                </div>
              </div>
              <div class="col-sm-3 footerp">
                {/* <p>
                  <Link
                    to="https://www.facebook.com/palynxapp?mibextid=JRoKGi"
                    className="footer-links"
                  >
                    <a>
                      About us
                      <i class="bi bi-chevron-right footer-Angle"></i>
                    </a>
                  </Link>
                </p> */}
                <p>
                  <Link to="/Blog" className="footer-links">
                    <a>
                      Blog
                      <i class="bi bi-chevron-right footer-Angle"></i>
                    </a>
                  </Link>
                </p>
                <p>
                  <Link to="/Faqs" className="footer-links">
                    <a>
                      Faqs
                      <i class="bi bi-chevron-right footer-Angle"></i>
                    </a>
                  </Link>
                </p>
                <p>
                  <Link to="/Contact" className="footer-links">
                    <a>
                      Contact
                      <i class="bi bi-chevron-right footer-Angle"></i>
                    </a>
                  </Link>
                </p>
              </div>
              <div class="col-sm-3 footerp">
                <p>
                  <Link to="/Terms" className="footer-links">
                    <a>
                      Terms of Service
                      <i class="bi bi-chevron-right footer-Angle"></i>
                    </a>
                  </Link>
                </p>
                <p>
                  <Link to="/Privacy" className="footer-links">
                    <a>
                      Privacy & Policy
                      <i class="bi bi-chevron-right footer-Angle"></i>
                    </a>
                  </Link>
                </p>
              </div>
              <div class="col-sm-3 footerp">
                <p>
                  <a href="#">Download App</a>
                </p>
                <button className="download-button">
                  <i className="bi bi-apple"></i>
                  <div className="text-container">
                    Download on the <br /> <span>App Store</span>
                  </div>
                </button>

                <div className="PalynxT"></div>
              </div>
            </div>
            <div className="d-flex justify-content-center foter">
              <h6>All rights reserved Palynx © 2024</h6>
            </div>
          </Container>
        </Container>
      </Container>
    </>
  );
};
export default Contact;
