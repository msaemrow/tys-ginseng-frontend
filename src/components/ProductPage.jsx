// ProductPage.jsx
// Main product page. Add/remove products in productsConfig.js — no changes needed here.

import React from "react";
import ProductSection from "./ProductSection";
import products from "./productsConfig";
import "../css/ProductPage.css";

export default function ProductPage() {
  return (
    <main className="product-page">
      <header className="product-page__header">
        <p className="product-page__eyebrow">Rooted in Nature</p>
        <h1 className="product-page__title">Our Products</h1>
        <p className="product-page__subtitle">
          Small-batch ginseng crafted for people who care what they put in their
          bodies. Every product starts with the same root — grown with patience,
          processed with care.
        </p>
      </header>

      <div className="product-page__list">
        {products.map((product, index) => (
          <ProductSection
            key={product.id}
            product={product}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
    </main>
  );
}
