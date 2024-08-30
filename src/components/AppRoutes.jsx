import { Route, Routes, Navigate } from "react-router";
import Homepage from "./Homepage";
import ProductList from "./ProductList";
import "../css/AppRoutes.css";

const AppRoutes = () => {
  return (
    <div className="AppRoutes">
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/products" element={<ProductList />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
