import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./componenets/Home/Home";
import Cart from "./componenets/Cart/Cart";
import ProductList from "./componenets/ProductList/ProductList";
import Navbar from "./componenets/Navbar/Navbar";
import React, { useState } from "react";

const App = () => {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(cartCount + 1);
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
          <Route path="/cart" exact component={Cart} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
