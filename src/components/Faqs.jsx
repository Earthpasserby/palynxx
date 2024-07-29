import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Container, Col, Row, Navbar, Nav } from "react-bootstrap";
import { GoArrowUpRight } from "react-icons/go";
import { BiLogoLinkedin } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";

const Faqs = () => {
  const [expanded, setExpanded] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
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
              <div className="d-flex Navbar-iconMobile">
                <button className="btn-icon7">
                  <BiLogoLinkedin />
                </button>
                <button className="btn-icon7">
                  <BsInstagram />
                </button>
                <button className="btn-icon7">
                  <FaFacebookF />
                </button>
                <button className="btn-icon7">
                  <FaXTwitter />
                </button>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <Row className="Faqs">
          <Col md={12} xs={12}>
            <h5>Palynx FAQ</h5>
            <h6>General Questions </h6>
            <p>
              Q: What is Palynx? A: Palynx is a social app designed to help you
              discover events, places, and friends. Whether you're looking for a
              fun outing, a great restaurant, or new connections, Palynx is your
              go-to app for creating unforgettable experiences.
            </p>
            <p>
              Q: How does Palynx work? A: Palynx uses an advanced algorithm to
              match you with events, places, and people based on your interests
              and preferences. You can explore personalized recommendations,
              join last-minute hangouts, and connect with new friends.
            </p>
            <p>
              Q: Is Palynx free to use? A: Yes, Palynx is free to download and
              use. We also offer premium features and bundles to enhance your
              experience.
            </p>
            <p>
              Q: How do I sign up for Palynx? A: You can sign up for Palynx by
              downloading the app from the Apple App Store or Google Play Store.
              Follow the on-screen instructions to create your account and start
              exploring.
            </p>
            <h6>Paid Options </h6>
            <div>
              <p>
                Q: What is the Spotlight feature? A: The Spotlight feature
                allows you to temporarily boost your profile to the top of
                search results or the event attendees list for increased
                visibility. This helps you get noticed by more users.{" "}
              </p>
            </div>
            <div>
              <p>
                Q: What is the Spotlight feature? A: The Spotlight feature
                allows you to temporarily boost your profile to the top of
                search results or the event attendees list for increased
                visibility. This helps you get noticed by more users.{" "}
              </p>
            </div>
            <div>
              <p>
                Q: How much does the Spotlight feature cost? A: The Spotlight
                feature costs $1.99 per boost.
              </p>
            </div>
            <div>
              <p>
                Q: What is the Last-Minute Hangout feature? A: The Last-Minute
                Hangout feature prioritizes your event requests to others
                looking for immediate plans. It's perfect for finding friends to
                attend events on the same day or the next day.
              </p>
            </div>
            <div>
              <p>
                Q: How much does the Last-Minute Hangout feature cost? A: The
                Last-Minute Hangout feature costs $2.49 for the day.
              </p>
            </div>
            <div>
              <p>
                Q: What is the Super Connect feature? A: The Super Connect
                feature allows you to send a direct message to another user
                without needing to match first. It's a great way to connect with
                people you're interested in meeting.
              </p>
            </div>
            <div>
              <p>
                Q: How much does the Super Connect feature cost? A: The Super
                Connect feature costs $0.99 per message.
              </p>
            </div>
            <div>
              <p>
                Q: What is the Profile Enhancer feature? A: The Profile Enhancer
                feature adds a temporary decorative border or badge to your
                profile picture to help you stand out in the crowd.
              </p>
            </div>
            <div>
              <p>
                Q: How much does the Profile Enhancer feature cost? A: The
                Profile Enhancer feature costs $0.99 for 24 hours.
              </p>
            </div>
            <div>
              <p>
                Q: What is the Event Spotlight feature? A: The Event Spotlight
                feature promotes your own hosted event to the top of the event
                feed, increasing visibility and attendance.
              </p>
            </div>
            <div>
              <p>
                Q: How much does the Event Spotlight feature cost? A: The Event
                Spotlight feature costs $2.99 per event per day. Bundles
              </p>
            </div>
            <div>
              <p>
                Bundles Q: What is the Social Starter Pack? A: The Social
                Starter Pack is a bundle that includes 1 Spotlight Boost, 2
                Super Connects, and 1 Profile Enhancer. It's designed to help
                you kickstart your social interactions on Palynx.
              </p>
            </div>
            <div>
              <p>
                Q: How much does the Social Starter Pack cost? A: The Social
                Starter Pack costs $4.99.
              </p>
            </div>
            <div>
              <p>
                Q: What is the Night Out Kit? A: The Night Out Kit is a bundle
                that includes 1 Last-Minute Hangout, 1 Event Spotlight, and 3
                Super Connects. It's perfect for planning a fun night out with
                friends.
              </p>
            </div>
            <div>
              <p>
                Q: How much does the Night Out Kit cost? A: The Night Out Kit
                costs $6.99.
              </p>
            </div>
            <div>
              <p>
                Q: What is the Monthly Mixer Pass? A: The Monthly Mixer Pass is
                a subscription bundle that includes 5 Spotlight Boosts,
                unlimited Profile Enhancers, and 2 Last-Minute Hangouts per
                month. It's ideal for users who want to maximize their social
                interactions regularly.
              </p>
            </div>
            <div>
              <p>
                Q: How much does the Monthly Mixer Pass cost? A: The Monthly
                Mixer Pass costs $9.99 per month.{" "}
              </p>
            </div>
            <div>
              <h6>Event Fees</h6>
              <p>
                Q: What are the event fees on Palynx? A: Palynx charges event
                fees for paid events based on the size and type of the event.
                There is no fee charged for free events.
              </p>
              <p>
                Q: What is the Free Tier for event fees? A: The Free Tier is for
                small events of under 25 attendees. There is no fee charged for
                paid events with under 25 attendees.
              </p>
              <p>
                Q: What is the Basic Tier for event fees? A: The Basic Tier is
                for smaller or community events of up to 40 or more attendees.
                The fee is 2.5% of the ticket price plus a fixed amount of $0.99
                per ticket.
              </p>
              <p>
                Q: What is the Professional Tier for event fees? A: The
                Professional Tier is for larger events of 70 or more attendees.
                The fee is 3.5% of the ticket price plus a fixed amount of $1.49
                per ticket.
              </p>
              <p>
                Q: What is the Premium Tier for event fees? A: The Premium Tier
                is for larger events of 120 or more attendees. The fee is 5% of
                the ticket price plus a fixed amount of $1.99 per ticket.
              </p>
              <h6>Usage and Features</h6>
              <p>
                Q: How do I find events on Palynx? A: You can find events by
                browsing the "Events" tab. Events are categorized by type, date,
                and location, making it easy to find something that interests
                you.
              </p>
              <p>
                Q: How do I find places on Palynx? A: You can explore places
                such as restaurants, bars, and cafes by browsing the "Places"
                tab. Use filters to narrow down your search based on your
                preferences.
              </p>
              <p>
                Q: How do I connect with new friends on Palynx? A: Palynx
                suggests potential friends based on your interests and mutual
                connections. You can swipe right to connect or send a Super
                Connect message directly.
              </p>
              <p>
                Q: What is Palynx Pairings? A: Palynx Pairings is a feature that
                suggests an event and a potential friend to attend the event
                with. It's a great way to make new connections while enjoying
                fun activities.
              </p>
              <p>
                Q: How can I improve my profile visibility? A: You can use the
                Spotlight feature to boost your profile visibility.
                Additionally, enhancing your profile with a decorative border or
                badge can help you stand out.
              </p>
              <p>
                Q: Can I host my own events on Palynx? A: Yes, you can create
                and host your own events on Palynx. Use the Event Spotlight
                feature to increase your event's visibility and attract more
                attendees.
              </p>
              <h6>Support</h6>
              <p>
                Q: How do I contact Palynx support? A: You can contact Palynx
                support by emailing support@palynx.com or using the in-app
                support feature. Our team is here to help with any questions or
                issues you may have.
              </p>
              <p>
                Q: Where can I find more information about Palynx's privacy
                policy? A: You can view our privacy policy on our website or
                within the app under the "Settings" section.
              </p>
              <p>
                Q: How do I report a problem or give feedback? A: To report a
                problem or provide feedback, use the in-app support feature or
                email us at feedback@palynx.com. We value your input and strive
                to improve your experience.
              </p>
            </div>{" "}
          </Col>
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
export default Faqs;
