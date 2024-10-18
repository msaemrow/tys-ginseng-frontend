import React from "react";
import { Link } from "react-router-dom";

const MobileProductRow = ({ barcode, listed_on_site, name, price }) => {
  return (
    <tr>
      <td className="text-center">
        <Link to={`/admin/product/${barcode}`}>{barcode}</Link>
      </td>
      <td className="text-center">{listed_on_site ? "Yes" : "No"}</td>
      <td className="text-center">{name}</td>
      <td className="text-center">${price}</td>
    </tr>
  );
};

export default MobileProductRow;
