import React, { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const emptyCart = { contents: 0 };

  const [jarsRemaining, setJarsRemaining] = useState({ quantity: 20 });
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

  const addToCart = (productId, product) => {
    setCartContents((prevCart) => {
      const newCart = { ...prevCart };

      if (newCart[productId]) {
        newCart[productId] = {
          ...newCart[productId],
          quantity: newCart[productId].quantity + 1,
        };
      } else {
        newCart[productId] = { ...product, quantity: 1 };
      }
      newCart.contents += 1;
      return newCart;
    });
    if (productId === 1004) {
      setJarsRemaining((prevRemaining) => {
        const newRemaining = { ...prevRemaining };
        newRemaining.quantity = (newRemaining.quantity || 0) - 1;
        return newRemaining;
      });
    }
    console.log("Jars remaining", jarsRemaining);
    console.log(cartContents);
    toast.success(`${product.name} added to cart!`);
  };

  const removeFromCart = (productId) => {
    setCartContents((prevCart) => {
      const newCart = { ...prevCart };

      if (newCart[productId]) {
        if (newCart[productId].quantity > 1) {
          console.log("MULIPLE CONTENTS");
          newCart[productId] = {
            ...newCart[productId],
            quantity: newCart[productId].quantity - 1,
          };
        } else {
          console.log("SINGLE ITEM");
          delete newCart[productId];
        }

        newCart.contents = Object.values(newCart)
          .filter((item) => item.quantity)
          .reduce((total, item) => total + item.quantity, 0);

        return newCart;
      }
    });
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
      if (el.cost && el.quantity) {
        acc += el.cost * el.quantity;
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
        jarsRemaining,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
