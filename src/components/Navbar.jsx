import React, { useContext } from "react";
import { CartContext } from "./CartProvider";
import Logo from "../assets/TysGinsengLogo.png";
import "../css/Navbar.css";

const NavBar = () => {
  const { cartContents } = useContext(CartContext);

  return (
    <nav className="navbar pb-0 pt-1 navbar-expand-md navbar-light bg-light fixed-top">
      <div className="container">
        {/* Brand name or logo */}
        <a className="navbar-brand" href="/">
          <img className="navbar-logo" src={Logo} />
        </a>
        {/* Toggle button for mobile view */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Collapsible navigation links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/products">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/pictures">
                Pictures
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Resources
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Cart ({cartContents.contents})
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
