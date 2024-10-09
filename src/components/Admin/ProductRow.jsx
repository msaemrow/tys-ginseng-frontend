import React from "react";

const ProductRow = ({
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
    <tr>
      <td>{barcode}</td>
      <td>{type}</td>
      <td>{name}</td>
      <td>{price}</td>
      <td>{sale_price}</td>
      <td>{on_sale ? "true" : "false"}</td>
      <td>{description}</td>
      <td>{servings}</td>
      <td>{image_url}</td>
      <td>{weight}</td>
      <td>{quantity}</td>
      <td>{best_seller === true ? "true" : "false"}</td>
    </tr>
  );
};

export default ProductRow;
