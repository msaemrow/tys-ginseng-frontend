import React, { useContext } from "react";
import { CartContext } from "./CartProvider";
import "../css/Product.css";

const Product = ({ id, name, price, description, servings, url, type }) => {
  const { addToCart, cartContents, isCartShowing } = useContext(CartContext);

  const handleAddToCart = () => {
    console.log("Adding to cart", id);
    const product = { id, name, price, url };
    addToCart(id, product);
  };

  const viewCart = () => {
    console.log(cartContents);
    console.log(isCartShowing);
  };
  return (
    <div className="Product d-flex flex-wrap flex-column border border-dark rounded m-3 p-2 w-25 justify-content-start align-items-center">
      <h3>{name}</h3>
      <div className="Product-footer mt-auto text-center">
        {type === "SINGLE" ? <p>Servings: {servings}</p> : null}
        <p>{description}</p>
        <img
          className="Product-image rounded"
          src={url}
          alt={`picture of ${name}`}
        />
        <h3 className="mt-2 mb-0">${price}</h3>
        {type === "SINGLE" ? (
          <button className="btn add-to-cart-btn m-2" onClick={handleAddToCart}>
            Add to cart
          </button>
        ) : type === "BULK" ? (
          <>
            <p className="contact-pricing mt-2">
              Contact for availability and shipping
            </p>
            <p> ###-###-####</p>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Product;
