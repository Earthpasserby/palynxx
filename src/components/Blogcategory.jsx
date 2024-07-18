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
        <Row>
          <div className="d-flex justify-content-between">
            <div className="d-flex Blog-category">
              <Link to="/Blog" className="bg-cat">
                <p className="">Blog</p>
              </Link>
              <FaAngleRight className="bet-icon" />
              <Link to="/Blogcategory" className="bg-cat">
                <p className="">Cateory</p>
              </Link>
            </div>
            <div className="bg-cat2">
              <p>11 Jan 2022. 5 min read</p>
            </div>
          </div>
          <div className="BlogCont-con d-flex justify-content-between">
            <h5 className="">
              How to Meet Like-Minded People: Tips and Tricks
            </h5>
            <div className="blogCat-icon">
              <button className="btn btn-icon3">
                <BsInstagram />
              </button>
              <button className="btn btn-icon3">
                <BiLogoLinkedin />
              </button>
              <button className="btn btn-icon3">
                <FaXTwitter />
              </button>
              <button className="btn btn-icon3">
                <FaFacebookF />
              </button>
            </div>
          </div>
        </Row>
        <Row className="mt-4">
          <img src="./bigparty.png" alt="logo" className="bigparty-img" />
          <Container>
            <Row className="blogCat-row1">
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
                volutpat mollis at volutpat lectus velit, sed auctor. Porttitor
                fames arcu quis fusce augue enim. Quis at habitant diam at.
                Suscipit tristique risus, at donec. In turpis vel et quam
                imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.
              </p>
              <img
                src="./bigpitch.png"
                alt="logo"
                className="bigpitch-img mt-5"
              />
              <p className="mx-3 mt-2">Big Pitch</p>
            </Row>
            <Row className="blogCat-row2">
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
                purus et erat auctor aliquam. Risus, volutpat vulputate posuere
                purus sit congue convallis aliquet. Arcu id augue ut feugiat
                donec porttitor neque. Mauris, neque ultricies eu vestibulum,
                bibendum quam lorem id. Dolor lacus, eget nunc lectus in tellus,
                pharetra, porttitor.{" "}
              </p>

              <p className="mt-4">
                "Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim
                mauris id. Non pellentesque congue eget consectetur turpis.
                Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt
                aenean tempus."
              </p>

              <p className="mt-4">
                Tristique odio senectus nam posuere ornare leo metus, ultricies.
                Blandit duis ultricies vulputate morbi feugiat cras placerat
                elit. Aliquam tellus lorem sed ac. Montes, sed mattis
                pellentesque suscipit accumsan. Cursus viverra aenean magna
                risus elementum faucibus molestie pellentesque. Arcu ultricies
                sed mauris vestibulum.
              </p>
            </Row>
            <Row className="blogCat-row3">
              <h5>Conclusion</h5>
              <p className="mt-4">
                Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus
                id scelerisque est ultricies ultricies. Duis est sit sed leo
                nisl, blandit elit sagittis. Quisque tristique consequat quam
                sed. Nisl at scelerisque amet nulla purus habitasse.
              </p>
              <p className="mt-4">
                Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas
                condimentum mi massa. In tincidunt pharetra consectetur sed duis
                facilisis metus. Etiam egestas in nec sed et. Quis lobortis at
                sit dictum eget nibh tortor commodo cursus.
              </p>

              <p className="mt-4">
                Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce
                aliquet. Nam elementum urna nisi aliquet erat dolor enim. Ornare
                id morbi eget ipsum. Aliquam senectus neque ut id eget
                consectetur dictum. Donec posuere pharetra odio consequat
                scelerisque et, nunc tortor.Nulla adipiscing erat a erat.
                Condimentum lorem posuere gravida enim posuere cursus diam.
              </p>
            </Row>

            <Row className="blogCat-row4">
              <h6>Share this post</h6>
              <div className="d-flex justify-content-between">
                <div className="blogCat-icon d-flex">
                  <button className="btn btn-icon3">
                    <BsInstagram />
                  </button>
                  <button className="btn btn-icon3">
                    <BiLogoLinkedin />
                  </button>
                  <button className="btn btn-icon3">
                    <FaXTwitter />
                  </button>
                  <button className="btn btn-icon3">
                    <FaFacebookF />
                  </button>
                </div>
                <div className="d-flex">
                  <p className="blogcat-Tag">
                    <a href="#">Tag one</a>
                  </p>
                  <p className="blogcat-Tag">
                    <a href="#">Tag two</a>
                  </p>
                  <p className="blogcat-Tag">
                    <a href="#">Tag three</a>
                  </p>
                  <p className="blogcat-Tag">
                    <a href="#">Tag four</a>
                  </p>
                </div>
              </div>
              <hr className="hrline1" />
              <div className="d-flex justify-space-between Blogd">
                <div>
                  <img src="./Avatar Image.png" className="img-fluid avatar" />
                </div>
                <div className="mx-4">
                  <p>John Dukes</p>
                  <pre>Writer</pre>
                </div>
              </div>
            </Row>
          </Container>
        </Row>
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
export default Blogcategory;
