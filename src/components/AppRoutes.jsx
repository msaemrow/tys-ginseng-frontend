import React from "react";
import { Route, Routes, Navigate } from "react-router";
import Homepage from "./Homepage";
import ProductList from "./ProductList";
import PictureList from "./PictureList";
import CheckoutPage from "./CheckoutPage";
import "../css/AppRoutes.css";

const AppRoutes = () => {
  return (
    <div className="AppRoutes pt-4">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/pictures" element={<PictureList />} />
        <Route path="checkout" element={<CheckoutPage />} />
        {/* catch all route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
