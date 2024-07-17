import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Container, Navbar, Nav, Col, Row, Card } from "react-bootstrap";
import { GoArrowUpRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import { BiLogoLinkedin } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Blogcategory = () => {
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
      <Container>
        <Link to="/Blog" className="BlogbackLink">
          <div className="leftArrow mt-5">
            <GoArrowLeft className="Leftarrow" />
          </div>
        </Link>
      </Container>
      <Container className="BlogcategoryHead mt-5">
        <div className="d-flex justify-content-between">
          <div className="d-flex Blog-category">
            <Link to="/Blog" className="bg-cat">
              <p className="">Blog</p>
            </Link>
            <FaAngleRight className="mx-2 mt-1" />
            <Link to="/Blogcategory" className="bg-cat">
              <p className="">Cateory</p>
            </Link>
          </div>
          <div className="">
            <p>11 Jan 2022. 5 min read</p>
          </div>
        </div>
      </Container>
      <Container className="blogCad">
        <Row className="d-flex justify-content-center">
          <Col sm={6} className="cardfooter">
            <img
              src="./arrow.png"
              alt="palynx-img"
              className="img-fluid arrow2"
            />
            <div>
              <h2>
                Get in<span> Touch</span>
              </h2>
              <p>
                Have questions or need support?Reach out to our friendly support
                team at
              </p>
            </div>
          </Col>
          <Col sm={6} className="cardfooter">
            <div>
              <h2>
                We are <span>Social</span>
              </h2>
              <p>
                Follow us on social media to stay updated with the latest news,
                events, and features!
              </p>
              <div className="icon d-flex">
                <button className="btn btn-icon">
                  <BiLogoLinkedin />
                </button>
                <button className="btn btn-icon">
                  <BsInstagram />
                </button>
                <button className="btn btn-icon">
                  <FaFacebookF />
                </button>
                <button className="btn btn-icon">
                  <FaXTwitter />
                </button>
              </div>
              <img
                src="./arrow33.png"
                alt="palynx-img"
                className="img-fluid arrow33"
              />
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid className="footer">
        <Container className="tr">
          <Row class="g-5">
            <Col sm={3}>
              <img
                src="./palynxwlogo.png"
                alt="logo"
                className="logo-img b-ff"
              />
              <p className="text-white">Discover, Connect, Plan</p>
              <div className="icon d-flex">
                <button className="btn btn-icon2">
                  <BiLogoLinkedin />
                </button>
                <button className="btn btn-icon2">
                  <BsInstagram />
                </button>
                <button className="btn btn-icon2">
                  <FaFacebookF />
                </button>
                <button className="btn btn-icon2">
                  <FaXTwitter />
                </button>
              </div>
            </Col>
            <Col sm={3} className="">
              <p>
                <a href="#">About us</a>
              </p>
              <p>
                <a href="#">Blog</a>
              </p>
              <p>
                <a href="#">FAQs</a>
              </p>
              <p>
                <a href="#">Contact</a>
              </p>
            </Col>
            <Col sm={3}>
              <p>
                <a href="#">Terms of Service</a>
              </p>
              <p>
                <a href="#">Privacy Policy</a>
              </p>
            </Col>
            <Col sm={3}>
              <p>
                <a href="#">Download App</a>
              </p>
              <button className="btn btn-1 download-btn2 d-flex">
                <img
                  src="./bapple.png"
                  alt="palynx-img"
                  className="img-fluid apple1"
                />
                Download on the App Store
              </button>
            </Col>
          </Row>
          <div className="d-flex justify-content-center foter">
            <h6>All rights reserved Palynx © 2024</h6>
          </div>
        </Container>
      </Container>
    </>
  );
};
export default Blogcategory;
