import React, { useEffect, useState } from "react";
import ProductRow from "./ProductRow";
import Products from "../../assets/products";
import "../../css/Admin/AdminHomepage.css";

const AdminHomepage = () => {
  const sampleProducts = [
    {
      barcode: 1234567,
      type: "SINGLE",
      name: "Ginseng 1oz",
      price: 20.0,
      sale_price: 20.0,
      on_sale: true,
      description: "1oz jar of ginseng",
      servings: "28 daily servings",
      weight: 0.45,
      image_url: "www.espn.com",
      quantity: 20,
      best_seller: true,
    },
    {
      barcode: 1234568,
      type: "SINGLE",
      name: "Ginseng 1oz",
      price: 20.0,
      sale_price: 20.0,
      on_sale: false,
      description: "1oz jar of ginseng",
      servings: "28 daily servings",
      weight: 0.45,
      image_url: "www.espn.com",
      quantity: 20,
      best_seller: false,
    },
    {
      barcode: 1234569,
      type: "BULK",
      name: "Ginseng 1oz",
      price: 20.0,
      sale_price: 20.0,
      on_sale: false,
      description: "1oz jar of ginseng",
      servings: "28 daily servings",
      weight: 0.45,
      image_url: "www.facebook.com",
      quantity: 20,
      best_seller: false,
    },
  ];
  const [currentProducts, setCurrentProducts] = useState(Products);

  useEffect(() => {
    //this is where i would make the api call to get the products
    setCurrentProducts(Products);
  }, [Products]);

  return (
    <div className="container d-flex flex-column">
      <h1 className="mt-4 pt-4">Admin Homepage</h1>
      <div className="table-responsive">
        <table className="mt-4">
          <thead>
            <tr>
              <td>Barcode</td>
              <td>Type</td>
              <td>Name</td>
              <td>Price</td>
              <td>Sale Price</td>
              <td>On Sale?</td>
              <td>Description</td>
              <td>Servings</td>
              <td>Image URL</td>
              <td>Weight</td>
              <td>Quantity</td>
              <td>Best Seller?</td>
            </tr>
          </thead>
          <tbody>
            {currentProducts.map((product, index) => (
              <ProductRow
                key={index}
                barcode={product.barcode}
                type={product.type}
                price={product.price}
                sale_price={product.sale_price}
                on_sale={product.on_sale}
                description={product.description}
                servings={product.servings}
                image_url={product.image_url}
                weight={product.weight}
                quantity={product.quantity}
                best_seller={product.best_seller}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminHomepage;
