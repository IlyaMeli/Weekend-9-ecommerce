import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./componenets/Home/Home";
import Cart from "./componenets/Cart/Cart";
import ProductList from "./componenets/ProductList/ProductList";
import Navbar from "./componenets/Navbar/Navbar";
import React, { useState } from "react";

const App = () => {
  const [cartCount, setCartCount] = useState(0);
  const [cartList, setCartList] = useState([]);

  const quantityControl = (type, item) => {
    let idx = cartList.indexOf(item);
    const cartListCopy = [...cartList];
    let sign = type === "plus" ? 1 : -1;
    cartListCopy[idx].quantity += sign;
    setCartList(cartListCopy);
  };

  const addToCart = (product) => {
    let flag = false;
    setCartCount(cartCount + 1);
    cartList.forEach((item, index) => {
      if (item.product.id === product.id) {
        const newList = [...cartList];
        newList[index].quantity += 1;
        setCartList(newList);
        flag = true;
      }
    });
    if (flag === false) {
      setCartList([
        ...cartList,
        {
          product,
          quantity: 1,
        },
      ]);
    }
  };

  return (
    <div className="app">
      <BrowserRouter>
        <Navbar cartCount={cartCount} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" exact>
            <ProductList cartUpdate={addToCart} />
          </Route>
          <Route path="/cart" exact>
            <Cart quantityControl={quantityControl} cartList={cartList} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
