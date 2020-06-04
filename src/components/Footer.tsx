import React from "react";

import { FaTwitter, FaFacebookSquare, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer--row__main">
        <div className="footer--column footer--column__centered">
          <img
            src="/images/HMG-Logo-Web.png"
            alt="Hopkins Marketing Logo"
            className="footer--image"
          />
        </div>
        <div className="footer--column">
          <div className="footer--link__container">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="footer--link"
              style={{ paddingRight: "10px" }}
            >
              <FaFacebookSquare size={22} className="footer--icon" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="footer--link"
              style={{ padding: "0px 10px" }}
            >
              <FaTwitter size={22} className="footer--icon" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="footer--link"
              style={{ paddingLeft: "10px" }}
            >
              <FaInstagram size={22} className="footer--icon" />
            </a>
          </div>
          <p>Ph: 027312313123</p>
          <p>Email: hopkinsmarketing@gmail.com</p>
        </div>
      </div>
      {/* <div className="footer--row__sub">
        <div className="footer--column footer--column__centered">
          <span className="border-top">
            Copyright © 2020 Hopkins Marketing Group | All Rights Reserved.
          </span>
        </div>
      </div> */}
    </div>
  );
};

export default Footer;
