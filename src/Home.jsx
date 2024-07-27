import React, { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// import Accordion from "react-bootstrap/Accordion";
import { Container, Navbar, Nav, Col, Row, Accordion } from "react-bootstrap";
import { GoArrowUpRight } from "react-icons/go";
import { BiLogoLinkedin } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";

// import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Home = () => {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 2,
    centerPadding: "130px",
    arrows: false,
    beforeChange: (current, next) => setActiveSlide(next),

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 992, // For larger screens
        settings: "unslick", // Disable slick
      },
    ],
  };

  const settings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 3,
    centerPadding: "130px",
    arrows: false,
    beforeChange: (current, next) => setActiveSlide(next),

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 3,
          dots: true,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          dots: true,
        },
      },
      {
        breakpoint: 992, // For larger screens
        settings: "unslick", // Disable slick
      },
    ],
  };
  const settings3 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 2,
    centerPadding: "130px",
    arrows: false,
    beforeChange: (current, next) => setActiveSlide(next),

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 992, // For larger screens
        settings: "unslick", // Disable slick
      },
    ],
  };
  const [activeSlide, setActiveSlide] = React.useState(0);

  const [expanded, setExpanded] = useState(false);

  const handleToggle = (key) => {
    setExpanded(expanded === key ? null : key);
  };

  const handleIconClick = (e, key) => {
    e.stopPropagation();
    handleToggle(key);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="Navbar custom-sticky">
        <Container className="nbar">
          <Navbar.Brand href="#home">
            <img src="./loogo.png" alt="logo" className="logo-img" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="border border-0 Nav-Toggle"
            onClick={() => setExpanded(expanded ? false : "expanded")}
          >
            <i className={`bi ${expanded ? "bi-x" : "bi-list"}`}></i>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav" className="menu-event">
            <Nav className="me-auto tem">
              <Nav.Link as={NavLink} to="/" className="">
                Home
                <i class="bi bi-chevron-right footer-Angle"></i>
              </Nav.Link>

              <Nav.Link as={NavLink} to="/blog" className="">
                Blog
                <i class="bi bi-chevron-right footer-Angle"></i>
              </Nav.Link>
              <Nav.Link as={NavLink} to="/faqs" className="">
                FAQS
                <i class="bi bi-chevron-right footer-Angle"></i>
              </Nav.Link>
              <Nav.Link className="">
                Contact
                <i class="bi bi-chevron-right footer-Angle"></i>
              </Nav.Link>
              <Nav.Link className="footer-Angle2">
                Contact
                <i class="bi bi-chevron-right footer-Angle2"></i>
              </Nav.Link>
            </Nav>
            <Nav className="bav-btn">
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
                >
                  <button className="btn-icon7">
                    <BiLogoLinkedin />
                  </button>
                </Link>
                <Link
                  to="https://www.instagram.com/palynxapp?igsh=cTd0Zmp5eG42NGgw"
                  className="Linked-btn2"
                >
                  <button className="btn-icon7">
                    <BsInstagram />
                  </button>
                </Link>
                <Link
                  to="https://www.facebook.com/palynxapp?mibextid=JRoKGi"
                  className="Linked-btn2"
                >
                  <button className="btn-icon7">
                    <FaFacebookF />
                  </button>
                </Link>
                <Link to="https://x.com/palynxapp" className="Linked-btn2">
                  <button className="btn-icon7">
                    <FaXTwitter />
                  </button>
                </Link>
              </div>
             
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="hero ">
        <Row className="">
          <Col xs={12} md={8} className="header-2">
            <div className="Heroo">
              <h2>
                <span className="Text-span"> Discover </span>Your City and Make
                <img
                  src="./arrow.png"
                  alt="palynx-img"
                  className="header-arrow"
                />
              </h2>
            </div>

            <h2>New Friends with Ease</h2>
            <p>
              Connect with people with like minds, similar interests, <br />{" "}
              goals and motivations and make plans all with Palynx.
            </p>
            <Link to="https://x.com/palynxapp" className="Linked-btn">
              <button className="btn-1 homebtn-1 mt-5">Download the App</button>
            </Link>
          </Col>
          <Col xs={12} md={4} className="">
            <div className="hero-imgg  w-100 h-100">
              <img src="./hero-pic.png" alt="palynx-img" className="flatn-2" />
              <img
                src="./hero-pic.png"
                alt="palynx-img"
                className="flatn"
                // style={{ objectFit: "cover" }}
              />
            </div>
          </Col>
        </Row>
        <div>
          <Link to="https://x.com/palynxapp" className="Linked-btn">
            <button className="btn-mobile">Download the App</button>
          </Link>
        </div>
      </Container>

      <Container className="hero-2">
        <Row className="">
          <Col md={4} xs={12}>
            <div className="card-1">
              <img src="./search.png" alt="palynx-img" className="hero-2Img" />
              <div className="hero-cont">
                <h6>Find events close to you</h6>
                <p>
                  You don’t need to go far, all events around your location will
                  be shown.
                </p>
              </div>
            </div>
          </Col>
          <Col md={4} xs={12}>
            <div className="card-1">
              <img src="./prof.png" alt="palynx-img" className="hero-2Img" />
              <div className="hero-cont">
                <h6>Meet people & connect</h6>
                <p>
                  We recommend events and people that are specifically tailored
                  to you.
                </p>
              </div>
            </div>
          </Col>
          <Col md={4} xs={12}>
            <div className="card-1">
              <img src="./file.png" alt="palynx-img" className="hero-2Img" />
              <div className="hero-cont">
                <h6>Share memories</h6>
                <p>
                  Get to know more about your connections and share memories.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="hero-3">
        <Row className="justify-content-center">
          <h4>
            <span>Explore</span> Your City
          </h4>
          <img
            src="./underline1.png"
            alt="palynx-img"
            className="underline1 img-fluid"
          />
          <p>
            Discover new places, hidden gems, and popular hotspots in your city.
          </p>
          <Row className="justify-content-center d-block d-md-none">
            <Slider {...settings1}>
              <div>
                <Col md={4} xs={12} className="card-2headcol">
                  <div className="card-2">
                    <div className="Btn-3">
                      <img
                        src="./view.png"
                        alt="palynx-img"
                        className="img-fluid"
                      />
                      <button className="btn-2">Romantic</button>
                    </div>
                    <div className="card-2Cont">
                      <h6>Sea & Romantic dinner</h6>
                      <pre>New York, NY - August 12</pre>
                    </div>
                  </div>
                </Col>
              </div>
              <div>
                <Col md={4} xs={12} className="card-2headcol">
                  <div className="card-2">
                    <div className="Btn-3">
                      <img
                        src="./yatch.png"
                        alt="palynx-img"
                        className="img-fluid"
                      />
                      <button className="btn-3">Party</button>
                    </div>
                    <div className="card-2Cont">
                      <h6>Yacht day & Friend’s party</h6>
                      <pre>New York, NY - August 18</pre>
                    </div>
                  </div>
                </Col>
              </div>
              <div>
                <Col md={4} xs={12} className="card-2headcol">
                  <div className="card-2 last-card">
                    <div className="Btn-3">
                      <img
                        src="./bale.png"
                        alt="palynx-img"
                        className="img-fluid"
                      />
                      <button className="btn-4">Dance classes</button>
                    </div>
                    <div className="card-2Cont">
                      <h6>Beginner & Intermediate Ballet Class</h6>
                      <pre>New York, NY - August 24</pre>
                    </div>
                  </div>
                </Col>
              </div>
            </Slider>
          </Row>
          <Row {...settings}>
            <Row className="justify-content-center d-none d-md-flex">
              <Col md={4} xs={12} className="card-2headcol">
                <div className="card-2">
                  <div className="Btn-3">
                    <img
                      src="./view.png"
                      alt="palynx-img"
                      className="img-fluid w-100"
                    />
                    <button className="btn-2">Romantic</button>
                  </div>
                  <div className="card-2Cont">
                    <h6>Sea & Romantic dinner</h6>
                    <pre>New York, NY - August 12</pre>
                  </div>
                </div>
              </Col>
              <Col md={4} xs={12} className="card-2headcol">
                <div className="card-2">
                  <div className="Btn-3">
                    <img
                      src="./yatch.png"
                      alt="palynx-img"
                      className="img-fluid w-100"
                    />
                    <button className="btn-3">Party</button>
                  </div>
                  <div className="card-2Cont">
                    <h6>Yacht day & Friend’s party</h6>
                    <pre>New York, NY - August 18</pre>
                  </div>
                </div>
              </Col>
              <Col md={4} xs={12} className="card-2headcol">
                <div className="card-2">
                  <div className="Btn-3">
                    <img
                      src="./bale.png"
                      alt="palynx-img"
                      className="img-fluid w-100"
                    />
                    <button className="btn-4">Dance classes</button>
                  </div>
                  <div className="card-2Cont">
                    <h6>Beginner & Intermediate Ballet Class</h6>
                    <pre>New York, NY - August 24</pre>
                  </div>
                </div>
              </Col>
            </Row>
          </Row>
        </Row>
      </Container>
      <Container className="hero-4 ">
        <Row className="justify-content-center hero-4Col">
          <Col md={5} xs={12}>
            <div className="hero4-1">
              <h5>
                Last-minute <span>hangout</span> option
              </h5>
              <h5>for any spontaneous plans</h5>

              <img
                src="./minute.png"
                alt="palynx-img"
                className="img-fluid plat-img1"
              />
            </div>
          </Col>

          <Col md={7} xs={12}>
            <div className="hero4-2">
              <img src="./L1.png" alt="palynx-img" className="img-fluid L1" />

              <h5>
                <span>Host</span> events and <span>find</span> attendees
              </h5>
              <img
                src="./three.png"
                alt="palynx-img"
                className="img-fluid three"
              />
              <img
                src="./mobile.png"
                alt="palynx-img"
                className="img-fluid mobile"
              />
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid className="hero-5">
        <Container fluid>
          <Container>
            <Row>
              <div className="d-flex justify-content-between">
                <h4 className="">
                  Create, Contribute, Like &{" "}
                  <span className="hero-5Share">Share</span>
                </h4>
                <div className="hero-5Button">
                  <span id="left" className="hero-5Icon" onClick={previous}>
                    <i class="bi bi-arrow-left Arrow-left"></i>
                  </span>
                  <span id="right" className="hero-5Icon mx-4" onClick={next}>
                    <i class="bi bi-arrow-right Right-left"></i>
                  </span>
                </div>
              </div>
            </Row>
          </Container>
          <Row className="mt-4">
            <div className="slider-container">
              <img src="./Vector.png" alt="palynx-img" className="Vector" />
              <Slider
                ref={(slider) => {
                  sliderRef = slider;
                }}
                {...settings}
              >
                {[
                  "./tick.png",
                  "./Ticket.png",
                  "./c33.png",
                  "./filled.png",
                ].map((src, index) => (
                  <Col className="mx-4" key={index}>
                    <div
                      className={`Slide-card ${
                        activeSlide === index ? "active" : ""
                      }`}
                    >
                      <img
                        src={src}
                        alt={`slide-${index}`}
                        className="pic-slide"
                      />
                    </div>
                  </Col>
                ))}
              </Slider>
            </div>
          </Row>
        </Container>
      </Container>
      <Container className="hero-6">
        <Row className="">
          <Col md={5} xs={12}>
            <div className="section1">
              <img
                src="./lady.png"
                alt="palynx-img"
                className="img-fluid lady"
              />
              <Link to="https://x.com/palynxapp" className="Linked-btn">
                <button className="btn-img">Download the App</button>
              </Link>
              <img
                src="./Highlight.png"
                alt="palynx-img"
                className="img-fluid Line"
              />
            </div>
          </Col>
          <Col md={7} xs={12}>
            <div className="section2">
              <h4>
                Why Choose <span> Palynx</span>?
              </h4>
            </div>
            <div className="sec-1Cont">
              <img
                src="./Highlight1.png"
                alt="palynx-img"
                className="img-fluid highlight1"
              />
              <div className="sec-1 d-flex">
                <img
                  src="./star1.png"
                  alt="palynx-img"
                  className="img-fluid "
                />
                <div className="Sec-1writeup">
                  <h5>User-Friendly Interface</h5>
                  <p>
                    Intuitive design makes it easy for anyone to navigate and
                    use.
                  </p>
                </div>
              </div>
              <div className="sec-1 d-flex">
                <img
                  src="./guide1.png"
                  alt="palynx-img"
                  className="img-fluid"
                />
                <div className="Sec-1writeup">
                  <h5>Secure and Private</h5>
                  <p>
                    Your data is protected with top-notch security measures.
                  </p>
                </div>
              </div>
              <div className="sec-1 d-flex">
                <img
                  src="./recycle1.png"
                  alt="palynx-img"
                  className="img-fluid"
                />

                <div className="Sec-1writeup">
                  <h5>Real-Time Updates</h5>
                  <p>
                    Stay informed with real-time notifications about events and
                    friend activities.
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <div>
            <Link to="https://x.com/palynxapp" className="Linked-btn">
              <button className="btn-mobile">Download the App</button>
            </Link>
          </div>
        </Row>
      </Container>
      <Container className="hero-7">
        <Row>
          <Col md={7} xs={12}>
            <div className="hero77">
              <h4>
                Download <span className="hero77-Span">Palynx Today!</span>
              </h4>
              <p>
                Start your journey of exploration and connection. Download
                Palynx now and take the first step towards discovering your city
                and making meaningful connections.
              </p>
              <button className="download-button-1">
                <i className="bi bi-apple"></i>
                <div className="text-container">
                  Download on the <br /> <span>App Store</span>
                </div>
              </button>
              <div className="PalynxT"></div>
              <img
                src="./arow.png"
                alt="palynx-img"
                className="img-fluid arow"
              />
              <div className="Down-arrow">
                <img
                  src="./aroww.png"
                  alt="palynx-img"
                  className="img-fluid aroww"
                />
              </div>
            </div>
          </Col>
          <Col md={5} xs={12} className="">
            <div className="down-Img">
              <img
                src="./download.png"
                alt="palynx-img"
                className="img-fluid download"
              />
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="hero-8">
        <div className="hero-8Header">
          <div className="d-flex justify-content-between">
            <h5>
              Discover More with the Palynx{" "}
              <span>
                {" "}
                Blog
                <img
                  src="./dash.png"
                  alt="palynx-img"
                  className="img-fluid dash"
                />
              </span>
            </h5>
            <div>
              <Link to="/Blog">
                <button className="discover-btn">
                  More <i class="bi bi-arrow-right"></i>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <Row className="d-flex justify-content-center mt-4 d-none d-md-flex">
          <Col md={4} xs={12}>
            <Link to="Blog" className="blog">
              <div className="hero-8Card">
                <div>
                  <img
                    src="./party.png"
                    alt="palynx-img"
                    className="img-fluid party"
                  />
                  <div className="discoverp">
                    <h6>Top 10 Hidden Gems in Your City</h6>
                    <p>
                      Discover the lesser-known spots in your city that are
                      waiting to be explored. From...
                    </p>
                    <pre>02/05/2024 . 12 min read</pre>
                  </div>
                </div>
              </div>
            </Link>
          </Col>
          <Col md={4} xs={12}>
            <Link to="Blog" className="blog">
              <div className="hero-8Card">
                <div>
                  <img
                    src="./pitch.png"
                    alt="palynx-img"
                    className="img-fluid pitch"
                  />
                  <div className="discoverp1">
                    <h6>How to Meet Like-Minded People: Tips and Tricks</h6>
                    <p>
                      Building meaningful connections is easier than you think.
                      Learn how to find and connect with individuals who share
                      your interests and passions.
                    </p>
                    <pre>02/05/2024 . 12 min read</pre>
                  </div>
                </div>
              </div>
            </Link>
          </Col>
          <Col md={4} xs={12}>
            <Link to="Blog" className="blog">
              <div className="hero-8Card">
                <div>
                  <img
                    src="./diary.png"
                    alt="palynx-img"
                    className="img-fluid diary"
                  />
                  <div className="discoverp">
                    <h6>Top 10 Hidden Gems in Your City</h6>
                    <p>
                      Discover the lesser-known spots in your city that are
                      waiting to be explored. From...
                    </p>
                    <pre>02/05/2024 . 12 min read</pre>
                  </div>
                </div>
              </div>
            </Link>
          </Col>
        </Row>
        <Row className="justify-content-center d-block d-md-none">
          <Slider {...settings3}>
            <Col md={4} xs={12}>
              <div className="hero-8Card">
                <div>
                  <Link to="Blog" className="blog">
                    <img
                      src="./party.png"
                      alt="palynx-img"
                      className="img-fluid party"
                    />
                  </Link>

                  <div className="discoverp">
                    <h6>Top 10 Hidden Gems in Your City</h6>
                    <p>
                      Discover the lesser-known spots in your city that are
                      waiting to be explored. From...
                    </p>
                    <pre>02/05/2024 . 12 min read</pre>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={4} xs={12}>
              <div className="hero-8Card">
                <div>
                  {" "}
                  <Link to="Blog" className="blog">
                    <img
                      src="./diary.png"
                      alt="palynx-img"
                      className="img-fluid diary"
                    />
                  </Link>
                  <div className="discoverp">
                    <h6>Top 10 Hidden Gems in Your City</h6>
                    <p>
                      Discover the lesser-known spots in your city that are
                      waiting to be explored. From...
                    </p>
                    <pre>02/05/2024 . 12 min read</pre>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={4} xs={12}>
              <div className="hero-8Card">
                <div>
                  <Link to="Blog" className="blog">
                    {" "}
                    <img
                      src="./diary.png"
                      alt="palynx-img"
                      className="img-fluid diary"
                    />
                  </Link>

                  <div className="discoverp">
                    <h6>Top 10 Hidden Gems in Your City</h6>
                    <p>
                      Discover the lesser-known spots in your city that are
                      waiting to be explored. From...
                    </p>
                    <pre>02/05/2024 . 12 min read</pre>
                  </div>
                </div>
              </div>
            </Col>
          </Slider>
        </Row>
      </Container>
      <Container className="hero-9">
        <img src="./drop.png" alt="palynx-img" className="img-fluid drop" />

        <h5>
          Frequently asked<span> questions </span>
        </h5>
        <Row className="accordion">
          <Accordion activeKey={expanded}>
            <Accordion.Item eventKey="0" className="accordionItem">
              <div
                className={`accordionHeader ${
                  expanded === "0" ? "bg-white" : "bg-transparent"
                }`}
                onClick={() => handleToggle("0")}
              >
                <h1 className="accordionSpan">What is Palynx?</h1>
                <i
                  className={`accordionToggleIcon fas ${
                    expanded === "0" ? "fa-chevron-up" : "fa-chevron-down"
                  }`}
                  onClick={(e) => handleIconClick(e, "0")}
                />
              </div>
              <Accordion.Body className="accordionBody">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className="accordionItem">
              <div
                className={`accordionHeader ${
                  expanded === "1" ? "bg-white" : "bg-transparent"
                }`}
                onClick={() => handleToggle("1")}
              >
                <h1 className="accordionSpan">What is Palynx?</h1>
                <i
                  className={`accordionToggleIcon fas ${
                    expanded === "1" ? "fa-chevron-up" : "fa-chevron-down"
                  }`}
                  onClick={(e) => handleIconClick(e, "1")}
                />
              </div>
              <Accordion.Body className="accordionBody">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className="accordionItem">
              <div
                className={`accordionHeader ${
                  expanded === "2" ? "bg-white" : "bg-transparent"
                }`}
                onClick={() => handleToggle("2")}
              >
                <h1 className="accordionSpan">What is Palynx?</h1>
                <i
                  className={`accordionToggleIcon fas ${
                    expanded === "2" ? "fa-chevron-up" : "fa-chevron-down"
                  }`}
                  onClick={(e) => handleIconClick(e, "2")}
                />
              </div>
              <Accordion.Body className="accordionBody">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
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
                      Follow us on social media to stay updated with the <br />{" "}
                      latest news, events, and features!
                    </p>
                    <div className="icon d-flex">
                      <Link
                        to=" https://www.linkedin.com/company/palynxapp/"
                        className="Linked-btn2"
                      >
                        <button className="btn-icon">
                          <BiLogoLinkedin />
                        </button>
                      </Link>
                      <Link
                        to="https://www.instagram.com/palynxapp?igsh=cTd0Zmp5eG42NGgw"
                        className="Linked-btn2"
                      >
                        <button className="btn-icon">
                          <BsInstagram />
                        </button>
                      </Link>
                      <Link
                        to="https://www.facebook.com/palynxapp?mibextid=JRoKGi"
                        className="Linked-btn2"
                      >
                        <button className="btn-icon">
                          <FaFacebookF />
                        </button>
                      </Link>
                      <Link
                        to="https://x.com/palynxapp"
                        className="Linked-btn2"
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
                  >
                    <button className="btn-icon2">
                      <BiLogoLinkedin />
                    </button>
                  </Link>

                  <Link
                    to="https://www.instagram.com/palynxapp?igsh=cTd0Zmp5eG42NGgw"
                    className="Linked-btn"
                  >
                    <button className="btn-icon2">
                      <BsInstagram />
                    </button>
                  </Link>

                  <Link
                    to="https://www.facebook.com/palynxapp?mibextid=JRoKGi"
                    className="Linked-btn"
                  >
                    <button className="btn-icon2">
                      <FaFacebookF />
                    </button>
                  </Link>

                  <Link to="https://x.com/palynxapp" className="Linked-btn">
                    <button className="btn-icon2">
                      <FaXTwitter />
                    </button>
                  </Link>
                </div>
              </div>
              <div class="col-sm-3 footerp">
                <p>
                  <Link
                    to="https://www.facebook.com/palynxapp?mibextid=JRoKGi"
                    className="footer-links"
                  >
                    <a>
                      About us
                      <i class="bi bi-chevron-right footer-Angle"></i>
                    </a>
                  </Link>
                </p>
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
                  <Link to="/" className="footer-links">
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
export default Home;
