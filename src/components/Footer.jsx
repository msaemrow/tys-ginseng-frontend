import React from "react";
import "../css/Footer.css";
import Logo from "../assets/TysGinsengLogo.png";

const Footer = () => {
  return (
    <div className="Footer pt-3 mb-3">
      <h2>Ty's Ginseng</h2>
      <img className="Footer-logo" src={Logo} />
      <h5>Contact Us</h5>
      <h6>Phone: ###-###-####</h6>
      <h6>Email: tysginseng@gmail.com</h6>
      <h6>Follow Us</h6>
      <div>
        <span>
          <i className="fa-brands fa-instagram"></i> Instgram: tysginseng
        </span>
      </div>
      <div>
        <span>
          <i className="fa-brands fa-facebook"></i> Facebook: Ty's Ginseng
        </span>
      </div>
    </div>
  );
};

export default Footer;
