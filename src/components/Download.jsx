import React, { useState } from "react";

import { Link } from "react-router-dom";

const Download = () => {
  const [showIcons, setShowIcons] = useState(false);

  const toggleIcons = () => {
    setShowIcons(!showIcons);
  };
  return (
    <div className="icon-popup-container33">
      <button className="btn-img" onClick={toggleIcons}>
        Download the App
      </button>

      {showIcons && (
        <div className="icon-popup33">
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
    </div>
  );
};
export default Download;
