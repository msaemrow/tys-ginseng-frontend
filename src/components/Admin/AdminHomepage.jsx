import React, { useEffect, useState } from "react";
import ProductRow from "./ProductRow";
import Products from "../../assets/products";
import "../../css/Admin/AdminHomepage.css";
import GinsengApi from "../../apiGinsengAPI/api";

const AdminHomepage = () => {
  const [currentProducts, setCurrentProducts] = useState(null);

  useEffect(() => {
    //this is where i would make the api call to get the products
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

  return (
    <div className="container d-flex flex-column">
      <h1 className="mt-4 pt-4">Admin Homepage</h1>
      <div className="table-responsive">
        <table className="mt-4">
          <thead>
            <tr>
              <td className="text-center">Barcode</td>
              <td className="text-center">Type</td>
              <td className="text-center">Name</td>
              <td className="text-center">Price</td>
              <td className="text-center">Sale Price</td>
              <td className="text-center">On Sale</td>
              <td className="text-center">Description</td>
              <td className="text-center">Quantity</td>
            </tr>
          </thead>
          <tbody>
            {currentProducts ? (
              currentProducts.map((product, index) => (
                <ProductRow
                  key={index}
                  barcode={product.barcode}
                  name={product.name}
                  type={product.type}
                  price={product.price}
                  sale_price={product.sale_price}
                  on_sale={product.on_sale}
                  description={product.description}
                  quantity={product.quantity}
                  best_seller={product.best_seller}
                />
              ))
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
