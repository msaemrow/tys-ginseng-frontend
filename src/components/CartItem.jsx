import React, { useContext } from "react";
import { CartContext } from "./CartProvider";

const CartItem = ({ product, id, name, price, quantity }) => {
  const { removeFromCart, addToCart } = useContext(CartContext);

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const handleIncrementCartItem = (productId, product) => {
    addToCart(productId, product);
  };

  return (
    <tr>
      <td className="text-center">{product.name}</td>
      <td className="text-center">${product.price / 100}</td>
      <td className="text-center">
        <button
          className="btn pt-0 pb-0 ps-2 pe-2 ms-1"
          onClick={() => handleRemoveFromCart(product.sku)}
        >
          <i className="fa-solid fa-minus"></i>
        </button>
        {quantity}{" "}
        <button
          className="btn pt-0 pb-0 ps-2 pe-2"
          onClick={() => handleIncrementCartItem(product.sku, product)}
        >
          <i className="fa-solid fa-plus"></i>
        </button>
      </td>
      <td className="text-center">
        ${(product.price * product.quantity) / 100}
      </td>
    </tr>
  );
};

export default CartItem;
