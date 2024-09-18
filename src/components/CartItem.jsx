import React from "react";

const CartItem = ({ name, price, quantity }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>${price}</td>
      <td>x{quantity}</td>
      <td className="text-center">${price * quantity}</td>
    </tr>
  );
};

export default CartItem;
