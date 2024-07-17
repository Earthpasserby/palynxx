import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Accordion from "react-bootstrap/Accordion";
import { Container, Navbar, Nav, Col, Row } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { BiLogoLinkedin } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
// import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Homepage = () => {
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
    slidesToScroll: 2,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: false,
          dots: false,
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
        breakpoint: 390,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
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
            <img src="./content.png" alt="palynx-img" className="img-cont1" />
            <img src="./card.png" alt="palynx-img" className="img-cont2" />
            <img src="./Underline.png" alt="palynx-img" className="img-cont3" />
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
        <Row className="justify-content-center">
          <Col sm={5} className="hero4-1">
            <h5>
              Last-minute <span>hangout</span> option for any spontaneous plans
            </h5>
            <img
              src="./minute.png"
              alt="palynx-img"
              className="img-fluid Img4"
            />
          </Col>
          <img
            src="./Underline.png"
            alt="palynx-img"
            className="img-fluid Under-line"
          />
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
      <Container className="hero-5">
        <div className="d-flex justify-content-between">
          <h4 className="">
            Create, Contribute, Like & <span>Share</span>
          </h4>
          <div className="mt-5">
            <span id="left" className="Icon" onClick={previous}>
              <i class="bi bi-arrow-left-circle-fill"></i>
            </span>
            <span id="right" className="Icon mx-4" onClick={next}>
              <i class="bi bi-arrow-right-circle-fill"></i>
            </span>
          </div>
        </div>
        <Row>
          <div className="slider-container">
            <Slider
              ref={(slider) => {
                sliderRef = slider;
              }}
              {...settings}
            >
              <div class="Slide-card">
                <img
                  src="./tick.png"
                  alt="Ticket-img"
                  className="pic-slide w-75"
                />
              </div>
              <div className="Slide-card">
                <img
                  src="./Ticket.png"
                  alt="barcode-img"
                  className="pic-slide w-75"
                />
              </div>
              <div className="Slide-card">
                <img
                  src="./c33.png"
                  alt="palynx-img"
                  className="pic-slide w-75"
                />
              </div>
              <div className="Slide-card">
                <img
                  src="./filled.png"
                  alt="palynx-product"
                  className="pic-slide w-75"
                />
              </div>
            </Slider>
          </div>
        </Row>
      </Container>
      <Container className="hero-6">
        <Row>
          <Col md={5} className="section1">
            <img src="./lady.png" alt="palynx-img" className="img-fluid lady" />
            <div>
              <button className="btn btn-1 btn-img">Download the App</button>
            </div>
            <img
              src="./Highlight.png"
              alt="palynx-img"
              className="img-fluid Line"
            />
          </Col>
          <Col md={7} className="section2">
            <h4>
              Why Choose <span> Palynx</span>?
            </h4>
            <img
              src="./Highlight1.png"
              alt="palynx-img"
              className="img-fluid highlight1"
            />
            <div className="sec-1 d-flex">
              <img src="./star1.png" alt="palynx-img" className="img-fluid" />
              <div>
                <h5>User-Friendly Interface</h5>
                <p>
                  Intuitive design makes it easy for anyone to navigate and use.
                </p>
              </div>
            </div>
            <div className="sec-1 d-flex">
              <img src="./guide1.png" alt="palynx-img" className="img-fluid" />
              <div>
                <h5>Secure and Private</h5>
                <p>Your data is protected with top-notch security measures.</p>
              </div>
            </div>
            <div className="sec-1 d-flex">
              <img
                src="./recycle1.png"
                alt="palynx-img"
                className="img-fluid"
              />

              <div>
                <h5>Real-Time Updates</h5>
                <p>
                  Stay informed with real-time notifications about events and
                  friend activities.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="hero-7">
        <Row>
          <Col sm={7}>
            <h4>
              Download <span>Palynx Today!</span>
            </h4>
            <p>
              Start your journey of exploration and connection. Download Palynx
              now and take the first step towards discovering your city and
              making meaningful connections.
            </p>
            <img src="./arow.png" alt="palynx-img" className="img-fluid arow" />
            <img
              src="./aroww.png"
              alt="palynx-img"
              className="img-fluid aroww"
            />
            <button className="btn btn-1 download-btn d-flex">
              <img
                src="./apple.png"
                alt="palynx-img"
                className="img-fluid apple"
              />
              Download on the App Store
            </button>
          </Col>
          <Col sm={5} className="mb-4">
            <img
              src="./download.png"
              alt="palynx-img"
              className="img-fluid download"
            />
          </Col>
        </Row>
      </Container>
      <Container className="hero-8">
        <img src="./dash.png" alt="palynx-img" className="img-fluid dash" />
        <div className="d-flex justify-content-between">
          <h5>
            Discover More with the Palynx <span> Blog</span>
          </h5>
          <div>
            <button className="btn btn-2 ">
              More <i class="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
        <Row className="d-flex justify-content-center">
          <Col sm={4} className="hero-8Card">
            <div>
              <img
                src="./party.png"
                alt="palynx-img"
                className="img-fluid party"
              />
              <div className="discoverp">
                <h6>Top 10 Hidden Gems in Your City</h6>
                <p>
                  Discover the lesser-known spots in your city that are waiting
                  to be explored. From cozy cafes to secret parks, uncover
                  places that only locals know about.
                </p>
                <pre>02/05/2024 . 12 min read</pre>
              </div>
            </div>
          </Col>
          <Col sm={4} className="hero-8Card">
            <div>
              <img
                src="./pitch.png"
                alt="palynx-img"
                className="img-fluid pitch"
              />
              <div className="discoverp">
                <h6>How to Meet Like-Minded People: Tips and Tricks</h6>
                <p>
                  Building meaningful connections is easier than you think.
                  Learn how to find and connect with individuals who share your
                  interests and passions.
                </p>
                <pre>02/05/2024 . 12 min read</pre>
              </div>
            </div>
          </Col>
          <Col sm={4} className="hero-8Card">
            <div>
              <img
                src="./diary.png"
                alt="palynx-img"
                className="img-fluid diary"
              />
              <div className="discoverp">
                <h6>Top 10 Hidden Gems in Your City</h6>
                <p>
                  Discover the lesser-known spots in your city that are waiting
                  to be explored. From cozy cafes to secret parks, uncover
                  places that only locals know about.
                </p>
                <pre>02/05/2024 . 12 min read</pre>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="hero-9">
        <img src="./drop.png" alt="palynx-img" className="img-fluid drop" />
        <h5>
          Frequently asked<span> questions </span>
        </h5>
        <Row className="accordion">
          <Accordion>
            <Accordion.Item eventKey="0" class="rounded-3  border ">
              <Accordion.Header class="bg-transparent">
                What is Palynx?
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className="mt-2 rounded-3  border">
              <Accordion.Header class="accordionHeader bg-transparent">
                Connecting with Palynx
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item
              eventKey="2"
              className="mt-2 rounded-3  border border"
            >
              <Accordion.Header class="accordionHeader h-25">
                Do more with Palynx
              </Accordion.Header>
              <Accordion.Body>
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
        <Row>
          <Col sm={6} className="cardfooter">
            {/* <img src="./line.png" alt="palynx-img" className="img-fluid" /> */}
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
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Homepage;
