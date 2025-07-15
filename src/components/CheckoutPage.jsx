import React, { useContext, useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { CartContext } from "./CartProvider";
import SquareApi from "../apiSquareAPI/api";
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
      .map(([, product]) => {
        //Product sku contains the container size; 1075 = 0.75oz jar, 1100 = 1oz jar
        const weight = (product.sku - 1000) / 100 + 1;
        return weight * product.quantity;
      })
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
        .map(([sku, product]) => ({
          variationId: product.catalogObjectId,
          quantity: product.quantity.toString(),
        }));

      const checkoutUrl = await SquareApi.generateCheckoutUrl(
        squareCheckoutItems,
        shippingCost
      );

      if (checkoutUrl.url) {
        const isMobile = window.innerWidth < 768;
        setTimeout(() => {
          if (isMobile) {
            window.location.href = checkoutUrl.url;
          } else {
            window.open(checkoutUrl.url, "_blank");
            navigate("/");
          }
          clearCartAfterCheckout();
          setIsLoading(false);
        }, 300);
      } else {
        setIsLoading(false);
        toast.error(
          `There was an error processing your cart. Please try again. If this issue persists, please contact us to let us know.`
        );
      }
    } catch (error) {
      setIsLoading(false);
      let urlError = error;
      toast.error(
        `There was an error gathering the checkout URL. Please try again. If this issue persists, please contact us to let us know.`
      );
      console.error("Error generating checkout URL", error);
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
      <h1>Checkout</h1>
      {isLoading && <LoadingOverlay />}

      {isLoading && <LoadingOverlay />}

      {cartContents.contents === 0 ? (
        <div className="checkout-empty text-center p-5 rounded shadow-sm bg-white">
          <i className="fa-solid fa-cart-shopping fa-3x text-muted mb-3"></i>
          <h2 className="mb-3">Your cart is empty</h2>
          <p className="text-muted">
            Looks like you haven't added anything yet. Check out our ginseng
            products!
          </p>
          <Link className="btn btn-primary mt-4 fs-5 px-4 py-2" to="/products">
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="row">
          {/* Left: Product list */}
          <div className="col-md-7">
            <div className="product-list">
              {Object.entries(cartContents)
                .filter(([key]) => key !== "contents")
                .map(([, product]) => (
                  <CartItem
                    key={product.id}
                    product={product}
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    quantity={product.quantity}
                    imageUrl={product.imageUrls[0]}
                  />
                ))}
            </div>
          </div>

          {/* Right: Summary */}
          <div className="col-md-5">
            <div className="cart-summary-box p-4 shadow-sm rounded">
              <h3>Order Summary</h3>
              <div className="summary-line">
                <span>Subtotal:</span>
                <span>${calculateTotal(cartContents).toFixed(2)}</span>
              </div>
              <div className="summary-line">
                <span>Shipping:</span>
                <span>${(calculateShippingCost() / 100).toFixed(2)}</span>
              </div>
              <hr />
              <div className="summary-line total">
                <strong>Total:</strong>
                <strong>
                  $
                  {(
                    calculateTotal(cartContents) +
                    calculateShippingCost() / 100
                  ).toFixed(2)}
                </strong>
              </div>

              <button
                className="btn btn-primary w-100 my-3"
                onClick={handleCheckout}
                disabled={isLoading}
              >
                {isLoading ? "Processing..." : "Checkout"}
              </button>
              <button
                className="btn btn-outline-secondary w-100 mb-3"
                onClick={returnToProducts}
                disabled={isLoading}
              >
                Keep Shopping
              </button>

              <div className="checkout-info small text-muted">
                <p>
                  You will be redirected to a secure Square checkout page upon
                  clicking checkout.
                </p>
                <p>
                  *All orders ship via USPS and typically arrive in 3–5 business
                  days.
                </p>
                <p>
                  **Due to this being a consumable product, all sales are final.
                </p>
                <p>
                  Questions? Contact us using the info at the bottom of the
                  page.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
