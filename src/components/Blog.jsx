import React, { useState, useEffect } from "react";
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
import { Link, NavLink } from "react-router-dom";
import Title from "./Title";

const Blog = () => {
  const [expanded, setExpanded] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Title title="Blog | Palynx" />
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
        <div className="Blog-header d-flex justify-content-center">
          <h3>
            Discover More with the Palynx <span>Blog </span>
          </h3>
        </div>
      </Container>
      <Container className="blogSection">
        <Container>
          <div className="blogSection-arrow">
            <img src="./arrow.png" alt="palynx-img" className="rrow1" />
          </div>
          <h5>Recent Blog Posts</h5>
        </Container>
        <Row className="mt-4">
          <div class="col-md-5 Blog-post">
            <Link to="/Blogcategory" className="blog">
              <div>
                <img src="./party.png" class="img-fluid w-100" />
              </div>
            </Link>
            <pre className="">02/05/2024 • 12 min read</pre>
            <div className="Rant">
              <div>
                <h6 className="">Top 10 Hidden Gems in Your City</h6>
              </div>
              <img src="./right-Icon.png" class="img-fluid blog-icon" />

              {/* <GoArrowUpRight className="blog-icon" /> */}
            </div>

            <p className=" Blog-col">
              Discover the lesser-known spots in your city that are waiting to
              be explored. From cozy cafes to secret parks, uncover places that
              only locals know about.
            </p>
          </div>

          <div class="col-md-7">
            <div class="row">
              <div class="col-sm-6">
                <Link to="/Blogcategory" className="blog">
                  <img src="./pitch.png" class="img-fluid w-100" />
                </Link>
              </div>
              <div class="col-sm-6">
                <div>
                  <pre class="pre-tag">02/05/2024 • 12 min read</pre>

                  <h6 class="h6-tag">
                    How to Meet Like-Minded People: Tips and Tricks
                  </h6>
                  <p class="p-tag2">
                    Building meaningful connections is easier than you think.
                    Learn how to find and connect with individuals who share
                    your interests and passions
                  </p>
                </div>
              </div>
            </div>
            <div class="row mt-4">
              <div class="col-sm-6">
                <Link to="/Blogcategory" className="blog">
                  <img src="./diary.png" className="img-fluid w-100" />
                </Link>
              </div>
              <div class="col-sm-6">
                <div>
                  <pre class="pre-tag">02/05/2024 • 12 min read</pre>
                  <h6 class="h6-tag">Top 10 Hidden Gems in Your City</h6>
                  <p class="p-tag3">
                    Discover the lesser-known spots in your city that are
                    waiting to be explored. From cozy cafes to secret parks,
                    uncover places that only locals know about.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
      <Container className="blogSection1">
        <Row className=" bloggCol">
          <h4 className="mb-4">All blog posts</h4>
          <Col md={4} xs={12} className="Linkk">
            <div className="">
              <div className="Btn-3">
                <Link to="/Blogcategory" className="blog">
                  <img src="./party.png" className="img-fluid blog-img" />
                </Link>
                {/* <img src="./bale.png" alt="palynx-img" className="img-fluid" /> */}
              </div>
              <div className="card-2Cont">
                <pre className="">02/05/2024 • 12 min read</pre>
                <div className="Kant">
                  <div className="">
                    <h6>Top 10 Hidden Gems in Your</h6>
                    <h6> City</h6>
                  </div>
                  <img src="./right-Icon.png" class="img-fluid blog-icon" />

                  {/* <GoArrowUpRight className="blog-icon1" /> */}
                </div>
                <p>
                  Discover the lesser-known spots in your city that are waiting
                  to be explored. From cozy cafe...
                </p>
              </div>
            </div>
          </Col>
          <Col md={4} xs={12} className="Linkk">
            <div className="">
              <div className="Btn-3">
                <Link to="/Blogcategory" className="blog">
                  <img src="./party.png" className="img-fluid blog-img" />
                </Link>
                {/* <img src="./bale.png" alt="palynx-img" className="img-fluid" /> */}
              </div>
              <div className="card-2Cont">
                <pre className="">02/05/2024 • 12 min read</pre>
                <div className="Kant">
                  <div className="">
                    <h6>Top 10 Hidden Gems in Your</h6>
                    <h6> City</h6>
                  </div>
                  <img src="./right-Icon.png" class="img-fluid blog-icon" />

                  {/* <GoArrowUpRight className="blog-icon1" /> */}
                </div>

                <p>
                  Discover the lesser-known spots in your city that are waiting
                  to be explored. From cozy cafe...
                </p>
              </div>
            </div>
          </Col>
          <Col md={4} xs={12} className="Linkk">
            <div className="">
              <div className="Btn-3">
                <Link to="/Blogcategory" className="blog">
                  <img src="./party.png" className="img-fluid blog-img" />
                </Link>
                {/* <img src="./bale.png" alt="palynx-img" className="img-fluid" /> */}
              </div>
              <div className="card-2Cont">
                <pre className="">02/05/2024 • 12 min read</pre>
                <div className="Kant">
                  <div className="">
                    <h6>Top 10 Hidden Gems in Your</h6>
                    <h6> City</h6>
                  </div>
                  <img src="./right-Icon.png" class="img-fluid blog-icon" />

                  {/* <GoArrowUpRight className="blog-icon1" /> */}
                </div>
                <p>
                  Discover the lesser-known spots in your city that are waiting
                  to be explored. From cozy cafe...
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <Row className=" bloggCol">
          <Col md={4} xs={12} className="Linkk">
            <div className="">
              <div className="Btn-3">
                <Link to="/Blogcategory" className="blog">
                  <img src="./party.png" className="img-fluid blog-img" />
                </Link>
                {/* <img src="./bale.png" alt="palynx-img" className="img-fluid" /> */}
              </div>
              <div className="card-2Cont">
                <pre className="">02/05/2024 • 12 min read</pre>
                <div className="Kant">
                  <div className="">
                    <h6>Top 10 Hidden Gems in Your</h6>
                    <h6> City</h6>
                  </div>
                  <img src="./right-Icon.png" class="img-fluid blog-icon" />

                  {/* <GoArrowUpRight className="blog-icon1" /> */}
                </div>
                <p>
                  Discover the lesser-known spots in your city that are waiting
                  to be explored. From cozy cafe...
                </p>
              </div>
            </div>
          </Col>
          <Col md={4} xs={12} className="Linkk">
            <div className="">
              <div className="Btn-3">
                <Link to="/Blogcategory" className="blog">
                  <img src="./party.png" className="img-fluid blog-img" />
                </Link>
                {/* <img src="./bale.png" alt="palynx-img" className="img-fluid" /> */}
              </div>
              <div className="card-2Cont">
                <pre className="">02/05/2024 • 12 min read</pre>
                <div className="Kant">
                  <div className="">
                    <h6>Top 10 Hidden Gems in Your</h6>
                    <h6> City</h6>
                  </div>
                  <img src="./right-Icon.png" class="img-fluid blog-icon" />

                  {/* <GoArrowUpRight className="blog-icon1" /> */}
                </div>
                <p>
                  Discover the lesser-known spots in your city that are waiting
                  to be explored. From cozy cafe...
                </p>
              </div>
            </div>
          </Col>
          <Col md={4} xs={12} className="Linkk">
            <div className="">
              <div className="Btn-3">
                <Link to="/Blogcategory" className="blog">
                  <img src="./party.png" className="img-fluid blog-img" />
                </Link>
                {/* <img src="./bale.png" alt="palynx-img" className="img-fluid" /> */}
              </div>
              <div className="card-2Cont">
                <pre className="">02/05/2024 • 12 min read</pre>
                <div className="Kant">
                  <div className="">
                    <h6>Top 10 Hidden Gems in Your</h6>
                    <h6> City</h6>
                  </div>
                  <img src="./right-Icon.png" class="img-fluid blog-icon" />

                  {/* <GoArrowUpRight className="blog-icon1" /> */}
                </div>
                <p>
                  Discover the lesser-known spots in your city that are waiting
                  to be explored. From cozy cafe...
                </p>
              </div>
            </div>
          </Col>
          <hr className="hrline mt-5" />
          <div className="web-pagin">
            <ul className="pagination d-flex justify-content-between">
              <div>
                <li class="page-item">
                  <a class="page-link previous-pagination" href="#">
                    <GoArrowLeft className="webpagin-Icon1" />
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
                  <a class="page-link   next-pagination" href="#">
                    Next
                    <GoArrowRight className="webpagin-Icon2" />
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
      <Container>
        <Row className="d-flex justify-content-center">
          <Container className="blogCad">
            <Row className="d-flex justify-content-center mt-5">
              <Col md={6} xs={12}>
                <div className="cardfooter">
                  <div className="cardfooter-arrow2">
                    <img
                      src="./arrow.png"
                      alt="palynx-img"
                      className="img-fluid arrow2"
                    />
                  </div>
                  <div className="fk">
                    <h2>
                      Get in<span> Touch</span>
                    </h2>
                    <p>
                      Have questions or need support?
                      <br />
                      Reach out to our friendly support team at
                    </p>
                    <div className="Blog-form">
                      <div className="form-box">
                        <p>support@palynx.com</p>
                        <Link to="mailto: support@palynx.com">
                          <button type="submit" className="Blog-btn">
                            <GoArrowUpRight />
                          </button>
                        </Link>
                      </div>
                      {/* <form action="#">
                        <div className="form-box">
                          <input
                            type="text"
                            name="EmailAddress"
                            placeholder="support@palynx.com"
                          />
                        </div>
                      </form> */}
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={6} xs={12}>
                <div className="cardfooter">
                  <div className="fk">
                    <h2>
                      We are <span>Social</span>
                    </h2>
                    <p>
                      Follow us on social media to stay updated with the <br />{" "}
                      latest news, events, and features!
                    </p>
                    <div className="icon d-flex">
                      <Link
                        to="https://www.linkedin.com/company/palynxapp/"
                        className="Linked-btn2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="btn-icon">
                          <BiLogoLinkedin />
                        </button>
                      </Link>
                      <Link
                        to="https://www.instagram.com/palynxapp?igsh=cTd0Zmp5eG42NGgw"
                        className="Linked-btn2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="btn-icon">
                          <BsInstagram />
                        </button>
                      </Link>
                      <Link
                        to="https://www.facebook.com/palynxapp?mibextid=JRoKGi"
                        className="Linked-btn2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="btn-icon">
                          <FaFacebookF />
                        </button>
                      </Link>
                      <Link
                        to="https://x.com/palynxapp"
                        className="Linked-btn2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="btn-icon">
                          <FaXTwitter />
                        </button>
                      </Link>
                    </div>
                    <img
                      src="./arrow33.png"
                      alt="palynx-img"
                      className="img-fluid arrow33 w-25"
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </Row>
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
export default Blog;
