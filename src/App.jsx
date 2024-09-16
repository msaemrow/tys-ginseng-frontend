import "./App.css";
import React from "react";
import NavBar from "./components/Navbar";
import AppRoutes from "./components/AppRoutes";
import { CartProvider } from "./components/CartProvider";

function App() {
  return (
    <>
      <CartProvider>
        <NavBar />
        <AppRoutes />
      </CartProvider>
    </>
  );
}

export default App;
