import React, { useContext, useState, useEffect } from "react";
import Product from "./Product";
import productsArr from "../assets/products";
import GinsengApi from "../apiGinsengAPI/api";
import { Helmet } from "react-helmet-async";
import "../css/ProductList.css";
import { CartContext } from "./CartProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../assets/TysGinsengLogo.png";

const ProductList = () => {
  const { cartContents, isCartShowing } = useContext(CartContext);
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let productList = await GinsengApi.getAllProducts();
        console.log("✅ Response from API:", productList.products[8].item_data);

        setProducts(productList.products);
        setIsLoading(false);
      } catch (err) {
        console.error("Error fetching products", err);
      }
    };
    fetchProducts();
  }, []);

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
      <h2 className="Products-title">Ginseng Products </h2>
      {isLoading ? (
        <div className="spinner-div d-flex align-items-center justify-content-center">
          <div className="spinner-border text-warning " role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="d-flex flex-wrap justify-content-center">
          {products
            .filter((product) => product.item_data?.product_type === "REGULAR")
            .map((product) => {
              const itemData = product.item_data;
              const variation = itemData.variations?.[0]?.item_variation_data;

              return (
                <Product
                  key={product.id}
                  id={product.id}
                  sku={variation?.sku}
                  name={itemData.name}
                  price={variation?.price_money?.amount}
                  description={itemData.description_plaintext}
                  imageUrls={product.image_urls || []} // use joined image URLs here
                  type={itemData.product_type}
                  ecomUri={itemData.ecom_uri}
                  category={product.category.name}
                />
              );
            })}
        </div>
      )}
    </div>
  );
};

export default ProductList;
