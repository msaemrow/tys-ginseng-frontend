import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import GinsengApi from "../../apiGinsengAPI/api";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import ChangePhoto from "./ChangePhoto";
import "../../css/Admin/ProductPage.css";

const ProductPage = () => {
  const navigate = useNavigate();
  const { barcode } = useParams();
  const [product, setProduct] = useState(null);
  const [isModalShowing, setIsModalShowing] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await GinsengApi.getProduct(barcode);
      setProduct(response.product);
      console.log("Modal state:", isModalShowing);
    };

    fetchProduct();
  }, [barcode]);

  const handleClickEditBtn = () => {
    navigate(`/admin/product/update/${barcode}`);
  };

  const handleClickChangePhotoBtn = () => {
    console.log("Opening modal...");
    setIsModalShowing(true);
  };

  useEffect(() => {
    console.log("Modal state:", isModalShowing);
  }, [isModalShowing]);

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

  const handlePhotoUpdate = async (newPhotoUrl) => {
    try {
      await GinsengApi.updateProductPhoto(product.barcode, newPhotoUrl);

      setProduct((prevProduct) => ({ ...prevProduct, image_url: newPhotoUrl }));

      toast.success("Product photo updated successfully");
    } catch (error) {
      toast.error("Failed to update product photo -- Product page");
    }
  };

  return (
    <div className="pt-5 pb-4 d-flex flex-column align-items-center">
      <ToastContainer position="top-center" autoClose={2000} />
      {isModalShowing && (
        <ChangePhoto
          onClose={() => setIsModalShowing(false)}
          onSubmit={handlePhotoUpdate}
        />
      )}
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
          onClick={handleClickChangePhotoBtn}
        >
          Change Photo
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
    </div>
  );
};

export default ProductPage;
