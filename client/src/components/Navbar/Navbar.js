import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SearchBar } from "../sharedSubComponents/SearchBar";
import { useSelector, useDispatch } from "react-redux";
import { DrawerToggleButton } from "./DrawerToggleButton";
import ShoppingCartSharp from "@material-ui/icons/ShoppingCartSharp";
import AccountCircleSharpIcon from "@material-ui/icons/AccountCircleSharp";
import { userLogin } from "../../action";
import "./Navbar.css";
import logo from "../../assert/logo.png";

export const Navbar = ({ drawerToggleClickHandler }) => {
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);
  const [toolbarClasses, settoolbarClasses] = useState("toolbar");
  const dispatch = useDispatch();
  // const handleLogout = (e) => {
  //   e.preventDefault();
  //   dispatch(userLogin(null));
  // };

  useEffect(() => {
    console.log("********* logo **********");
    console.log({ logo });
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [toolbarClasses]);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      if (toolbarClasses !== "toolbar scrolled") {
        settoolbarClasses("toolbar scrolled");
        console.log({ toolbarClasses });
      }
    } else {
      if (toolbarClasses === "toolbar scrolled") {
        settoolbarClasses("toolbar");
        console.log({ toolbarClasses });
      }
    }
  };
  return (
    <header className={toolbarClasses}>
      <nav className="toolbar_navigation">
        <div className="toolbar_toggle_button">
          <DrawerToggleButton click={drawerToggleClickHandler} />
        </div>
        <div className="toolbar_logo">
          <Link to="/">
            <img
              // src="https://techcrunch.com/wp-content/uploads/2018/07/logo-2.png?w=300"
              src={logo}
              alt="Logo"
              width="50"
              height="50"
            />
          </Link>
        </div>
        <div className="toolbar_navigation_main_items">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Product</Link>
            </li>
            {user !== null && user.userType === "seller" ? (
              <>
                <li>
                  <Link to="/seller/productlist">Product List</Link>
                </li>
                <li>
                  <Link to="/seller/orderlist">Order List</Link>
                </li>
              </>
            ) : (
              <></>
            )}
          </ul>
        </div>
        <div className="spacer"></div>
        <div className="toolbar_search">
          <SearchBar />
        </div>
        <div className="toolbar_navigation_right_items">
          <ul>
            {!user ? (
              <>
                <li>
                  <Link to="/login">Log In</Link>
                </li>
              </>
            ) : (
              <>
                {/* <li>
                  <Link to="/logout" onClick={handleLogout}>
                    Log Out
                  </Link>
                </li> */}
                <li>
                  <Link to="/myprofile">
                    <AccountCircleSharpIcon
                      style={{ fill: "#fff", fontSize: 30 }}
                    />
                  </Link>
                </li>
              </>
            )}
            <li>
              <Link to="/cart">
                <ShoppingCartSharp style={{ fill: "#fff", fontSize: 30 }} />
                <span
                  style={{
                    fontSize: 12,
                    background: "#fa923f",
                    color: "#fff",
                    padding: "0 5px",
                    verticalAlign: "top",
                    borderRadius: 100,
                    textAlign: "center",
                    position: "absolute",
                  }}
                >
                  {cart.length}
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="toolbar_mobile_search">
        <SearchBar />
      </div>
    </header>
  );
};
