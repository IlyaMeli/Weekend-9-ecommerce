import React from "react";
import "./productcard.css";
const ProductCard = ({
  product: { name, description, price, img_URL, discount },
  handleClick,
}) => {
  return (
    <div className="product-card">
      <img src={img_URL} alt="picture" />
      <div>{name}</div>
      <div>{description}</div>
      <div className="price-container">
        <span>{price}$</span>
        <span className="discount">{discount}$</span>
      </div>
      <button className="add-to-cart" onClick={handleClick}>
        Add To Card
      </button>
    </div>
  );
};

export default ProductCard;
