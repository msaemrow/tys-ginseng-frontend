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
          className="btn btn-secondary pt-0 pb-0 ps-2 pe-2 m-1 border rounded-5"
          onClick={() => handleRemoveFromCart(id)}
        >
          -
        </button>
        <button
          className="btn btn-secondary pt-0 pb-0 ps-2 pe-2 m-0 border rounded-5"
          onClick={() => handleIncrementCartItem(id)}
        >
          +
        </button>
      </td>
      <td className="text-center">${price * quantity}</td>
    </tr>
  );
};

export default CartItem;
