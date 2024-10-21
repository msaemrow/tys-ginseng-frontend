import "./App.css";
import React from "react";
import { HelmetProvider } from "react-helmet-async";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./components/AppRoutes";
import { CartProvider } from "./components/CartProvider";
import { UserProvider } from "./components/UserProvider";

function App() {
  return (
    <>
      <HelmetProvider>
        <CartProvider>
          <UserProvider>
            <NavBar />
            <AppRoutes />
            <Footer />
          </UserProvider>
        </CartProvider>
      </HelmetProvider>
    </>
  );
}

export default App;
