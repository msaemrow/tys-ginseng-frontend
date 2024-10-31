import React, { useContext, useState, useEffect } from "react";
import Product from "./Product";
import ProductList from "../assets/products.js";
import GinsengApi from "../apiGinsengAPI/api";
import { Helmet } from "react-helmet-async";
import "../css/ProductList.css";
import { CartContext } from "./CartProvider";
import logo from "../assets/TysGinsengLogo.png";

const BulkProductList = () => {
  const { cartContents, isCartShowing } = useContext(CartContext);
  const [products, setProducts] = useState(ProductList);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       let productList = await GinsengApi.getAllProducts();
  //       setProducts(productList.products);
  //       console.log("products", products);
  //     } catch (err) {
  //       console.error("Error fetching products", err);
  //     }
  //   };
  //   fetchProducts();
  // }, []);

  return (
    <div className="pt-5">
      <Helmet>
        <title>Ty's Ginseng | Bulk Roots</title>
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
          content="Discover premium woods grown Ginseng and its benefits. Visit us at the Minneapolis Farmers Market."
        />
        <meta property="og:image" content={logo} />
      </Helmet>
      <h2 className="Products-title">Roots by the Pound </h2>
      <div className="d-flex flex-wrap justify-content-center">
        {products
          .filter(
            (product) =>
              (product.type === "BULK" || product.type === "ROOTLET") &&
              product.listed_on_site === true
          )
          .map((product) => (
            <Product
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              description={product.description}
              servings={product.servings}
              url={product.image_url}
              type={product.type}
            />
          ))}
      </div>
    </div>
  );
};

export default BulkProductList;
