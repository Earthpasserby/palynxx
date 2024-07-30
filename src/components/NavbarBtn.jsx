import React, {useState} from "react"
import { Container, Navbar, Nav, Col, Row, Accordion } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";


const NavbarBtn = () => {


 const [showIcons, setShowIcons] = useState(false);

 const toggleIcons = () => {
   setShowIcons(!showIcons);
 };


  return (
    <Nav className="icon-popup-container">
      <button className="F-btn" onClick={toggleIcons}>
        <Nav href="#donload" className="D-app">
          Download the App
        </Nav>
      </button>
      {/* <button className="btn-1 homebtn-1 mt-5" onClick={toggleIcons}>
                Download the App
              </button> */}
      {showIcons && (
        <div className="icon-popup2">
          <Link
            to="https://apps.apple.com/us/app/palynx/id6480189332"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-btn"
          >
            <button className="download-button-3">
              <i className="bi bi-apple"></i>
              <div className="text-container">App Store</div>
            </button>
          </Link>
          <Link
            to="https://play.google.com/store/apps/details?id=com.palynx.app"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-btn"
          >
            <button className="download-button-2">
              <i className="bi bi-google-play"></i>
              <div className="text-container">Google Play</div>
            </button>
          </Link>
        </div>
      )}
    </Nav>
  );
}
export default NavbarBtn