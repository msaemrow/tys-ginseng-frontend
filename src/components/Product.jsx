import React, { useContext } from "react";
import { CartContext } from "./CartProvider";
import "../css/Product.css";
import BestSeller from "../assets/bestSeller.png";

const Product = ({
  id,
  sku,
  name,
  price,
  description,
  imageUrls = [],
  type,
  ecomUri,
}) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    const product = { id, sku, name, price, imageUrls };
    addToCart(sku, product);
  };

  const mainImage = imageUrls[0] || null;

  return (
    <div className="Product d-flex flex-column border border-dark rounded m-3 p-2 w-25 justify-content-start align-items-center">
      <div className="Product-footer text-center">
        {mainImage && (
          <img
            className="Product-image img-thumbnail rounded mb-2"
            src={mainImage}
            alt={`Picture of ${name}`}
          />
        )}
        <h3>{name}</h3>
        {description && <p>{description}</p>}
        <h3 className="mt-2 mb-0">${(price / 100).toFixed(2)}</h3>

        {type === "REGULAR" ? (
          <button className="btn add-to-cart-btn m-2" onClick={handleAddToCart}>
            Add to cart
          </button>
        ) : null}

        {ecomUri && (
          <a href={ecomUri} target="_blank" rel="noopener noreferrer">
            View Product Page
          </a>
        )}
      </div>
    </div>
  );
};

export default Product;
