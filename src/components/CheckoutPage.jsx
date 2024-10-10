import React, { useContext, useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { CartContext } from "./CartProvider";
import GinsengApi from "../squareAPI/api";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../css/CheckoutPage.css";
import LoadingOverlay from "./LoadingOverlay";
import LoadingSquareCheckout from "./LoadingSquareCheckout";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { cartContents, calculateTotal, clearCart } = useContext(CartContext);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const calculateShippingCost = () => {
    const totalOrderWeight = Object.entries(cartContents)
      .filter(([key]) => key !== "contents")
      .map(([productID, product]) => product.quantity * product.weight)
      .reduce((total, weight) => total + weight, 0);

    if (totalOrderWeight <= 4.0) {
      return 500;
    } else if (totalOrderWeight > 4 && totalOrderWeight < 8) {
      return 800;
    } else if (totalOrderWeight > 8 && totalOrderWeight < 12) {
      return 1200;
    } else if (totalOrderWeight > 12 && totalOrderWeight < 16) {
      return 1600;
    } else {
      return 2000;
    }
  };

  const clearCartAfterCheckout = () => {
    clearCart();
  };

  const returnToProducts = () => {
    navigate("/products");
  };

  const handleCheckout = async () => {
    setIsLoading(true);

    try {
      const shippingCost = calculateShippingCost(cartContents);
      const squareCheckoutItems = Object.entries(cartContents)
        .filter(([key]) => key !== "contents")
        .map(([productId, product]) => ({
          name: product.name,
          price: product.cost * 100, // Ensure price is in cents
          quantity: product.quantity,
        }));

      // Retry logic in case of network issues
      const checkoutUrl = await retryAsync(() =>
        GinsengApi.generateCheckoutUrl(squareCheckoutItems, shippingCost)
      );

      if (checkoutUrl && checkoutUrl.url) {
        // Navigate to the checkout URL
        window.location.href = checkoutUrl.url;
        // Optionally clear the cart after checkout
        // clearCartAfterCheckout();
      } else {
        // If the URL response is invalid, show an error message
        toast.error(
          `There was an error processing your cart. Invalid URL received. Please try again later.`
        );
        console.error("Invalid checkout URL response", checkoutUrl);
        setIsLoading(false);
      }
    } catch (error) {
      // General error handling
      toast.error(
        `There was an error processing your cart. Please try again later. Error details: ${error.message}`
      );
      console.error("Error generating checkout URL", error);
      setIsLoading(false);
    }
  };

  // Helper function to add retry logic
  const retryAsync = async (fn, retries = 3, delay = 1000) => {
    for (let i = 0; i < retries; i++) {
      try {
        return await fn();
      } catch (error) {
        if (i === retries - 1) throw error; // Last attempt, throw error
        await new Promise((resolve) => setTimeout(resolve, delay)); // Wait before retrying
      }
    }
  };
  return (
    <div className="checkout-page pt-5 d-flex flex-column align-items-center">
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
      <ToastContainer position="top-center" autoClose={10000} />

      {isLoading && <LoadingOverlay />}

      {cartContents.contents === 0 ? (
        <div className="checkout-page-empty mb-5">
          <h2>Cart Summary</h2>
          <h4>Your cart is empty</h4>
          <Link className="btn checkout-button mt-2 mb-5 fs-5" to="/products">
            Go to products
          </Link>
        </div>
      ) : (
        <div className="checkout-page-contains-items">
          <h2>Cart Summary</h2>
          <div className="p-2">
            <table className="cart-summary table table-striped table-bordered mb-1">
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
                      price={product.cost}
                      quantity={product.quantity}
                    />
                  ))}
                <tr>
                  <td colSpan="3" className="text-end">
                    Shipping:
                  </td>
                  <td className="text-center">
                    ${calculateShippingCost() / 100}
                  </td>
                </tr>
                <tr>
                  <td colSpan="3" className="text-end">
                    Cart Total:
                  </td>
                  <td className="text-center">
                    $
                    {calculateTotal(cartContents) +
                      calculateShippingCost() / 100}
                  </td>
                </tr>
              </tbody>
            </table>
            <button
              className="btn checkout-button mt-2 mb-2 fs-5"
              onClick={handleCheckout}
              disabled={isLoading}
            >
              {isLoading ? "Processing cart items..." : "Checkout"}
            </button>
            <button
              className="btn checkout-button ms-4 mt-2 mb-2 fs-5"
              onClick={returnToProducts}
              disabled={isLoading}
            >
              {isLoading ? "Processing cart items..." : "Keep Shopping"}
            </button>
            <p>
              You will be redirected to a secure Square checkout page upon
              clicking checkout.
            </p>
            <p>
              *All orders are shipped via USPS and have an estimated 3-5 day
              ship time.
            </p>
            <p>
              **Due to this being a consumable product, all sales are final and
              returns will not be issued.
            </p>
            <p>
              If you need special arrangements, please email or call the number
              at the bottom of the page and we can discuss your options.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
