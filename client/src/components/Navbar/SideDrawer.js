import React from "react";
import { Link } from "react-router-dom";
import "./SideDrawer.css";
export const SideDrawer = ({ show, linkClicked }) => {
  let drawerClasses = "side_drawer";
  if (show) {
    drawerClasses = "side_drawer open";
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li onClick={linkClicked}>
          <Link to="/">Home</Link>
        </li>
        <li onClick={linkClicked}>
          <Link to="/products">Product</Link>
        </li>
        <li onClick={linkClicked}>
          <Link to="/login">Login</Link>
        </li>
        <li onClick={linkClicked}>
          <Link to="/register">Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
};
