import React from "react";
import { Link } from "react-router-dom";

const ProductRow = ({
  barcode,
  listed_on_site,
  type,
  name,
  price,
  sale_price,
  on_sale,
  description,
  quantity,
}) => {
  return (
    <tr>
      <td className="text-center">
        <Link to={`/admin/product/${barcode}`}>{barcode}</Link>
      </td>
      <td className="text-center">{listed_on_site ? "Yes" : "No"}</td>
      <td className="text-center">{type}</td>
      <td className="text-center">{name}</td>
      <td className="text-center">{price}</td>
      <td className="text-center">{sale_price}</td>
      <td className="text-center">{on_sale ? "Yes" : "No"}</td>
      <td className="text-center">{description}</td>
      <td className="text-center">{quantity}</td>
    </tr>
  );
};

export default ProductRow;
