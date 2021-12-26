import React, { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import data from "../../data";

import "./productlist.css";

const ProductList = ({ cartUpdate }) => {
  const [products] = useState(data);

  return (
    <div className="productlist">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          handleClick={cartUpdate}
        />
      ))}
    </div>
  );
};

export default ProductList;
