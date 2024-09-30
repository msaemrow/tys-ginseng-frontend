import React from "react";
import "../css/Footer.css";
import Logo from "../assets/TysGinsengLogo.png";

const Footer = () => {
  return (
    <div className="Footer pt-3 mb-3">
      <h2>Ty's Ginseng</h2>
      <img className="Footer-logo" src={Logo} />
      <h5>Contact Us</h5>
      <h6>Phone: 507-384-2390</h6>
      <h6>Email: tylersaemrow@gmail.com</h6>
      <h6>Follow Us</h6>
      <div>
        <span>
          <a
            href="https://www.instagram.com/tysginseng/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-links"
          >
            <i className="fa-brands fa-instagram"></i> Instgram: tysginseng
          </a>
        </span>
      </div>
      <div>
        <span>
          <a
            href="https://www.facebook.com/TysGinseng/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-links"
          >
            <i className="fa-brands fa-facebook"></i> Facebook: Ty's Ginseng
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
