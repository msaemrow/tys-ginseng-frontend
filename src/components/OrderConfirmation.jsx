import React, { useContext } from "react";
import { CartContext } from "./CartProvider";

const OrderConfirmation = () => {
  const { orderId } = useContext(CartContext);
  console.log("ORDER ID", orderId);
  return (
    <div className="p-5 mt-5">
      <h3>Thank you for you order.</h3>
      <h3>Your order was successful.</h3>
      <h4>Your order number is: #{orderId}</h4>
      <h5>You will receive an email receipt shortly.</h5>
      <h5>We will work to ship your order soon!</h5>
    </div>
  );
};

export default OrderConfirmation;
