import { useState, useEffect } from "react";
import Product from "./Product";
import productsArr from "../assets/products";
import GinsengApi from "../apiGinsengAPI/api";
import { Helmet } from "react-helmet-async";
import "../css/ProductList.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../assets/TysGinsengLogo.png";
import SkeletonProduct from "./SkeletonProduct";

const ProductList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let productList = await GinsengApi.getAllProducts();

        setProducts(productList.products);
        setIsLoading(false);
      } catch (err) {
        console.error("Error fetching products", err);
      }
    };
    fetchProducts();
  }, []);

  const categories = ["All", "Powder", "Bulk Roots", "Specials"];

  const filteredProducts = products
    .filter((product) => product.item_data?.product_type === "REGULAR")
    .filter((product) => {
      const category = product.category?.name || "Other";
      return selectedCategory === "All" || category === selectedCategory;
    });

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
      <h2 className="mb-3 text-center">Shop Ginseng Products </h2>
      <div className="d-flex  flex-column flex-md-row align-items-center gap-2 px-3 ms-md-3 ms-0 rounded">
        <h6 className="mb-0">Product Filters:</h6>
        <div className="d-flex align-items-center gap-2 ms-1 rounded">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`btn btn-sm ${
                selectedCategory === cat ? "selected-btn" : "btn-outline-dark"
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      {isLoading ? (
        <div className="container mt-1 pt-0">
          <div className="product-grid">
            {[...Array(4)].map((_, i) => (
              <SkeletonProduct key={i} />
            ))}
          </div>
        </div>
      ) : (
        <div className="container mt-1 pt-0">
          {filteredProducts.length === 0 ? (
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ minHeight: "300px" }}
            >
              <p className="text-center no-products pt-5">
                No products found in this category.
              </p>
            </div>
          ) : (
            <div className="product-grid">
              {filteredProducts.map((product) => {
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
                    imageUrls={product.image_urls || []}
                    type={itemData.product_type}
                    ecomUri={itemData.ecom_uri}
                    category={product.category?.name || "Other"}
                    variationID={itemData.variations[0].id}
                  />
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductList;
