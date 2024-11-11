import React from "react";
import { Link } from "react-router-dom";
import "../css/Footer.css";
import Logo from "../assets/TysGinsengLogo.png";
import SmallLogo from "../assets/TysGinsengLogo.webp";

const Footer = () => {
  return (
    <div className="Footer pt-3 mb-3 pb-3">
      <h4 className="fs-2">Ty's Ginseng</h4>
      <img className="Footer-logo" src={Logo} alt="Ty's Ginseng Logo" />
      <h5>Contact Us</h5>
      <p className="m-0">Phone: 507-384-2390</p>
      <p className="m-0">Email: tylersaemrow@gmail.com</p>
      <h5 className="mt-2 mb-0">Follow Us</h5>
      <div>
        <span>
          <a
            href="https://www.instagram.com/tysginseng/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-links"
          >
            <i className="fa-brands fa-instagram"></i> Instagram: tysginseng
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
      <Link className="pb-4 admin-link" to="/admin-login">
        Admin Login
      </Link>
    </div>
  );
};

export default Footer;
