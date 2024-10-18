import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import ProductRow from "./ProductRow";
import MobileProductRow from "./MobileProductRow";
import { ToastContainer } from "react-toastify";
import "../../css/Admin/AdminHomepage.css";
import GinsengApi from "../../apiGinsengAPI/api";

const AdminHomepage = () => {
  const navigate = useNavigate();
  const [currentProducts, setCurrentProducts] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let productList = await GinsengApi.getAllProducts();
        console.log(productList);
        setCurrentProducts(productList.products);
      } catch (err) {
        console.error("Error fetching products", err);
      }
    };

    fetchProducts();
  }, []);

  const handleClickNewProductBtn = () => {
    navigate("/admin/product/new");
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container d-flex flex-column">
      <ToastContainer position="top-center" autoClose={2000} />
      <div className="header-content d-flex justify-content-center align-items-center pt-4">
        <h1 className="me-4 pt-3">Admin Homepage</h1>
        <button onClick={handleClickNewProductBtn} className="btn btn-success">
          Add New Product
        </button>
      </div>
      <div className="table-responsive">
        <table className="mt-4">
          <thead>
            <tr>
              {isMobile ? (
                <>
                  <th scope="col">Barcode</th>
                  <th scope="col">Listed</th>
                  <th scope="col">Name</th>
                  <th scope="col">Price</th>
                </>
              ) : (
                <>
                  <td className="text-center">Barcode</td>
                  <td className="text-center">Listed</td>
                  <td className="text-center">Type</td>
                  <td className="text-center">Name</td>
                  <td className="text-center">Price</td>
                  <td className="text-center">Sale Price</td>
                  <td className="text-center">On Sale</td>
                  <td className="text-center">Description</td>
                  <td className="text-center">Quantity</td>
                </>
              )}
            </tr>
          </thead>
          <tbody>
            {currentProducts ? (
              currentProducts.map((product, index) =>
                isMobile ? (
                  // Render MobileProductRow if isMobile is true
                  <MobileProductRow
                    key={index}
                    barcode={product.barcode}
                    listed_on_site={product.listed_on_site}
                    name={product.name}
                    price={product.price}
                  />
                ) : (
                  // Render ProductRow if isMobile is false
                  <ProductRow
                    key={index}
                    barcode={product.barcode}
                    listed_on_site={product.listed_on_site}
                    name={product.name}
                    type={product.type}
                    price={product.price}
                    sale_price={product.sale_price}
                    on_sale={product.on_sale}
                    description={product.description}
                    quantity={product.quantity}
                    best_seller={product.best_seller}
                  />
                )
              )
            ) : (
              <tr>
                <td colSpan="12">Loading...</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminHomepage;
