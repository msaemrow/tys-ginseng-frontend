import React from "react";
import { Route, Routes, Navigate } from "react-router";
import ScrollToTop from "./ScrollToTop";
import Homepage from "./Homepage";
import ProductList from "./ProductList";
import BulkProductList from "./BulkProductList";
import PictureList from "./PictureList";
import HowToUse from "./HowToUse";
import Testimonials from "./Testimonials";
import OurProcess from "./OurProcess";
import CheckoutPage from "./CheckoutPage";
import OrderConfirmation from "./OrderConfirmation";
import AdminHomepage from "./Admin/AdminHomepage";
import NewProductPage from "./Admin/NewProductPage";
import UpdateProductPage from "./Admin/UpdateProductPage";
import ProductPage from "./Admin/ProductPage";
import AdminLogin from "./Admin/AdminLogin";
import AdminRoute from "./AdminRoute";
import UnauthorizedPage from "./Admin/UnauthorizedPage";
import ProductSpecial from "./ProductSpecial";
import "../css/AppRoutes.css";

const AppRoutes = () => {
  return (
    <div className="AppRoutes pt-4">
      <ScrollToTop />
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products-bulk" element={<BulkProductList />} />
        <Route path="/products/deals" element={<ProductSpecial />} />
        <Route path="/pictures" element={<PictureList />} />
        <Route path="/recipes" element={<HowToUse />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/our-process" element={<OurProcess />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
        <Route path="/unauthorized" element={<UnauthorizedPage />} />
        <Route path="/admin-login" element={<AdminLogin />} />

        {/* Admin protected routes */}
        <Route
          path="/admin/homepage"
          element={
            <AdminRoute>
              <AdminHomepage />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/product/new"
          element={
            <AdminRoute>
              <NewProductPage />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/product/update/:barcode"
          element={
            <AdminRoute>
              <UpdateProductPage />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/product/:barcode"
          element={
            <AdminRoute>
              <ProductPage />
            </AdminRoute>
          }
        />

        {/* catch all route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
