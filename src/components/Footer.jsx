import { Link } from "react-router-dom";
import "../css/Footer.css";
import Logo from "../assets/TysGinsengLogo.png";
import { EMAIL_SIGN_UP_LINK } from "../constants";
import { showCookieSettings } from "../utils/cookieConsent";

const Footer = () => {
  return (
    <footer className="footer d-flex flex-column align-items-center justify-content-center py-4">
      <div className="d-flex align-items-center justify-content-between newsletter-bar">
        <p className="mb-0 fw-semibold fs-6 text-dark">Join our newsletter</p>
        <a
          href={EMAIL_SIGN_UP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-sm"
        >
          Sign Up
        </a>
      </div>
      <div className="footer-details d-flex justify-content-center align-items-center">
        <div className="footer-brand d-flex flex-column justify-content-center align-items-center h-100">
          <h4 className="fs-2">Ty&apos;s Ginseng</h4>
          <img className="footer-logo" src={Logo} alt="Ty's Ginseng Logo" />
        </div>
        <div className="divider h-100"></div>
        <div className="footer-contact d-flex flex-column justify-content-center align-items-center h-100 pt-3">
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
                <i className="fa-brands fa-facebook"></i> Facebook: Ty&apos;s Ginseng
              </a>
            </span>
          </div>
          {/* <Link className="pb-4 admin-link" to="/admin-login">
            Admin Login
          </Link> */}
        </div>
      </div>
      <div className="footer-policies">
        <p>We use Microsoft Clarity and Google Analytics to understand how visitors use our website and improve the user experience.</p>
        <nav aria-label="Legal" className="footer-policy-links">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/cookies-policy">Cookies Policy</Link>
          <button type="button" onClick={showCookieSettings}>Cookie Settings</button>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
