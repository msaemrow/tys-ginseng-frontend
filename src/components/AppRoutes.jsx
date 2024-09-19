import React from "react";
import { Route, Routes, Navigate } from "react-router";
import Homepage from "./Homepage";
import ProductList from "./ProductList";
import BulkProductList from "./BulkProductList";
import PictureList from "./PictureList";
import CheckoutPage from "./CheckoutPage";
import OrderConfirmation from "./OrderConfirmation";
import "../css/AppRoutes.css";

const AppRoutes = () => {
  return (
    <div className="AppRoutes pt-4">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products-bulk" element={<BulkProductList />} />
        <Route path="/pictures" element={<PictureList />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
        {/* catch all route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
