import "./App.css";
import React from "react";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./components/AppRoutes";
import { CartProvider } from "./components/CartProvider";

function App() {
  return (
    <>
      <CartProvider>
        <NavBar />
        <AppRoutes />
        <Footer />
      </CartProvider>
    </>
  );
}

export default App;
