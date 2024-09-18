import React, { useContext } from "react";
import products from "../assets/products";
import Product from "./Product";
import "../css/ProductList.css";
import { CartContext } from "./CartProvider";

const ProductList = () => {
  const { cartContents, isCartShowing } = useContext(CartContext);

  const viewCart = () => {
    console.log(cartContents);
    console.log(isCartShowing);
  };

  return (
    <div className="pt-5">
      <h1 className="Products-title">
        Products{" "}
        <button className="btn view-cart-btn m-2" onClick={viewCart}>
          View cart
        </button>
      </h1>
      <div className="d-flex flex-wrap justify-content-center">
        {products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
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
