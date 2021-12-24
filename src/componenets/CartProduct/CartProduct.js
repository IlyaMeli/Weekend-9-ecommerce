import React from "react";
import "./cartproduct.css";
const CartProduct = ({ cartItem:{ product, quantity}, cartItem, quantityControl}) => {
  // {console.log(cartItem,product,quantity);}
  return (
    <div className="cart-product">
      <div className="cart-content">
        <img className="cart-product-img" src={product.img_URL} alt="Product" />
        <div className="cart-product-name">{product.name}</div>
      </div>
        <div className="cart-content-2">
      <div className="cart-product-q"><span onClick={() =>quantityControl("plus",cartItem)}>+</span> Quantity: {quantity} <span onClick={() =>quantityControl("minus",cartItem)}>-</span></div>
      <div className="cart-product-price">Price: {product.price}$</div>
      </div>
      <button className="cart-product-del">DELETE</button>
    </div>
  );
};

export default CartProduct;
