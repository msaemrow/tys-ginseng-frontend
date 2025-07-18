import React, { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const emptyCart = { contents: 0 };

  const [isCartShowing, setIsCartShowing] = useState(false);
  const [cartContents, setCartContents] = useState(() => {
    const storedCart = localStorage.getItem("cartContents");
    try {
      return storedCart ? JSON.parse(storedCart) : emptyCart;
    } catch (e) {
      // Handle the case where JSON.parse fails
      console.error("Failed to parse cartContents from localStorage", e);
      return emptyCart;
    }
  });

  useEffect(() => {
    localStorage.setItem("cartContents", JSON.stringify(cartContents));
  }, [cartContents]);

  const addToCart = (sku, product) => {
    setCartContents((prevCart) => {
      const newCart = { ...prevCart };

      if (newCart[sku]) {
        newCart[sku] = {
          ...newCart[sku],
          quantity: newCart[sku].quantity + 1,
        };
      } else {
        newCart[sku] = {
          ...product,
          quantity: 1,
        };
      }
      newCart.contents += 1;

      return newCart;
    });
    toast.success(`${product.name} added to cart!`);
  };

  const removeFromCart = (sku, product) => {
    let itemWasRemoved = false;

    setCartContents((prevCart) => {
      const newCart = { ...prevCart };

      if (newCart[sku]) {
        if (newCart[sku].quantity > 1) {
          newCart[sku] = {
            ...newCart[sku],
            quantity: newCart[sku].quantity - 1,
          };
        } else {
          delete newCart[sku];
        }

        newCart.contents = Object.values(newCart)
          .filter((item) => item.quantity)
          .reduce((total, item) => total + item.quantity, 0);

        itemWasRemoved = true; // this is still useful for dev debugging
      }

      return newCart;
    });

    // Always show the toast when this function is *called*
    // (since item exists if you're triggering the function)
    toast.warn(`${product?.name || "Item"} removed from cart!`);
  };

  const clearCart = () => {
    setCartContents(emptyCart);
  };

  const toggleIsCartShowing = () => {
    if (isCartShowing) {
      setIsCartShowing(false);
    } else {
      setIsCartShowing(true);
    }
  };

  const calculateTotal = (cartContents) => {
    return Object.values(cartContents).reduce((acc, el) => {
      if (el.price && el.quantity) {
        acc += (el.price / 100) * el.quantity;
      }
      return acc;
    }, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartContents,
        addToCart,
        removeFromCart,
        isCartShowing,
        toggleIsCartShowing,
        calculateTotal,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
