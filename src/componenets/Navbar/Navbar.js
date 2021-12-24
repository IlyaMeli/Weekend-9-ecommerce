import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = ({ cartCount }) => {
  return (
    <div>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <div className="navbar-right">
          <Link to="/products">Products</Link>
          <Link to="" className="cart">
            <div>{cartCount}</div>
            <div>
              <i className="fas fa-shopping-cart fa-lg"></i>
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
