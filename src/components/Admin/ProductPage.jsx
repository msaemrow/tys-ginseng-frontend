import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import GinsengApi from "../../squareAPI/api";

const ProductPage = () => {
  const { barcode } = useParams();
  const [product, setProduct] = useState(null);

  const navigate = useNavigate();

  const clickReturnToProducts = () => {
    navigate("/admin/homepage");
  };

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
    ); // Show spinner while waiting for product data
  }

  return (
    <div className="container pt-5 d-flex flex-column align-items-start">
      <h1>{product.name} Details</h1>
      <button onClick={clickReturnToProducts}>Return to all products</button>
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
  );
};

export default ProductPage;
