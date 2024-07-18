import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Container, Navbar, Nav, Col, Row, Card } from "react-bootstrap";
import { GoArrowUpRight } from "react-icons/go";
import { BiLogoLinkedin } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
// import Pagination from "react-bootstrap/Pagination";
import { Link } from "react-router-dom";

const Blog = () => {
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
                  <Nav href="#" className="D-app">
                    Download the App
                  </Nav>
                </button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
      <Container>
        <div className="Blogheader d-flex justify-content-center">
          <h3>
            Discover More with the Palynx <span>Blog </span>
          </h3>
        </div>
      </Container>
      <Container className="Bloghero">
        <img src="./arrow.png" alt="palynx-img" className="rrow1" />
        <h5>Recent Blog Posts</h5>
        <Row className="blogRow">
          <Col sm={6}>
            <Card
              className="border border-0"
              style={{ background: "transparent" }}
            >
              <Card.Img src="./party.png" className="img-fluid blog-img" />

              <Card.Text>
                <pre className="mt-4">02/05/2024 . 12 min read</pre>

                <h6>Top 10 Hidden Gems in Your City</h6>
                <GoArrowUpRight className="blog-icon" />
                <p>
                  Discover the lesser-known spots in your city that are waiting
                  to be explored. From cozy cafes to secret parks, uncover
                  places that only locals know about.
                </p>
              </Card.Text>
            </Card>
          </Col>
          <Col sm={6}>
            <Row>
              <Col sm={6}>
                <Card
                  className="border border-0 d-flex"
                  style={{ background: "transparent" }}
                >
                  <Card.Img src="./pitch.png" className="img-fluid " />
                </Card>
              </Col>
              <Col sm={6}>
                <Card
                  className="border border-0 d-flex"
                  style={{ background: "transparent" }}
                >
                  <Card.Text>
                    <pre className="preM">02/05/2024 . 12 min read</pre>

                    <h6>Top 10 Hidden Gems in Your City</h6>
                    <p>
                      Discover the lesser-known spots in your city that are
                      waiting to be explored. From cozy cafes to secret parks,
                      uncover places that only locals know about.
                    </p>
                  </Card.Text>
                </Card>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col sm={6}>
                <Card
                  className="border border-0 d-flex"
                  style={{ background: "transparent" }}
                >
                  <Card.Img src="./diary.png" className="img-fluid " />
                </Card>
              </Col>
              <Col sm={6}>
                <Card
                  className="border border-0 d-flex"
                  style={{ background: "transparent" }}
                >
                  <Card.Text>
                    <pre className="preM">02/05/2024 . 12 min read</pre>

                    <h6>Top 10 Hidden Gems in Your City</h6>
                    <p>
                      Discover the lesser-known spots in your city that are
                      waiting to be explored. From cozy cafes to secret parks,
                      uncover places that only locals know about.
                    </p>
                  </Card.Text>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container className="blogCol">
        <h4>All blog posts</h4>
        <Row className="p-5">
          <Col sm={4}>
            <Link to="/Blogcategory" className="Linkk">
              <Card
                className="border border-0"
                style={{ background: "transparent" }}
              >
                <Card.Img src="./party.png" className="img-fluid blog-img" />

                <Card.Text>
                  <pre className="mt-4">02/05/2024 . 12 min read</pre>

                  <h6>Top 10 Hidden Gems in Your City</h6>
                  <GoArrowUpRight className="blog-icon1" />
                  <p>
                    Discover the lesser-known spots in your city that are
                    waiting to be explored. From cozy cafes to secret parks,
                    uncover places that only locals know about.
                  </p>
                </Card.Text>
              </Card>
            </Link>
          </Col>
          <Col sm={4}>
            <Link to="/Blogcategory" className="Linkk">
              <Card
                className="border border-0"
                style={{ background: "transparent" }}
              >
                <Card.Img src="./party.png" className="img-fluid blog-img" />

                <Card.Text>
                  <pre className="mt-4">02/05/2024 . 12 min read</pre>

                  <h6>Top 10 Hidden Gems in Your City</h6>
                  <GoArrowUpRight className="blog-icon1" />
                  <p>
                    Discover the lesser-known spots in your city that are
                    waiting to be explored. From cozy cafes to secret parks,
                    uncover places that only locals know about.
                  </p>
                </Card.Text>
              </Card>
            </Link>
          </Col>
          <Col sm={4}>
            <Link to="/Blogcategory" className="Linkk">
              <Card
                className="border border-0"
                style={{ background: "transparent" }}
              >
                <Card.Img src="./party.png" className="img-fluid blog-img" />

                <Card.Text>
                  <pre className="mt-4">02/05/2024 . 12 min read</pre>

                  <h6>Top 10 Hidden Gems in Your City</h6>
                  <GoArrowUpRight className="blog-icon1" />
                  <p>
                    Discover the lesser-known spots in your city that are
                    waiting to be explored. From cozy cafes to secret parks,
                    uncover places that only locals know about.
                  </p>
                </Card.Text>
              </Card>
            </Link>
          </Col>
        </Row>
        <Row className="p-5">
          <Col sm={4}>
            <Link to="/Blogcategory" className="Linkk">
              <Card
                className="border border-0"
                style={{ background: "transparent" }}
              >
                <Card.Img src="./party.png" className="img-fluid blog-img" />

                <Card.Text>
                  <pre className="mt-4">02/05/2024 . 12 min read</pre>

                  <h6>Top 10 Hidden Gems in Your City</h6>
                  <GoArrowUpRight className="blog-icon1" />
                  <p>
                    Discover the lesser-known spots in your city that are
                    waiting to be explored. From cozy cafes to secret parks,
                    uncover places that only locals know about.
                  </p>
                </Card.Text>
              </Card>
            </Link>
          </Col>
          <Col sm={4}>
            <Link to="/Blogcategory" className="Linkk">
              <Card
                className="border border-0"
                style={{ background: "transparent" }}
              >
                <Card.Img src="./party.png" className="img-fluid blog-img" />

                <Card.Text>
                  <pre className="mt-4">02/05/2024 . 12 min read</pre>

                  <h6>Top 10 Hidden Gems in Your City</h6>
                  <GoArrowUpRight className="blog-icon1" />
                  <p>
                    Discover the lesser-known spots in your city that are
                    waiting to be explored. From cozy cafes to secret parks,
                    uncover places that only locals know about.
                  </p>
                </Card.Text>
              </Card>
            </Link>
          </Col>
          <Col sm={4}>
            <Link to="/Blogcategory" className="Linkk">
              <Card
                className="border border-0"
                style={{ background: "transparent" }}
              >
                <Card.Img src="./party.png" className="img-fluid blog-img" />

                <Card.Text>
                  <pre className="mt-4">02/05/2024 . 12 min read</pre>

                  <h6>Top 10 Hidden Gems in Your City</h6>
                  <GoArrowUpRight className="blog-icon1" />
                  <p>
                    Discover the lesser-known spots in your city that are
                    waiting to be explored. From cozy cafes to secret parks,
                    uncover places that only locals know about.
                  </p>
                </Card.Text>
              </Card>
            </Link>
          </Col>
          <hr className="hrline" />
          <div className="web-pagin">
            <ul className="pagination d-flex justify-content-between">
              <div>
                <li class="page-item">
                  <a class="page-link" href="#">
                    <GoArrowLeft className="webpagin-Icon" />
                    Previous
                  </a>
                </li>
              </div>
              <div className="d-flex">
                <li class="page-item active">
                  <a class="page-link" href="#">
                    1
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    2
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    3
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    ...
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    8
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    9
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    10
                  </a>
                </li>
              </div>
              <div>
                <li class="page-item">
                  <a class="page-link" href="#">
                    Next
                    <GoArrowRight className="webpagin-Icon" />
                  </a>
                </li>
              </div>
            </ul>
          </div>
          <div className="mobile-pagin">
            <ul className="pagination d-flex justify-content-between">
              <div>
                <li class="page-item">
                  <a class="page-link page-icon" href="#">
                    <GoArrowLeft />
                  </a>
                </li>
              </div>
              <div className="d-flex">
                <li class="page-item active">
                  <a class="page-link" href="#">
                    1
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    ...
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    10
                  </a>
                </li>
              </div>
              <div>
                <li className="page-item border border-0">
                  <a class="page-link page-icon" href="#">
                    <GoArrowRight />
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </Row>
      </Container>
      <Container className="blogCad">
        <Row className="d-flex justify-content-center mt-5">
          <Col sm={6}>
            <div className="cardfooter">
              <img
                src="./arrow.png"
                alt="palynx-img"
                className="img-fluid arrow2"
              />
              <div className="fk">
                <h2>
                  Get in<span> Touch</span>
                </h2>
                <p>
                  Have questions or need support?Reach out to our friendly
                  support team at
                </p>
                <div className="Blog-form">
                  <form action="#">
                    <div className="form-box">
                      <input
                        type="text"
                        name="EmailAddress"
                        placeholder="Support@palynx.com"
                      />
                      <button type="submit">
                        <GoArrowUpRight className="" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={6}>
            <div className="cardfooter">
              <div className="fk">
                <h2>
                  We are <span>Social</span>
                </h2>
                <p>
                  Follow us on social media to stay updated with the latest
                  news, events, and features!
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
export default Blog;
