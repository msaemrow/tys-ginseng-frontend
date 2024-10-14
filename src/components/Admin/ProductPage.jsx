import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import GinsengApi from "../../squareAPI/api";
import "../../css/Admin/ProductPage.css";

const ProductPage = () => {
  const { barcode } = useParams();
  const [product, setProduct] = useState(null);

  const navigate = useNavigate();

  const clickReturnToProducts = () => {
    navigate("/admin/homepage");
  };

  //fet product data
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const fetchedProduct = await GinsengApi.getSingleProduct(barcode);
        console.log("PRODUCT", fetchedProduct.product);
        setProduct(fetchedProduct.product);
      } catch (err) {
        console.error("Error fetching product", err);
      }
    };
    fetchProduct();
  }, [barcode]);

  // Show spinner while waiting for product data
  if (!product) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container pt-5 ">
      {/* div containing header and button to return to all products */}
      <div className="d-flex justify-content-space-between align-items-center">
        <h1 className="me-3">{product.name} Details</h1>
        <button className="ms-3 h-75" onClick={clickReturnToProducts}>
          Return to all products
        </button>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        {/* div containing all product detail- left side of screen */}
        <div className="d-flex flex-column align-items-start ps-5">
          <p>
            <span className="fw-bold">Barcode: </span> {product.barcode}
          </p>
          <p>
            <span className="fw-bold">Type: </span>
            {product.type}
          </p>
          <p>
            <span className="fw-bold">Name: </span>
            {product.name}
          </p>
          <p>
            <span className="fw-bold">Price: </span>
            {product.price}
          </p>
          <p>
            <span className="fw-bold">Sale Price: </span>
            {product.sale_price}
          </p>
          <p>
            <span className="fw-bold">On Sale? </span>
            {product.on_sale ? "True" : "False"}
          </p>
          <p>
            <span className="fw-bold">Description: </span>
            {product.description}
          </p>
          <p>
            <span className="fw-bold">Servings: </span>
            {product.servings}
          </p>
          <p>
            <span className="fw-bold">Image URL: </span>
            {product.image_url}
          </p>
          <p>
            <span className="fw-bold">Product Weight: </span>
            {product.weight}
          </p>
          <p>
            <span className="fw-bold">Quantity: </span>
            {product.quantity}
          </p>
          <p>
            <span className="fw-bold">Best Seller? </span>
            {product.best_seller === true ? "True" : "False"}
          </p>
        </div>
        {/* div containing all product image- right side of screen */}
        <div>
          <img
            className="ms-5 product-image rounded"
            src={product.image_url}
            alt={product.description}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
