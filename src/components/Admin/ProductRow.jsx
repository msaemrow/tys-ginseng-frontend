import React from "react";
import { Link } from "react-router-dom";

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
      <td>
        <Link to={`/admin/${barcode}`}>{barcode}</Link>
      </td>
      <td>{type}</td>
      <td>{name}</td>
      <td>{price}</td>
      <td>{on_sale ? "true" : "false"}</td>
      <td>{description}</td>
      <td>{quantity}</td>
    </tr>
  );
};

export default ProductRow;
