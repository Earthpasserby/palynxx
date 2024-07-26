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
import { Link, NavLink } from "react-router-dom";

const Blogcategory = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="Navbar custom-sticky">
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
              <Nav.Link as={NavLink} to="/" className="">
                Home
              </Nav.Link>

              <Nav.Link as={NavLink} to="/Blog" className="">
                Blog
              </Nav.Link>
              <Nav.Link className="">FAQS</Nav.Link>
              <Nav.Link className="">Contact</Nav.Link>
            </Nav>
            <Nav className="bav-btn">
              <button className="btn F-btn">
                <Nav href="#donload" className="D-app">
                  Download the App
                </Nav>
              </button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Link to="/Blog" className="BlogbackLink">
          <div className="leftArrow mt-5">
            <GoArrowLeft className="Leftarrow" />
          </div>
        </Link>
      </Container>
      <Container className="BlogcategoryHead mt-5">
        <Row className="bn">
          <Col md={12} xs={8}>
            <div className="bloG-cat1">
              <div className="d-flex Blog-category">
                <Link to="/Blog" className="bg-cat bgcat2 mx-1">
                  <p className="">Blog</p>
                </Link>
                <FaAngleRight className="bet-icon" />
                <Link to="/Blogcategory" className="bg-cat bgcat2 mx-1">
                  <p className="">Cateory</p>
                </Link>
              </div>
              <div>
                <p className="bg-cat2">11 Jan 2022 . 5 min read</p>
              </div>
            </div>
          </Col>
          <Col md={12} xs={12} className="categoryhead">
            <Row>
              <Col md={6} xs={12}>
                <div className="BlogCont-con">
                  <h5 className="">
                    How to Meet Like-Minded People: Tips <br />
                    and Tricks
                  </h5>
                </div>
              </Col>
              <Col md={6} xs={12}>
                <div className="blogCat-icon w-100 d-flex justify-content-end">
                  <button className="btn btn-icon3">
                    <BsInstagram className="Icon-name" />
                  </button>
                  <button className="btn btn-icon3">
                    <BiLogoLinkedin className="Icon-name" />
                  </button>
                  <button className="btn btn-icon3">
                    <FaXTwitter className="Icon-name" />
                  </button>
                  <button className="btn btn-icon3">
                    <FaFacebookF className="Icon-name" />
                  </button>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="mt-4">
          <Container>
            <Row>
              <Col md={12} xs={12}>
                <img
                  src="./bigparty.png"
                  alt="logo"
                  className="img-fluid bigparty-img"
                />
              </Col>
            </Row>
            <Row className="blogcategory-Row">
              <Col md={12} xs={12}>
                <h5>Introduction</h5>
                <p>
                  Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
                  suspendisse morbi eleifend faucibus eget vestibulum felis.
                  Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam.
                  Mauris posuere vulputate arcu amet, vitae nisi, tellus
                  tincidunt. At feugiat sapien varius id.
                </p>
                <p>
                  Eget quis mi enim, leo lacinia pharetra, semper. Eget in
                  volutpat mollis at volutpat lectus velit, sed auctor.
                  Porttitor fames arcu quis fusce augue enim. Quis at habitant
                  diam at. Suscipit tristique risus, at donec. In turpis vel et
                  quam imperdiet. Ipsum molestie aliquet sodales id est ac
                  volutpat.
                </p>
                <img
                  src="./bigpitch.png"
                  alt="logo"
                  className="bigpitch-img mt-5 w-100"
                />
                <p className="mx-3 mt-4">Pitch plotting</p>
              </Col>
              <Col md={12} xs={12} className="mt-5">
                <h5>
                  Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum,
                  nulla odio nisl vitae. In aliquet pellentesque aenean hac
                  vestibulum turpis mi bibendum diam. Tempor integer aliquam in
                  vitae malesuada fringilla.
                </h5>
                <p className="mt-4">
                  Elit nisi in eleifend sed nisi. Pulvinar at orci, proin
                  imperdiet commodo consectetur convallis risus. Sed condimentum
                  enim dignissim adipiscing faucibus consequat, urna. Viverra
                  purus et erat auctor aliquam. Risus, volutpat vulputate
                  posuere purus sit congue convallis aliquet. Arcu id augue ut
                  feugiat donec porttitor neque. Mauris, neque ultricies eu
                  vestibulum, bibendum quam lorem id. Dolor lacus, eget nunc
                  lectus in tellus, pharetra, porttitor.{" "}
                </p>

                <p className="mt-5 border-p">
                  "Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim
                  mauris id. Non pellentesque congue eget consectetur turpis.
                  Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt
                  aenean tempus."
                </p>

                <p className="mt-5">
                  Tristique odio senectus nam posuere ornare leo metus,
                  ultricies. Blandit duis ultricies vulputate morbi feugiat cras
                  placerat elit. Aliquam tellus lorem sed ac. Montes, sed mattis
                  pellentesque suscipit accumsan. Cursus viverra aenean magna
                  risus elementum faucibus molestie pellentesque. Arcu ultricies
                  sed mauris vestibulum.
                </p>
              </Col>
              <Col md={12} xs={12}>
                <h5>Conclusion</h5>
                <p className="mt-4">
                  Morbi sed imperdiet in ipsum, adipiscing elit dui lectus.
                  Tellus id scelerisque est ultricies ultricies. Duis est sit
                  sed leo nisl, blandit elit sagittis. Quisque tristique
                  consequat quam sed. Nisl at scelerisque amet nulla purus
                  habitasse.
                </p>
                <p className="mt-5">
                  Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas
                  condimentum mi massa. In tincidunt pharetra consectetur sed
                  duis facilisis metus. Etiam egestas in nec sed et. Quis
                  lobortis at sit dictum eget nibh tortor commodo cursus.
                </p>

                <p className="mt-5">
                  Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce
                  aliquet. Nam elementum urna nisi aliquet erat dolor enim.
                  Ornare id morbi eget ipsum. Aliquam senectus neque ut id eget
                  consectetur dictum. Donec posuere pharetra odio consequat
                  scelerisque et, nunc tortor.Nulla adipiscing erat a erat.
                  Condimentum lorem posuere gravida enim posuere cursus diam.
                </p>
              </Col>
              <Col md={12} xs={12}>
                <h6>Share this post</h6>
                <div className="share-button">
                  <div className="blogCat-icon4 d-flex">
                    <button className="btn btn-icon4">
                      <BsInstagram className="Icon-name" />
                    </button>
                    <button className="btn btn-icon4">
                      <BiLogoLinkedin className="Icon-name" />
                    </button>
                    <button className="btn btn-icon4">
                      <FaXTwitter className="Icon-name" />
                    </button>
                    <button className="btn btn-icon4">
                      <FaFacebookF className="Icon-name" />
                    </button>
                  </div>
                  <div className="d-flex">
                    <p className="blogcat-Tag tag1">
                      <a href="#">Tag one</a>
                    </p>
                    <p className="blogcat-Tag tag2">
                      <a href="#">Tag two</a>
                    </p>
                    <p className="blogcat-Tag tag3">
                      <a href="#">Tag three</a>
                    </p>
                    <p className="blogcat-Tag tag4">
                      <a href="#">Tag four</a>
                    </p>
                  </div>
                </div>
                <hr className="hrline1" />
                <div className="d-flex justify-space-between Blogd">
                  <div>
                    <img
                      src="./Avatar Image.png"
                      className="img-fluid avatar"
                      alt="Avatar"
                    />
                  </div>
                  <div className="Avatar-up mx-3">
                    <p>John Dukes</p>
                    <pre>Writer</pre>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </Row>
      </Container>
      <Container className="blogSection mt-5">
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
            <pre className="">02/05/2024 . 12 min read</pre>

            <h6 className="">Top 10 Hidden Gems in Your City</h6>
            <div>
              <GoArrowUpRight className="blog-icon" />
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
                  <pre class="pre-tag">02/05/2024 . 12 min read</pre>

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
                  <pre class="pre-tag">02/05/2024 . 12 min read</pre>
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
              <Col md={6} xs={12}>
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
                      <button className="btn-icon">
                        <BiLogoLinkedin />
                      </button>
                      <button className="btn-icon">
                        <BsInstagram />
                      </button>
                      <button className="btn-icon">
                        <FaFacebookF />
                      </button>
                      <button className="btn-icon">
                        <FaXTwitter />
                      </button>
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
                <div className="d-flex">
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
              </div>
              <div class="col-sm-3 footerp">
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
              </div>
              <div class="col-sm-3 footerp">
                <p>
                  <a href="#">Terms of Service</a>
                </p>
                <p>
                  <a href="#">Privacy Policy</a>
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
export default Blogcategory;
