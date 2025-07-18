import React, { useContext, useEffect } from "react";
import { CartContext } from "./CartProvider";
import "../css/CartItem.css";

const CartItem = ({ product }) => {
  const { removeFromCart, addToCart } = useContext(CartContext);
  const { sku, name, price, quantity, imageUrls } = product;
  const imageUrl = imageUrls?.[0];

  const handleRemoveFromCart = () => removeFromCart(sku, product);
  const handleIncrementCartItem = () => addToCart(sku, product);

  return (
    <div className="cart-item card mb-3 p-3 d-flex flex-row align-items-center">
      <img
        src={imageUrl || "/default-product.jpg"}
        alt={name}
        className="cart-item-img me-3"
      />
      <div className="flex-grow-1">
        <h5 className="mb-1">{name}</h5>
        <p className="mb-1 text-muted">Price: ${(price / 100).toFixed(2)}</p>
        <div className="quantity-controls d-flex align-items-center">
          <button
            className="btn btn-outline-secondary btn-sm me-2"
            onClick={handleRemoveFromCart}
          >
            <i className="fa-solid fa-minus"></i>
          </button>
          <span>{quantity}</span>
          <button
            className="btn btn-outline-secondary btn-sm ms-2"
            onClick={handleIncrementCartItem}
          >
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
      <div className="text-end">
        <strong>${((price * quantity) / 100).toFixed(2)}</strong>
      </div>
    </div>
  );
};

export default CartItem;
