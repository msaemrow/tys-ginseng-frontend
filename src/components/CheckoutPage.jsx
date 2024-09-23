import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import CartItem from "./CartItem";
import { CartContext } from "./CartProvider";
import GinsengApi from "../squareAPI/api";
import "../css/CheckoutPage.css";

const CheckoutPage = () => {
  const { cartContents, calculateTotal, clearCart } = useContext(CartContext);
  const [isLoading, setIsLoading] = useState(false);

  const createLink = async () => {
    const squareCheckoutItems = Object.entries(cartContents)
      .filter(([key]) => key !== "contents")
      .map(([productId, product]) => ({
        name: product.name,
        price: product.price * 100,
        quantity: product.quantity,
      }));

    const checkoutUrl = await GinsengApi.generateCheckoutUrl(
      squareCheckoutItems
    );
  };

  const clearCartAfterCheckout = () => {
    clearCart();
  };

  const handleCheckout = async () => {
    setIsLoading(true); // Show loading state during API call
    try {
      const squareCheckoutItems = Object.entries(cartContents)
        .filter(([key]) => key !== "contents")
        .map(([productId, product]) => ({
          name: product.name,
          price: product.price * 100,
          quantity: product.quantity,
        }));

      const checkoutUrl = await GinsengApi.generateCheckoutUrl(
        squareCheckoutItems
      );
      if (checkoutUrl.url) {
        window.location.href = checkoutUrl.url; // Redirect to the payment link
      } else {
        console.error("Invalid response format", checkoutUrl);
      }
    } catch (error) {
      console.error("Error generating checkout URL", error);
    } finally {
      clearCartAfterCheckout();
      setIsLoading(false); // Stop loading state
    }
  };

  return (
    <div className="pt-5 d-flex flex-column align-items-center">
      <Helmet>
        <title>Ty's Ginseng | Checkout</title>
        <meta name="description" content="Checkout page" />
        <meta
          name="keywords"
          content="Ginseng, Wild Simulated Ginseng, Ginseng Products, Ginseng Powder, Premium Ginseng, Bulk Ginseng, Ginseng Roots"
        />
        <meta property="og:title" content="Ty's Ginseng - Checkout" />
        <meta
          property="og:description"
          content="Discover premium Wild Simulated Ginseng and its benefits. Visit us at the Minneapolis Farmers Market."
        />
      </Helmet>
      <h2>Cart Summary</h2>
      {cartContents.contents === 0 ? (
        <div>
          <h4>Your cart is empty</h4>
          <a className="btn checkout-button mt-2 mb-2 fs-5" href="/products">
            Go to products
          </a>
        </div>
      ) : (
        <div>
          <div className="p-2 border rounded bg-warning">
            <table className="cart-summary table mb-1 border rounded">
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
                      id={productId}
                      name={product.name}
                      price={product.price}
                      quantity={product.quantity}
                    />
                  ))}
                <tr>
                  <td colSpan="3" className="text-end">
                    Shipping:
                  </td>
                  <td>$8</td>
                </tr>
                <tr>
                  <td colSpan="3" className="text-end">
                    Cart Total:
                  </td>
                  <td>${calculateTotal(cartContents) + 8}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            *All orders are shipped via USPS and have an estimated 3-5 day ship
            time.
          </p>
          <p>
            If you need special arrangements, please email or call the number at
            the bottom of the page and we can discuss your options.
          </p>
          <button
            className="btn checkout-button mt-2 mb-2 fs-5"
            onClick={handleCheckout}
            disabled={isLoading}
          >
            {isLoading ? "Generating Link..." : "Checkout"}
          </button>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
