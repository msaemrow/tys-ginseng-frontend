import React, { useContext, useState } from "react";
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

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { cartContents, calculateTotal, clearCart } = useContext(CartContext);
  const [isLoading, setIsLoading] = useState(false);

  const calculateShippingCost = () => {
    const totalOrderWeight = Object.entries(cartContents)
      .filter(([key]) => key !== "contents")
      .map(([productID, product]) => product.quantity * product.weight)
      .reduce((total, weight) => total + weight, 0);

    if (totalOrderWeight <= 4.0) {
      return 400;
    } else if (totalOrderWeight > 4 && totalOrderWeight < 8) {
      return 800;
    } else {
      return 1200;
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
          price: product.price * 100,
          quantity: product.quantity,
        }));

      squareCheckoutItems.push({
        name: "Shipping (USPS)",
        price: shippingCost,
        quantity: 1,
      });
      const checkoutUrl = await GinsengApi.generateCheckoutUrl(
        squareCheckoutItems
      );
      if (checkoutUrl.url) {
        window.location.href = checkoutUrl.url;
        setTimeout(clearCartAfterCheckout, 3000);
      } else {
        toast.error(
          "There was an error processing your cart. Please try again. If this issue persists, please contact us to let us know."
        );
        console.error("Invalid response format", checkoutUrl);
      }
    } catch (error) {
      toast.error(
        "There was an error processing your cart. Please try again. If this issue persists, please contact us to let us know."
      );
      console.log("THERE WAS AN ERROR");
      console.error("Error generating checkout URL", error);
    } finally {
      setIsLoading(false);
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
      {cartContents.contents === 0 ? (
        <div className="checkout-page-empty">
          <h2>Cart Summary</h2>
          <h4>Your cart is empty</h4>
          <Link className="btn checkout-button mt-2 mb-2 fs-5" to="/products">
            Go to products
          </Link>
        </div>
      ) : (
        <div className="checkout-page-contains-items">
          <h2>Cart Summary</h2>
          <div className="p-2">
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
                  <td>${calculateShippingCost() / 100}</td>
                </tr>
                <tr>
                  <td colSpan="3" className="text-end">
                    Cart Total:
                  </td>
                  <td>
                    $
                    {calculateTotal(cartContents) +
                      calculateShippingCost() / 100}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <button
            className="btn checkout-button mt-2 mb-2 fs-5"
            onClick={handleCheckout}
            disabled={isLoading}
          >
            {isLoading ? "Processing cart items..." : "Checkout"}
          </button>
          {isLoading === false ? (
            <button
              className="btn checkout-button ms-4 mt-2 mb-2 fs-5"
              onClick={returnToProducts}
              disabled={isLoading}
            >
              {isLoading ? "Processing cart items..." : "Back to products"}
            </button>
          ) : (
            ""
          )}
          <p>
            *All orders are shipped via USPS and have an estimated 3-5 day ship
            time.
          </p>
          <p>
            **Due to this being a consumable product, all sales are final and
            returns will not be issued.
          </p>
          <p>
            If you need special arrangements, please email or call the number at
            the bottom of the page and we can discuss your options.
          </p>

          {/* <Link
            className="btn checkout-button ms-4 mt-2 mb-2 fs-5"
            to="/products"
          >
            Back to products
          </Link> */}
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
