import React from "react";
import { Link } from "react-router-dom";
import "../css/Footer.css";
import Logo from "../assets/TysGinsengLogo.png";
import SmallLogo from "../assets/TysGinsengLogo.webp";

const Footer = () => {
  return (
    <div className="footer d-flex flex-column align-items-center justify-content-center py-4">
      <div className="d-flex align-items-center justify-content-between newsletter-bar">
        <p className="mb-0 fw-semibold fs-6 text-dark">Join our newsletter</p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfO6-44gdODdqjiBr3AJx7jqLGKolyL3I9cLwtnfjuCVm82Gg/viewform?pli=1"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-sm"
        >
          Sign Up
        </a>
      </div>
      <div className="d-flex justify-content-center align-items-center gap-4">
        <div className="d-flex flex-column justify-content-center align-items-center h-100">
          <h4 className="fs-2">Ty's Ginseng</h4>
          <img className="footer-logo" src={Logo} alt="Ty's Ginseng Logo" />
        </div>
        <div className="divider h-100"></div>
        <div className="d-flex flex-column justify-content-center align-items-center h-100 pt-3">
          <h5 className="fw-bold">Contact Us</h5>
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
          {/* <Link className="pb-4 admin-link" to="/admin-login">
            Admin Login
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
