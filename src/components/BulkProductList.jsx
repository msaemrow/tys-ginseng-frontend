import React, { useContext } from "react";
import products from "../assets/products";
import Product from "./Product";
import { Helmet } from "react-helmet-async";
import "../css/ProductList.css";
import { CartContext } from "./CartProvider";

const BulkProductList = () => {
  const { cartContents, isCartShowing } = useContext(CartContext);

  const viewCart = () => {
    console.log(cartContents);
    console.log(isCartShowing);
  };

  return (
    <div className="pt-5">
      <Helmet>
        <title>Ty's Ginseng | Bulk Products</title>
        <meta
          name="description"
          content="Premium Wild Simulated Ginseng Roots, Ginseng Powder and Ginseng Products."
        />
        <meta
          name="keywords"
          content="Ginseng, Wild Simulated Ginseng, Ginseng Products, Ginseng Powder, Premium Ginseng, Bulk Ginseng, Ginseng Roots, inflammation, energy, immune system, immunity, cold remedy, brain function, reduce inflammation, boost immunity"
        />
        <meta property="og:title" content="Ty's Ginseng - Products" />
        <meta
          property="og:description"
          content="Discover premium Wild Simulated Ginseng and its benefits. Visit us at the Minneapolis Farmers Market."
        />
      </Helmet>
      <h2 className="Products-title">
        Products by the pound{" "}
        {/* button to view cart contents-- for testing purposes only */}
        {/* <button className="btn view-cart-btn m-2" onClick={viewCart}>
          View cart
        </button> */}
      </h2>
      <div className="d-flex flex-wrap justify-content-center">
        {products
          .filter((product) => product.type === "BULK")
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
