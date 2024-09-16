import React, { useContext } from "react";
import { CartContext } from "./CartProvider";
import "../css/Product.css";

const Product = ({ id, name, price, description, servings, url }) => {
  const { addToCart, cartContents } = useContext(CartContext);

  const handleAddToCart = () => {
    console.log("Adding to cart", id);
    const product = { id, name, price, url };
    addToCart(id, product);
  };

  const viewCart = () => {
    console.log(cartContents);
  };

  return (
    <div className="d-flex flex-wrap flex-column border border-dark rounded m-3 p-4 w-25 justify-content-start align-items-center">
      <h3>{name}</h3>
      <h6>{price}</h6>
      <p>Servings: {servings}</p>
      <p>{description}</p>
      <img
        className="Product-image rounded"
        src={url}
        alt={`picture of ${name}`}
      />
      <button className="btn btn-success m-2" onClick={handleAddToCart}>
        Add to cart
      </button>
      <button className="btn btn-success m-2" onClick={viewCart}>
        View cart
      </button>
    </div>
  );
};

export default Product;
