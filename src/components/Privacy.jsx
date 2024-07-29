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

const Privacy = () => {
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
      <Container className="policy">
        <Row>
          <Col md={12} sm={12}>
            <div className="policy-Tag">
              <h3>Privacy Policy</h3>
              <pre>Last modified: May 6, 2024</pre>
              <h6>Introduction</h6>
              <p>
                Palynx, Inc. ("Company" or "We") respect your privacy and are
                committed to protecting it through our compliance with this
                policy. This policy describes the types of information we may
                collect from you or that you may provide when you visit the
                website www.palynx.com (our "Website") and our practices for
                collecting, using, maintaining, protecting, and disclosing that
                information. This policy applies to information we collect:
                <ul>
                  <li> On this Website.</li>
                  <li>
                    {" "}
                    In email, text, and other electronic messages between you
                    and this Website.
                  </li>
                  <li>
                    {" "}
                    Through mobile and desktop applications you download from
                    this Website, which provide dedicated non-browser-based
                    interaction between you and this Website.
                  </li>
                  <li>
                    When you interact with our advertising and applications on
                    third-party websites and services, if those applications or
                    advertising include links to this policy.{" "}
                  </li>
                  It does not apply to information collected by:
                  <li>
                    Us offline or through any other means, including on any
                    other website operated by Company or{" "}
                  </li>
                  <li>
                    any third party (including through our affiliates and
                    subsidiaries); or Any third party, (including through our
                    affiliates and subsidiaries) including through any
                    application or content (including advertising) that may link
                    to or be accessible from or through the Website.
                  </li>
                </ul>
                Please read this policy carefully to understand our policies and
                practices regarding your information and how we will treat it.
                If you do not agree with our policies and practices, your choice
                is not to use our Website. By accessing or using this Website,
                you agree to this privacy policy. This policy may change from
                time to time (see Changes to Our Privacy Policy). Your continued
                use of this Website after we make changes is deemed to be
                acceptance of those changes, so please check the policy
                periodically for updates.
              </p>
              <h6>Children Under the Age of 16</h6>
              <p>
                Our Website is not intended for children under 16 years of age.
                No one under age 16 may provide any information to or on the
                Website. We do not knowingly collect personal information from
                children under 16. If you are under 16, do not use or provide
                any information on this Website or through any of its features,
                register on the Website, make any purchases through the Website,
                use any of the interactive or public comment features of this
                Website, nor provide any information about yourself to us,
                including your name, address, telephone number, email address,
                or any screen name or user name you may use. If we learn we have
                collected or received personal information from a child under 16
                without verification of parental consent, we will delete that
                information. If you believe we might have any information from
                or about a child under 16, please contact us at
                admin@palynx.com. Residents of certain states under 13, 16, or
                18 years of age may have additional rights regarding the
                collection and sale of their personal information. Please see
                Your State Privacy Rights for more information.
              </p>
              <h6>Information We Collect About You and How We Collect It</h6>
              <p>
                We collect several types of information from and about users of
                our Website, including information:
                <ul>
                  <li>
                    By which you may be personally identified, such as name,
                    postal address, email address, telephone number, usernames,
                    passwords, contact preferences, contact or authentication
                    data, billing addresses/any other identifier by which you
                    may be contacted online or offline ("personal information");{" "}
                  </li>
                  <li>
                    {" "}
                    That is about you but individually does not identify you,
                    such as such as traffic data, location data, logs,
                    referring/exit pages, date and time of your visit to our
                    Website, error information, clickstream data, and other
                    communication data and the resources that you access and use
                    on the Website; and/or
                  </li>
                  <li>
                    {" "}
                    About your internet connection, the equipment you use to
                    access our Website, and usage details.
                  </li>
                  We collect this information:
                  <li> Directly from you when you provide it to us.</li>
                  <li>
                    {" "}
                    Automatically as you navigate through the site. Information
                    collected automatically may include usage details, IP
                    addresses, and information collected through cookies, web
                    beacons, and other tracking technologies.
                  </li>
                  <li>
                    From third parties, for example, our business partners. ‍
                  </li>
                </ul>{" "}
                Information You Provide to Us The information we collect on or
                through our Website may include:
                <ul>
                  <li>
                    {" "}
                    Information that you provide by filling in forms on our
                    Website. This includes information provided at the time of
                    registering to use our Website, subscribing to our service,
                    posting material, or requesting further services. We may
                    also ask you for information when you enter a contest or
                    promotion sponsored by us, and when you report a problem
                    with our Website.
                  </li>
                  <li>
                    Records and copies of your correspondence (including email
                    addresses), if you contact us.
                  </li>
                  <li>
                    {" "}
                    Your responses to surveys that we might ask you to complete
                    for research purposes.
                  </li>
                  <li>
                    {" "}
                    Details of transactions you carry out through our Website
                    and of the fulfillment of your orders. You may be required
                    to provide financial information before placing an order
                    through our Website.
                  </li>
                  <li>Your search queries on the Website.</li>
                </ul>{" "}
                You also may provide information to be published or displayed
                (hereinafter, "posted") on public areas of the Website, or
                transmitted to other users of the Website or third parties
                (collectively, "User Contributions"). Your User Contributions
                are posted on and transmitted to others at your own risk.
                Although we limit access to certain pages/you may set certain
                privacy settings for such information by logging into your
                account profile, please be aware that no security measures are
                perfect or impenetrable. Additionally, we cannot control the
                actions of other users of the Website with whom you may choose
                to share your User Contributions. Therefore, we cannot and do
                not guarantee that your User Contributions will not be viewed by
                unauthorized persons. <br />
                Information We Collect Through Automatic Data Collection
                Technologies
                <br /> As you navigate through and interact with our Website, we
                may use automatic data collection technologies to collect
                certain information about your equipment, browsing actions, and
                patterns, including:
                <ul>
                  <li>
                    {" "}
                    Details of your visits to our Website, including traffic
                    data, location data, logs, and other communication data and
                    the resources that you access and use on the Website.
                  </li>
                  <li>
                    Information about your computer and internet connection,
                    including your IP address, operating system, and browser
                    type. ‍
                  </li>
                </ul>
                The information we collect automatically include personal
                information, or we may maintain it or associate it with personal
                information we collect in other ways or receive from third
                parties. It helps us to improve our Website and to deliver a
                better and more personalized service, including by enabling us
                to:
                <ul>
                  <li> Estimate our audience size and usage patterns.</li>
                  <li>
                    {" "}
                    Store information about your preferences, allowing us to
                    customize our Website according to your individual
                    interests.
                  </li>
                  <li> Speed up your searches.</li>
                  <li> Recognize you when you return to our Website.</li>
                </ul>
                The technologies we use for this automatic data collection may
                include: <br />
                1.<b> Cookies (or browser cookies)</b>. A cookie is a small file
                placed on the hard drive of your computer. You may refuse to
                accept browser cookies by activating the appropriate setting on
                your browser. However, if you select this setting you may be
                unable to access certain parts of our Website. Unless you have
                adjusted your browser setting so that it will refuse cookies,
                our system will issue cookies when you direct your browser to
                our Website. For information about managing your privacy and
                security settings for cookies, see Choices About How We Use and
                Disclose Your Information <br />
                2. <b>Web Beacons</b>. Pages of our Website and our emails may
                contain small electronic files known as web beacons (also
                referred to as clear gifs, pixel tags, and single-pixel gifs)
                that permit the Company, for example, to count users who have
                visited those pages or opened an email and for other related
                website statistics (for example, recording the popularity of
                certain website content and verifying system and server
                integrity). We do not collect personal information
                automatically, but we may tie non-personal information collected
                automatically to personal information about you that we collect
                from other sources or that you provide to us.
              </p>
              <h6>How We Use Your Information</h6>
              <p>
                We use information that we collect about you or that you provide
                to us, including any personal information:
                <ul>
                  <li> To present our Website and its contents to you.</li>
                  <li>
                    To provide you with information, products, or services that
                    you request from us.{" "}
                  </li>
                  <li>
                    To fulfill any other purpose for which you provide it.
                  </li>
                  <li>
                    To provide you with notices about your account, including
                    expiration and renewal notices.
                  </li>
                  <li>
                    To carry out our obligations and enforce our rights arising
                    from any contracts entered into between you and us,
                    including for billing and collection.
                  </li>
                  <li>
                    To notify you about changes to our Website or any products
                    or services we offer or provide though it.
                  </li>
                  <li>
                    In any other way we may describe when you provide the
                    information.
                  </li>
                  <li> For any other purpose with your consent.</li>
                </ul>
                We may also use your information to contact you about our own
                and third-parties' goods and services that may be of interest to
                you. If you do not want us to use your information in this way,
                please check the relevant box located on the form on which we
                collect your data. For more information, see Choices About How
                We Use and Disclose Your Information. <br /> We may use the
                information we have collected from you to enable us to display
                advertisements to our advertisers' target audiences. Even though
                we do not disclose your personal information for these purposes
                without your consent, if you click on or otherwise interact with
                an advertisement, the advertiser may assume that you meet its
                target criteria.
              </p>
              <h6>Disclosure of Your Information</h6>
              <p>
                We may disclose aggregated information about our users, and
                information that does not identify any individual, without
                restriction.
                <br /> We may disclose personal information that we collect or
                you provide as described in this privacy policy:
                <ul>
                  <li> To our subsidiaries and affiliates. </li>
                  <li>
                    {" "}
                    To contractors, service providers, and other third parties
                    we use to support our business and who are bound by
                    contractual obligations to keep personal information
                    confidential and use it only for the purposes for which we
                    disclose it to them.
                  </li>
                  <li>
                    {" "}
                    To a buyer or other successor in the event of a merger,
                    divestiture, restructuring, reorganization, dissolution, or
                    other sale or transfer of some or all of Palynx's assets,
                    whether as a going concern or as part of bankruptcy,
                    liquidation, or similar proceeding, in which personal
                    information held by Palynx about our Website users is among
                    the assets transferred.{" "}
                  </li>
                  <li>
                    {" "}
                    To fulfill the purpose for which you provide it. For
                    example, if you give us an email address to use the "email a
                    friend" feature of our Website, we will transmit the
                    contents of that email and your email address to the
                    recipients.
                  </li>
                  <li>
                    {" "}
                    For any other purpose disclosed by us when you provide the
                    information.
                  </li>
                  <li> With your consent.</li>
                  We may also disclose your personal information:
                  <li>
                    {" "}
                    To comply with any court order, law, or legal process,
                    including to respond to any government or regulatory
                    request.
                  </li>
                  <li>
                    {" "}
                    To enforce or apply our terms of use and other agreements,
                    including for billing and collection purposes.{" "}
                  </li>
                  <li>
                    {" "}
                    If we believe disclosure is necessary or appropriate to
                    protect the rights, property, or safety of Palynx, our
                    customers, or others.This includes exchanging information
                    with other companies and organizations for the purposes of
                    fraud protection and credit risk reduction.
                  </li>
                </ul>
              </p>
              <h6>Choices About How We Use and Disclose Your Information</h6>
              <p>
                We strive to provide you with choices regarding the personal
                information you provide to us. We have created mechanisms to
                provide you with the following control over your information: 1.
                1. Promotional Offers from the Company. If you do not wish to
                have your email address used by the Company to promote our own
                or third parties' products or services, you can opt- out by
                checking the relevant box located on the form on which we
                collect your data or at any other time by sending us an email
                stating your request to admin@palynx.com. If we have sent you a
                promotional email, you may send us a return email asking to be
                omitted from future email distributions. ‍ Residents of certain
                states may have additional personal information rights and
                choices. Please see Your State Privacy Rights for more
                information.
              </p>
              <h6>Accessing and Correcting Your Information</h6>
              <p>
                You may send us an email at admin@palynx.com to request access
                to, correct, or delete any personal information that you have
                provided to us. We cannot delete your personal information
                except by also deleting your user account. We may not
                accommodate a request to change information if we believe the
                change would violate any law or legal requirement or cause the
                information to be incorrect. Residents of certain states may
                have additional personal information rights and choices. Please
                see Your State Privacy Rights for more information.
              </p>
              <h6>Your State Privacy Rights</h6>
              <p>
                State consumer privacy laws may provide their residents with
                additional rights regarding our use of their personal
                information.
                <br /> California, Colorado, Connecticut, Delaware, Florida,
                Indiana, Iowa, Montana, Oregon, Tennessee, Texas, Utah, and
                Virginia provide (now or in the future) their state residents
                with rights to:
                <ul>
                  <li>
                    Confirm whether we process their personal information.
                  </li>
                  <li> Access and delete certain personal information. </li>
                  <li>
                    Correct inaccuracies in their personal information, taking
                    into account the information's nature processing purpose
                    (excluding Iowa and Utah).{" "}
                  </li>
                  <li> Data portability.</li>
                  <li>
                    {" "}
                    Opt-out of personal data processing for:
                    <li> targeted advertising (excluding Iowa); </li>
                    <li>sales; or</li>
                    <li>
                      {" "}
                      profiling in furtherance of decisions that produce legal
                      or similarly significant effects (excluding Iowa and Utah)
                      Either limit (opt-out of) or require consent to process
                      sensitive personal data.
                    </li>
                  </li>
                </ul>
                The exact scope of these rights may vary by state.
              </p>
              <h6>Data Security</h6>
              <p>
                We have implemented measures designed to secure your personal
                information from accidental loss and from unauthorized access,
                use, alteration, and disclosure. Unfortunately, the transmission
                of information via the internet is not completely secure.
                Although we do our best to protect your personal information, we
                cannot guarantee the security of your personal information
                transmitted to our Website. Any transmission of personal
                information is at your own risk. We are not responsible for
                circumvention of any privacy settings or security measures
                contained on the Website.
              </p>
              <h6>Changes to Our Privacy Policy</h6>
              <p>
                It is our policy to post any changes we make to our privacy
                policy on this page. If we make material changes to how we treat
                our users' personal information, we will notify you by email to
                the email address specified in your account or through a notice
                on the Website home page. The date the privacy policy was last
                revised is identified at the top of the page. You are
                responsible for ensuring we have an up-to-date active and
                deliverable email address for you, and for periodically visiting
                our Website and this privacy policy to check for any changes.
              </p>
              <h6>Contact Information</h6>
              <p>
                To ask questions or comment about this privacy policy and our
                privacy practices, contact us at: <span>admin@palynx.com</span>
              </p>
            </div>
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
export default Privacy;
