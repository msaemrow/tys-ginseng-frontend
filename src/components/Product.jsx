import React, { useContext } from "react";
import { CartContext } from "./CartProvider";
import "../css/Product.css";

const Product = ({
  id,
  name,
  price,
  sale_price,
  on_sale,
  description,
  servings,
  url,
  type,
  weight,
  quantity,
}) => {
  const { addToCart, cartContents, isCartShowing, jarsRemaining } =
    useContext(CartContext);

  const handleAddToCart = () => {
    console.log("Adding to cart", id);
    const cost = on_sale ? sale_price : price;
    const product = { id, name, cost, url, weight };
    console.log(quantity);
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
        <img
          className="Product-image rounded mb-2"
          src={url}
          alt={`picture of ${name}`}
        />
        {type === "SINGLE" ? <p>Servings: {servings}</p> : null}
        <p>{description}</p>

        {type === "BULK" ? (
          <h3 className="mt-2 mb-0">${price} / lb</h3>
        ) : type === "ROOTLET" ? (
          <h3 className="mt-2 mb-0">${price} / rootlet</h3>
        ) : on_sale ? (
          <h3 className="mt-2 mb-0">
            <span className="on-sale me-3">${price}</span>${sale_price}
          </h3>
        ) : (
          <h3 className="mt-2 mb-0">${price}</h3>
        )}
        {type === "SINGLE" ? (
          <button className="btn add-to-cart-btn m-2" onClick={handleAddToCart}>
            Add to cart
          </button>
        ) : type === "BULK" || type === "ROOTLET" ? (
          <>
            <p className="contact-pricing mt-2">
              Contact for availability and shipping
            </p>
            <p className="m-0"> (507) 384-2390</p>
            <p className="m-0">or</p>
            <p className="m-0">tylersaemrow@gmail.com</p>
          </>
        ) : null}
        {id === 1004 ? (
          <p>Quantity remaining- {jarsRemaining.quantity}</p>
        ) : null}
      </div>
    </div>
  );
};

export default Product;
