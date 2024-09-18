import React, { useContext, useState } from "react";
import CartItem from "./CartItem";
import { CartContext } from "./CartProvider";
import "../css/CheckoutPage.css";

const CheckoutPage = () => {
  const { cartContents, calculateTotal } = useContext(CartContext);

  return (
    <div className="pt-5 d-flex flex-column align-items-center">
      <h2>Cart Summary</h2>
      {cartContents.contents === 0 ? (
        <div>
          <h4>Your cart is empty</h4>
        </div>
      ) : (
        <table className="cart-summary table mb-1 border">
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Item Total</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(cartContents)
              .filter(([key]) => key !== "contents")
              .map(([productId, product]) => (
                <CartItem
                  key={productId}
                  name={product.name}
                  price={product.price}
                  quantity={product.quantity}
                />
              ))}
            <tr>
              <td colSpan="3" className="text-end">
                Cart Total:
              </td>
              <td>${calculateTotal(cartContents)}</td>
            </tr>
          </tbody>
        </table>
      )}
      <a className="btn checkout-button mt-2 mb-2 fs-5" href="/checkout">
        Checkout
      </a>
    </div>
  );
};

export default CheckoutPage;
