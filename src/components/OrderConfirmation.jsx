import React, { useContext } from "react";
import { CartContext } from "./CartProvider";

const OrderConfirmation = () => {
  const { orderId } = useContext(CartContext);
  return (
    <div className="p-5 mt-5">
      <h2 className="m-2">Your order was successful.</h2>
      <h3 className="m-3">Thank you for you order.</h3>

      <h5 className="m-3">You will receive an email receipt shortly.</h5>
      <h5 className="m-3">
        You will receive an email notification when your order ships!
      </h5>
    </div>
  );
};

export default OrderConfirmation;
