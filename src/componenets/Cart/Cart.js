import React from 'react'
import CartProduct from '../CartProduct/CartProduct'
import "./cart.css"
const Cart = ({cartList ,quantityControl}) => {
  return (
    <div className="cart-container">
      {cartList.map((cartItem) =>{
        return(
          <CartProduct key={cartItem.product.id} cartItem={cartItem} quantityControl={quantityControl}/>
          // <CartProduct key={cartItem.product.id} cartList={cartList} product={cartItem.product} quantityControl={quantityControl} quantity={cartItem.quantity}/>
          )

      })}
    </div>
  )
}

export default Cart
