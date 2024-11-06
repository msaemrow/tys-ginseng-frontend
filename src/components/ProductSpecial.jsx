import React, { useContext, useState, useEffect } from "react";
// import products from "../assets/products";
import { useNavigate } from "react-router";
import Product from "./Product";
import GinsengApi from "../apiGinsengAPI/api";
import { Helmet } from "react-helmet-async";
import "../css/ProductList.css";
import { CartContext } from "./CartProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../assets/TysGinsengLogo.png";

const ProductSpecial = () => {
  const { cartContents, isCartShowing } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let productList = await GinsengApi.getAllProducts();
        setProducts(productList.products);
      } catch (err) {
        console.error("Error fetching products", err);
      }
    };
    fetchProducts();
  }, []);

  const navigateToProducts = () => {
    navigate("/products");
  };
  return (
    <div className="pt-5">
      <Helmet>
        <title>Ty's Ginseng | MN Grown Special</title>
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
      <h2 className="Products-title pt-3">MN Grown Deals </h2>
      {products.filter(
        (product) =>
          product.type === "SPECIAL" && product.listed_on_site === true
      ).length === 0 ? (
        <div className="pt-3 pb-5 mt-5">
          <h5>
            We are not running any specials at the time. Check back soon to see
            upcoming deals.
          </h5>
          <h5 className="pt-2">Click below to see our other products</h5>
          <button
            onClick={navigateToProducts}
            className="mt-2 btn btn-secondary"
          >
            See Products
          </button>
        </div>
      ) : (
        <div className="d-flex flex-wrap justify-content-center">
          {products
            .filter(
              (product) =>
                product.type === "SPECIAL" && product.listed_on_site === true
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
      )}
    </div>
  );
};

export default ProductSpecial;
