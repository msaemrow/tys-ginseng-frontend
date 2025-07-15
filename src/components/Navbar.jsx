import React, { useState, useContext, useRef, useEffect } from "react";
import { CartContext } from "./CartProvider";
import { useNavigate } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";
import { UserContext } from "./UserProvider";
import Logo from "../assets/TysGinsengLogo.png";
import SmallLogo from "../assets/TysGinsengLogo.webp";
import "../css/Navbar.css";

const NavBar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const navigate = useNavigate();
  const {
    cartContents,
    isCartShowing,
    toggleIsCartShowing,
    removeFromCart,
    addToCart,
    clearCart,
  } = useContext(CartContext);

  const { adminUser, logout } = useContext(UserContext);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const cartRef = useRef(null);
  const cartIconRef = useRef(null);

  const handleMobileNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const handleMobileNavLinkClick = () => setIsNavCollapsed(true);

  const mobileNavigateToCheckout = () => {
    handleMobileNavLinkClick();
    navigate("/checkout");
  };

  const handleClickCartBtn = () => {
    toggleIsCartShowing();
  };

  const navigateToCheckout = () => {
    toggleIsCartShowing();
    handleMobileNavLinkClick();
    navigate("/checkout");
  };

  const handleRemoveFromCart = (productId, product) => {
    removeFromCart(productId, product);
  };

  const handleIncrementCartItem = (sku, product) => {
    addToCart(sku, product);
  };
  const calculateTotal = (cartContents) => {
    return Object.values(cartContents).reduce((acc, el) => {
      if (el.price && el.quantity) {
        acc += (el.price * el.quantity) / 100;
      }
      return acc;
    }, 0);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        cartIconRef.current &&
        !cartIconRef.current.contains(e.target) &&
        cartRef.current &&
        !cartRef.current.contains(e.target)
      ) {
        if (isCartShowing) {
          toggleIsCartShowing();
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isCartShowing, toggleIsCartShowing]);

  //HTML RETURN
  return (
    <nav className="navbar pb-1 pt-1 navbar-expand-md navbar-light fixed-top">
      <div className="container pb-0 pt-1">
        {/* Brand name or logo */}
        <NavLink
          className="navbar-brand nav-title mb-1"
          to="/"
          onClick={handleMobileNavLinkClick}
        >
          <img
            className="navbar-logo mb-0"
            src={Logo}
            alt="Ty's Ginseng Logo"
          />
          <span className="ms-2 nav-text">Ty's Ginseng</span>
        </NavLink>
        {/* Toggle button for mobile view */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleMobileNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Collapsible navigation links */}
        <div
          className={`collapse navbar-collapse ${
            isNavCollapsed ? "collapse" : ""
          }`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            {adminUser && adminUser.role === "admin" && (
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to="/admin/homepage"
                  onClick={handleMobileNavLinkClick}
                >
                  Admin Homepage
                </NavLink>
              </li>
            )}
            <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/products"
                onClick={handleMobileNavLinkClick}
              >
                Shop Ginseng
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav-link"
                to="/our-process"
                onClick={handleMobileNavLinkClick}
              >
                Our Process
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle about-us-dropdown"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Learn More
              </NavLink>
              <ul className="dropdown-menu">
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/pictures"
                    onClick={handleMobileNavLinkClick}
                  >
                    Photos
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/recipes"
                    onClick={handleMobileNavLinkClick}
                  >
                    How to Use Ginseng
                  </NavLink>
                </li>
                {/* <li>
                  <NavLink
                    className="dropdown-item"
                    to="/products/deals"
                    onClick={handleMobileNavLinkClick}
                  >
                    MN Grown Deals
                  </NavLink>
                </li> */}
                {/* Testimonials Page-- Currently demo and no real testimonials-- not on live site */}
                {/* <li>
                  <Link
                    className="dropdown-item"
                    to="/testimonials"
                    onClick={handleMobileNavLinkClick}
                  >
                    Testimonials
                  </Link>
                </li> */}

                {/* Example of a dropdown divider <li>
                  <hr className="dropdown-divider" />
                </li> */}
              </ul>
            </li>
          </ul>
          <ul
            id="cart-dropdown"
            className="navbar-nav ms-auto d-flex flex-direction-column align-items-center justify-content-center"
          >
            {!adminUser && (
              <li>
                <Link
                  className="btn navbar-buy-now-btn d-flex justify-content-center align-items-center"
                  to="/products"
                  onClick={handleMobileNavLinkClick}
                >
                  Buy Online Now
                </Link>
              </li>
            )}

            <li className="nav-item">
              {isMobile === true ? (
                <button
                  onClick={mobileNavigateToCheckout}
                  className="btn checkout-button m-2"
                >
                  {" "}
                  Go to Cart <i className="fa-solid fa-cart-shopping"></i> (
                  {cartContents.contents})
                </button>
              ) : (
                <button
                  ref={cartIconRef}
                  className="btn btn-link nav-link"
                  onClick={handleClickCartBtn}
                >
                  <i className="fa-solid fa-cart-shopping"></i> (
                  {cartContents.contents})
                </button>
              )}

              {isCartShowing && (
                <ul
                  className="dropdown-menu show custom-dropdown p-3 rounded shadow"
                  ref={cartRef}
                >
                  {cartContents.contents === 0 ? (
                    <li className="text-center text-muted small">
                      Your cart is empty
                    </li>
                  ) : (
                    Object.entries(cartContents)
                      .filter(([key]) => key !== "contents")
                      .map(([productId, product]) => (
                        <li key={productId} className="mb-3 border-bottom pb-2">
                          <p className="m-0 fw-semibold">{product.name}</p>
                          <div className="d-flex align-items-center justify-content-between mt-1">
                            <div className="d-flex align-items-center">
                              <button
                                className="btn btn-sm btn-outline-secondary me-2"
                                onClick={() =>
                                  handleRemoveFromCart(productId, product)
                                }
                              >
                                <i className="fa-solid fa-minus"></i>
                              </button>
                              <span>{product.quantity}</span>
                              <button
                                className="btn btn-sm btn-outline-secondary ms-2"
                                onClick={() =>
                                  handleIncrementCartItem(product.sku, product)
                                }
                              >
                                <i className="fa-solid fa-plus"></i>
                              </button>
                            </div>
                            <div className="fw-semibold">
                              $
                              {(
                                (product.price * product.quantity) /
                                100
                              ).toFixed(2)}
                            </div>
                          </div>
                        </li>
                      ))
                  )}

                  {cartContents.contents !== 0 && (
                    <>
                      <li className="border-top pt-2 mt-2 text-center fw-bold">
                        Subtotal: ${calculateTotal(cartContents).toFixed(2)}
                      </li>
                      <li className="text-center small text-muted">
                        (Shipping calculated at checkout)
                      </li>
                      <li className="d-flex justify-content-center mt-2">
                        <button
                          onClick={navigateToCheckout}
                          className="btn checkout-button w-100"
                        >
                          Go to Checkout
                        </button>
                      </li>
                    </>
                  )}
                </ul>
              )}
            </li>
            {adminUser && adminUser.role === "admin" && (
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link" // Ensuring it looks like a link
                  onClick={logout}
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
