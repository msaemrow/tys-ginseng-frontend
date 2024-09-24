import React, { useContext, useRef, useEffect } from "react";
import { CartContext } from "./CartProvider";
import { useNavigate } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";
import Logo from "../assets/TysGinsengLogo.png";
import "../css/Navbar.css";

const NavBar = () => {
  const navigate = useNavigate();
  const {
    cartContents,
    isCartShowing,
    toggleIsCartShowing,
    removeFromCart,
    addToCart,
    clearCart,
  } = useContext(CartContext);

  const cartRef = useRef(null);
  const cartIconRef = useRef(null);

  const handleClickCartBtn = () => {
    toggleIsCartShowing();
  };

  const navigateToCheckout = () => {
    toggleIsCartShowing();
    navigate("/checkout");
  };

  const handleClearCart = () => {
    clearCart();
  };

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const handleIncrementCartItem = (productId) => {
    addToCart(productId);
  };
  const calculateTotal = (cartContents) => {
    return Object.values(cartContents).reduce((acc, el) => {
      if (el.price && el.quantity) {
        acc += el.price * el.quantity;
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

  return (
    <nav className="navbar pb-0 pt-1 navbar-expand-md navbar-light fixed-top">
      <div className="container">
        {/* Brand name or logo */}
        <NavLink className="navbar-brand" to="/">
          <img className="navbar-logo" src={Logo} />
          <span className="ms-2">Ty's Ginseng</span>
        </NavLink>
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
              <NavLink className="nav-link" aria-current="page" to="/products">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/products-bulk"
              >
                Bulk Products
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
                About Us
              </NavLink>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" to="/our-process">
                    Our Process
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/pictures">
                    Our Ginseng
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/recipes">
                    How to use Ginseng
                  </NavLink>
                </li>
                <li>
                  <Link className="dropdown-item" to="/testimonials">
                    Testimonials
                  </Link>
                </li>

                {/* Example of a dropdown divider <li>
                  <hr className="dropdown-divider" />
                </li> */}
              </ul>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <Link
              className="btn navbar-buy-now-btn d-flex justify-content-center align-items-center"
              to="/products"
            >
              Buy Online Now
            </Link>
            <li className="nav-item">
              <button
                ref={cartIconRef}
                className="btn btn-link nav-link"
                onClick={handleClickCartBtn}
              >
                <i className="fa-solid fa-cart-shopping"></i> (
                {cartContents.contents})
              </button>
              {isCartShowing && (
                <ul
                  className="dropdown-menu show custom-dropdown"
                  ref={cartRef}
                >
                  {cartContents.contents === 0 ? (
                    <li className="dropdown text-center">Cart is empty</li>
                  ) : (
                    Object.entries(cartContents)
                      .filter(([key]) => key !== "contents")
                      .map(([productId, product]) => (
                        <li key={productId} className="dropdown-item pt-2 pb-2">
                          <p className="m-0 fw-bold">
                            {product.name}
                            <button
                              className="btn pt-0 pb-0 ps-2 pe-2 ms-1"
                              onClick={() => handleRemoveFromCart(productId)}
                            >
                              <i className="fa-solid fa-minus"></i>
                            </button>
                            <button
                              className="btn pt-0 pb-0 ps-2 pe-2"
                              onClick={() => handleIncrementCartItem(productId)}
                            >
                              <i className="fa-solid fa-plus"></i>
                            </button>
                          </p>
                          <p className="m-0">QTY: {product.quantity}</p>
                          <p className="m-0">
                            Price ${product.price * product.quantity}
                          </p>
                        </li>
                      ))
                  )}
                  <li className="cart-total border p-2 fw-bold d-flex justify-content-center">
                    Order Subtotal: ${calculateTotal(cartContents)}
                  </li>

                  <li className="d-flex justify-content-center mb-0">
                    <button
                      onClick={navigateToCheckout}
                      className="btn checkout-button m-2"
                    >
                      Go to checkout
                    </button>

                    {/* <Link className="btn checkout-button m-2" to="/checkout">
                      Go to cart
                    </Link> */}
                  </li>
                  <li className="cart-shipping-msg mt-0">
                    (Shipping calculated at checkout page)
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
