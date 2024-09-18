import React, { useContext } from "react";
import { CartContext } from "./CartProvider";
import Logo from "../assets/TysGinsengLogo.png";
import "../css/Navbar.css";

const NavBar = () => {
  const {
    cartContents,
    isCartShowing,
    toggleIsCartShowing,
    removeFromCart,
    addToCart,
  } = useContext(CartContext);

  const handleClickCartBtn = (e) => {
    toggleIsCartShowing();
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

  return (
    <nav className="navbar pb-0 pt-1 navbar-expand-sm navbar-light fixed-top">
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
              <button
                className="btn btn-link nav-link"
                onClick={handleClickCartBtn}
              >
                <i className="fa-solid fa-cart-shopping"></i> (
                {cartContents.contents})
              </button>
              {isCartShowing && (
                <ul className="dropdown-menu show custom-dropdown">
                  {cartContents.contents === 0 ? (
                    <li className="dropdown">Cart is empty</li>
                  ) : (
                    Object.entries(cartContents)
                      .filter(([key]) => key !== "contents")
                      .map(([productId, product]) => (
                        <li key={productId} className="dropdown-item pt-2 pb-2">
                          <p className="m-0 fw-bold">
                            {product.name}
                            <button
                              className="btn btn-secondary pt-0 pb-0 ps-2 pe-2 m-1 border rounded-5"
                              onClick={() => handleRemoveFromCart(productId)}
                            >
                              -
                            </button>
                            <button
                              className="btn btn-secondary pt-0 pb-0 ps-2 pe-2 m-1 border rounded-5"
                              onClick={() => handleIncrementCartItem(productId)}
                            >
                              +
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
                  <li className="d-flex justify-content-center">
                    <a className="btn checkout-button m-2" href="/checkout">
                      View Cart
                    </a>
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
