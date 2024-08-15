import React, { useState, useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Nav, Row, Col } from "react-bootstrap";
import { BiLogoLinkedin } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link, NavLink, useParams } from "react-router-dom";
import NavbarBtn from "./NavbarBtn";
import axios from "axios";

const Events = () => {
  const [expanded, setExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setPosts] = useState([]);

  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, []);
  const { id } = useParams();
  const getData = () => {
    const ENDPOINT = "https://app.palynx.com/api/general/events/6763";
    axios(ENDPOINT)
      .then((response) => {
        setIsLoading(false);
        console.log("Response Data", response.data.data);
        if (Array.isArray(response.data.data)) {
          setPosts(response.data.data);
        } else if (response.data.data) {
          setPosts([response.data.data]); // If it's not an array, wrap it in an array
        } else {
          console.log("An error has been made");
        }
      })
      .catch((error) => {
        setIsLoading(false);
        console.log("An error has been made", error);
      });
  };
  const dataRenderer = data.map((data) => (
    <Container>
      <Row>
        <Col xs={12} md={5}>
          <img
            src={data.event_images[0].event_image_url}
            alt="event-img"
            className="event-img"
          />
          <div className="Main-Img d-flex mt-4">
            <div className="side-img">
              <img
                src={data.event_images[0].event_image_url}
                alt="event-img"
                className="eventSide-img"
              />
            </div>
            <div className="side-img">
              <img
                src={data.event_images[1].event_image_url}
                alt="event-img"
                className="eventSide-img"
              />
            </div>
            <div className="side-img">
              <img
                src={data.event_images[2].event_image_url}
                alt="event-img"
                className="eventSide-img"
              />
            </div>
          </div>
        </Col>
        <Col xs={12} md={7}>
          <div key={data.id}>
            <h1>{data.event_name}</h1>
          </div>
          <div>
            <p>{data.details}</p>
          </div>
          <div>
            <button className="border-0">#{data.hash_tags}</button>
          </div>
        </Col>
      </Row>
      <Row className="mt-5 px-2">
        <Col
          xs={12}
          md={5}
          className="border border-dark-subtle border-4 rounded "
        >
          <h6>Requirements and Additional Information</h6>
          <p>Gear we provide:</p>
        </Col>
        <Col
          xs={12}
          md={7}
          className="border border-dark-subtle border-4 rounded"
        >
          <div key={data.id}>
            <h1>{data.event_name}</h1>
          </div>
          <div>
            <p>{data.details}</p>
          </div>
          <div>
            <button className="border-0">#{data.hash_tags}</button>
          </div>
        </Col>
      </Row>
    </Container>
  ));

  const content = isLoading ? <div>Loading...</div> : <div>{dataRenderer}</div>;
  //   <div><pre>{JSON.stringify(posts, null, 2)}</pre></div>;
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="Navbar custom-sticky">
        <Container className="nbar">
          <Navbar.Brand href="/">
            <img src="/loogo.png" alt="logo" className="logo-img" />
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
            {/* <Nav
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
            </Nav> */}
            <NavbarBtn />

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

      <Container className="Faqs">
        {/* <Row className="contact">
          <Col xs={12} md={5}></Col>
          <Col xs={12} md={7}>
            <h1>{content}</h1>
            <h6></h6>
            <h6></h6>
          </Col>
        </Row> */}
        <Row>
          <h1>
            {id} {content}
          </h1>
          {/* <Link to="/Blogcategory">Cateory</Link> */}
        </Row>
      </Container>

      <Container fluid>
        <Container fluid className="footer">
          <Container>
            <div class="row">
              <div class=" col-sm-3 footerP">
                <img
                  src="/palynxwlogo.png"
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
                  <Link to="/blog" className="footer-links  d-none">
                    <a>
                      Blog
                      <i class="bi bi-chevron-right footer-Angle"></i>
                    </a>
                  </Link>
                </p>
                <p>
                  <Link to="/faqs" className="footer-links">
                    <a>
                      Faqs
                      <i class="bi bi-chevron-right footer-Angle"></i>
                    </a>
                  </Link>
                </p>
                <p>
                  <Link to="/contact" className="footer-links">
                    <a>
                      Contact
                      <i class="bi bi-chevron-right footer-Angle"></i>
                    </a>
                  </Link>
                </p>
              </div>
              <div class="col-sm-3 footerp">
                <p>
                  <Link to="/terms" className="footer-links">
                    <a>
                      Terms of Service
                      <i class="bi bi-chevron-right footer-Angle"></i>
                    </a>
                  </Link>
                </p>
                <p>
                  <Link to="/privacy" className="footer-links">
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
                <Link
                  to="https://apps.apple.com/us/app/palynx/id6480189332"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-btn"
                >
                  <button className="download-button">
                    <i className="bi bi-apple"></i>
                    <div className="text-container ">
                      Download on the <br /> <span>App Store</span>
                    </div>
                  </button>
                </Link>

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
export default Events;
