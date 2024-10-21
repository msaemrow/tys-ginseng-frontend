import React, { useEffect, useState } from "react";
<<<<<<< HEAD
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
=======
import { useParams, useNavigate } from "react-router-dom";
import GinsengApi from "../../apiGinsengAPI/api";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "../../css/Admin/ProductPage.css";

const ProductPage = () => {
  const navigate = useNavigate();
  const { barcode } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await GinsengApi.getProduct(barcode);
      setProduct(response.product);
    };

    fetchProduct();
  }, [barcode]);

  const handleClickEditBtn = () => {
    navigate(`/admin/product/update/${barcode}`);
  };

  const handleClickAdminHomeBtn = () => {
    navigate(`/admin/homepage`);
  };

  const handleDeleteProduct = () => {
    if (!window.confirm("Are you sure you want to delete this product?")) {
      return;
    }
    GinsengApi.deleteProduct(barcode);
    navigate("/admin/homepage");
    toast.success(`${product.barcode} deleted from inventory`);
  };

  return (
    <div className="pt-5 pb-4 d-flex flex-column align-items-center">
      <ToastContainer position="top-center" autoClose={2000} />

      <div className="header-content d-flex justify-content-center align-items-center">
        <h1>Full Product Details</h1>
        <button
          className="ms-4  btn btn-secondary"
          onClick={handleClickEditBtn}
        >
          Edit Product
        </button>
        <button
          className="ms-4  btn btn-secondary"
          onClick={handleClickAdminHomeBtn}
        >
          Admin Homepage
        </button>
      </div>
      {product ? (
        <div className="main-div d-flex justify-content-center align-items-center pe-4 ps-4">
          <div className="me-4 d-flex flex-column align-items-center">
            <div className="top-content-div d-flex justify-content-between">
              <div className="ms-5 me-5">
                <p>
                  <span className="fw-bold">Name: </span>
                  {product.name}
                </p>
                <p>
                  {" "}
                  <span className="fw-bold">Barcode: </span>
                  {product.barcode}
                </p>
                <p>
                  <span className="fw-bold">Listed on Website: </span>
                  {product.listed_on_site === true ? "Yes" : "No"}
                </p>
                <p>
                  <span className="fw-bold">Product Type: </span>
                  {product.type}
                </p>
                <p>
                  {" "}
                  <span className="fw-bold">Product Weight: </span>
                  {product.weight}
                </p>
              </div>
              <div>
                <p>
                  <span className="fw-bold">Regular Price: </span>{" "}
                  {product.price}
                </p>
                <p>
                  <span className="fw-bold">Sale Price: </span>
                  {product.sale_price}
                </p>
                <p>
                  <span className="fw-bold">On Sale: </span>
                  {product.on_sale ? "Yes" : "No"}
                </p>
                <p>
                  <span className="fw-bold">Best Seller: </span>
                  {product.best_seller === true ? "Yes" : "No"}
                </p>
                <p>
                  {" "}
                  <span className="fw-bold">Quantity Available: </span>
                  {product.quantity}
                </p>
              </div>
            </div>
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
          </div>
          <img
            src={product.image_url}
            alt={product.name}
            className="ms-4 rounded"
          />
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
      <button onClick={handleDeleteProduct} className="btn btn-danger">
        Delete Product
      </button>
>>>>>>> main
    </div>
  );
};

export default ProductPage;
