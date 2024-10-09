import React from "react";

const ProductPage = ({
  barcode,
  type,
  name,
  price,
  sale_price,
  on_sale,
  description,
  servings,
  image_url,
  weight,
  quantity,
  best_seller,
}) => {
  return (
    <div>
      <h1>{name} Details</h1>

      <p>{barcode}</p>
      <p>{type}</p>
      <p>{name}</p>
      <p>{price}</p>
      <p>{sale_price}</p>
      <p>{on_sale ? "true" : "false"}</p>
      <p>{description}</p>
      <p>{servings}</p>
      <p>{image_url}</p>
      <p>{weight}</p>
      <p>{quantity}</p>
      <p>{best_seller === true ? "true" : "false"}</p>
    </div>
  );
};

export default ProductPage;
