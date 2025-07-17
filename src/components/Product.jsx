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
  category,
  variationID,
}) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    const product = {
      id,
      sku,
      name,
      price,
      imageUrls,
      catalogObjectId: variationID,
    };
    addToCart(sku, product);
  };

  const mainImage = imageUrls[0] || null;

  return (
    <div className="product d-flex flex-column align-items-center">
      <div className="product-content text-center w-100">
        {mainImage && (
          <img
            className="product-image-top"
            src={mainImage}
            alt={`Picture of ${name}`}
          />
        )}
        <h3 className="product-name mt-2">{name}</h3>
      </div>

      <div className="product-footer text-center">
        {description && <p className="product-description">{description}</p>}

        <h3 className="product-price">${(price / 100).toFixed(2)}</h3>

        {category === "Powder" && (
          <button className="btn add-to-cart-btn m-1" onClick={handleAddToCart}>
            Add to cart
          </button>
        )}

        {category === "Bulk Roots" && (
          <a href="tel:5073842390" className="btn add-to-cart-btn m-2">
            Call to Order
          </a>
        )}
      </div>
    </div>
  );
};

export default Product;
