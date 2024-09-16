import React from "react";
import "../css/Product.css";

const Product = ({ name, price, description, servings, url }) => {
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
      <button className="btn btn-success m-2">Add to cart</button>
    </div>
  );
};

export default Product;
