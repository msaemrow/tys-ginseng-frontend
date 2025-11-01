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
import { prefetchDNS } from "react-dom";

const ProductList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let productList = await GinsengApi.getAllProducts();
        console.log("Product List", productList);
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
    <div className="py-5 px-4">
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

      <header className="mb-3 text-center">
        <h2 className="text-bold">Shop Ginseng Products </h2>
        <p className="text-muted">Premium Woods Grown Ginseng Roots & Powder</p>
      </header>

      {/* Filter Buttons */}
      <div className="d-flex  flex-column flex-md-row align-items-center gap-2 px-3 ms-md-3 ms-0 rounded mb-3">
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

      {/* Product Grid */}
      {isLoading ? (
        <div className="row g-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <SkeletonProduct />
            </div>
          ))}
        </div>
      ) : filteredProducts.length === 0 ? (
        <div className="text-center py-5">
          <p className="text-muted">No products found in this category.</p>
        </div>
      ) : (
        <div className="row g-4">
          {filteredProducts.map((product) => {
            const itemData = product.item_data;
            const variation = itemData.variations?.[0]?.item_variation_data;
            return (
              <div
                key={product.id}
                className="col-12 col-sm-6 col-md-4 col-lg-3"
              >
                <Product
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
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default ProductList;
