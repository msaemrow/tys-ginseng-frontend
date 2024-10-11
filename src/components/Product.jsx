import React, { useContext } from "react";
import { CartContext } from "./CartProvider";
import "../css/Product.css";
import BestSeller from "../assets/bestSeller.png";

const Product = ({
  barcode,
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
  best_seller,
}) => {
  const { addToCart, cartContents, isCartShowing, jarsRemaining } =
    useContext(CartContext);

  const handleAddToCart = () => {
    const cost = on_sale ? sale_price : price;
    const product = { barcode, name, cost, url, weight };
    addToCart(barcode, product);
  };

  const viewCart = () => {
    console.log(cartContents);
    console.log(isCartShowing);
  };
  return (
    <div className="Product d-flex flex-wrap flex-column border border-dark rounded m-3 p-2 w-25 justify-content-start align-items-center">
      <h3>{name}</h3>
      {best_seller ? (
        <img
          src={BestSeller}
          alt="best selling product"
          className="best-seller"
        />
      ) : null}

      <div className="Product-footer mt-auto text-center">
        <img
          className="Product-image img-thumbnail rounded mb-2"
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
      </div>
    </div>
  );
};

export default Product;
