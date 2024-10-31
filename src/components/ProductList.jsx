import React, { useContext, useState, useEffect } from "react";
// import products from "../assets/products";
import Product from "./Product";
import GinsengApi from "../apiGinsengAPI/api";
import { Helmet } from "react-helmet-async";
import "../css/ProductList.css";
import ProductList from "../assets/products.js";
import { CartContext } from "./CartProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../assets/TysGinsengLogo.png";

const ProductList = () => {
  const { cartContents, isCartShowing } = useContext(CartContext);
  const [products, setProducts] = useState(ProductList);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       let productList = await GinsengApi.getAllProducts();
  //       setProducts(productList.products);
  //     } catch (err) {
  //       console.error("Error fetching products", err);
  //     }
  //   };
  //   fetchProducts();
  // }, []);

  return (
    <div className="pt-5">
      <Helmet>
        <title>Ty's Ginseng | Products</title>
        <meta
          name="description"
          content="Premium Woods Grown Ginseng Roots, Ginseng Powder and Ginseng Products."
        />
        <meta
          name="keywords"
          content="Ginseng, Woods Grown Ginseng, Ginseng Products, Ginseng Powder, Premium Ginseng, Bulk Ginseng, Ginseng Roots, inflammation, energy, immune system, immunity, cold remedy, brain function, reduce inflammation, boost immunity"
        />
        <meta property="og:title" content="Ty's Ginseng - Products" />
        <meta
          property="og:description"
          content="Discover premium Woods Grown Ginseng and its benefits. Visit us at the Minneapolis Farmers Market."
        />
        <meta property="og:image" content={logo} />
      </Helmet>
      <ToastContainer position="top-right" autoClose={2000} />
      <h2 className="Products-title">
        Ginseng Products{" "}
        {/* button to view cart contents-- for testing purposes only */}
        {/* <button className="btn view-cart-btn m-2" onClick={viewCart}>
          View cart
        </button> */}
      </h2>
      <div className="d-flex flex-wrap justify-content-center">
        {products
          .filter(
            (product) =>
              product.type === "SINGLE" && product.listed_on_site === true
          )
          .map((product) => (
            <Product
              key={product.barcode}
              barcode={product.barcode}
              name={product.name}
              price={product.price}
              sale_price={product.sale_price}
              on_sale={product.on_sale}
              description={product.description}
              servings={product.servings}
              url={product.image_url}
              type={product.type}
              weight={product.weight}
              quantity={product.quantity}
              best_seller={product.best_seller}
            />
          ))}
      </div>
    </div>
  );
};

export default ProductList;
