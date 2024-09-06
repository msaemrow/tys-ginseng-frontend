import { Route, Routes, Navigate } from "react-router";
import Homepage from "./Homepage";
import ProductList from "./ProductList";
import "../css/AppRoutes.css";

const AppRoutes = () => {
  return (
    <div className="AppRoutes">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<ProductList />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
