import React, { useContext } from "react";
import { CartContext } from "./CartProvider";

const CartItem = ({ id, name, price, quantity }) => {
  const { removeFromCart, addToCart } = useContext(CartContext);

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const handleIncrementCartItem = (productId) => {
    addToCart(productId);
  };

  return (
    <tr>
      <td>{name}</td>
      <td>${price}</td>
      <td>
        x{quantity}{" "}
        <button
          className="btn pt-0 pb-0 ps-2 pe-2 ms-1"
          onClick={() => handleRemoveFromCart(id)}
        >
          <i className="fa-solid fa-minus"></i>
        </button>
        <button
          className="btn pt-0 pb-0 ps-2 pe-2"
          onClick={() => handleIncrementCartItem(id)}
        >
          <i className="fa-solid fa-plus"></i>
        </button>
      </td>
      <td className="text-center">${price * quantity}</td>
    </tr>
  );
};

export default CartItem;
