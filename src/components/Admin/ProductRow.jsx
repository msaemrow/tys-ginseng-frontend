import React from "react";

const ProductRow = ({
  barcode,
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
      <td className="text-center">{barcode}</td>
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
