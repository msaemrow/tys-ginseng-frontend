import React, { useContext } from "react";
import { CartContext } from "./CartProvider";
import "../css/Product.css";

const Product = ({ id, name, price, description, servings, url }) => {
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
      <p>Servings: {servings}</p>
      <p>{description}</p>
      <img
        className="Product-image rounded"
        src={url}
        alt={`picture of ${name}`}
      />
      <h3 className="mt-2 mb-0">${price}</h3>

      <button className="btn add-to-cart-btn m-2" onClick={handleAddToCart}>
        Add to cart
      </button>
    </div>
  );
};

export default Product;
