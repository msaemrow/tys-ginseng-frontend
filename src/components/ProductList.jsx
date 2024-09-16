import React from "react";
import products from "../assets/products";
import Product from "./Product";
import "../css/ProductList.css";

const ProductList = () => {
  return (
    <div className="pt-5">
      <h1 className="Products-title">PRODUCTS</h1>
      <div className="d-flex flex-wrap justify-content-center">
        {products.map((product) => (
          <Product
            key={product.id}
            name={product.name}
            description={product.description}
            servings={product.servings}
            url={product.image_url}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
