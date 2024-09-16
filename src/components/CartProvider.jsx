import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const emptyCart = { contents: 0 };

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
  };

  const removeFromCart = (productId) => {
    setCartContents((prevCart) => {
      const newCart = { ...prevCart };

      if (newCart[productId]) {
        if (newCart[productId].quantity > 1) {
          newCart[productId].quantity -= 1;
        } else {
          delete newCart[productId];
        }
      }

      return newCart;
    });
  };

  return (
    <CartContext.Provider value={{ cartContents, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
