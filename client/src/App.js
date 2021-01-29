import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { AppFooter } from "./components/AppFooter";
import { MyProfile } from "./components/MyProfile/MyProfile";
import { MyOrders } from "./components/MyProfile/MyOrders";
import { Backdrop } from "./components/Backdrop/Backdrop";
import { Cart } from "./components/Cart/Cart";
import { Checkout } from "./components/Checkout/Checkout";
import { UserLogin } from "./components/UserLogin";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar/Navbar";
import { SideDrawer } from "./components/Navbar/SideDrawer";
import { NotFound } from "./components/NotFound";
import { PrivateRoute } from "./components/PrivateRoute";
import { SellerPrivateRoute } from "./components/SellerPrivateRoute";
import { ProductDetail } from "./components/ProductDetail";
import { Products } from "./components/Products";
import { UserRegister } from "./components/UserRegister";
import { userLogin } from "./action";
import { SellerLogin } from "./components/Seller/SellerLogin";
import { ProductList } from "./components/Seller/ProductList";
import { AddProduct } from "./components/Seller/AddProduct";
import { SellerProductDetail } from "./components/Seller/SellerProductDetail";
import { SellerOrderList } from "./components/Seller/SellerOrderList";
const apis = require("./apis/apis");

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  useEffect(() => {
    // setIsLogin(false);
    const fetchData = async () => {
      try {
        let data;
        if (
          user.userType !== null &&
          user.userType !== undefined &&
          user.userType === "seller"
        ) {
          data = await apis.postApiCall("/token/seller/validate", {}, user);
        } else {
          data = await apis.postApiCall("/token/validate", {}, user);
        }

        if (data.Validate) {
          // setIsLogin(true);
        }
      } catch (err) {
        if (err === "Unauthorized" || err === "Forbidden") {
          dispatch(userLogin(null));
        }
        // setIsLogin(false);
      }
    };

    fetchData();
  }, []);

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen((prevState) => {
      return !prevState;
    });
  };
  const backdropClickHandler = () => {
    setSideDrawerOpen(false);
  };
  const sideDrawerLinkClickHandler = () => {
    setSideDrawerOpen(false);
  };

  // let sideDrawer;
  let backdrop;
  if (sideDrawerOpen) {
    backdrop = <Backdrop click={backdropClickHandler} />;
  }
  return (
    <div className="App container-fluid p-0">
      <Router>
        <Navbar drawerToggleClickHandler={drawerToggleClickHandler} />
        <SideDrawer
          show={sideDrawerOpen}
          linkClicked={sideDrawerLinkClickHandler}
        />
        {backdrop}
        <div className="main_body">
          <Switch>
            <Route path="/:path(home||/)" exact component={Home} />

            <Route path="/login" render={(props) => <UserLogin {...props} />} />
            <Route
              path="/register"
              render={(props) => <UserRegister {...props} />}
            />
            <Route path="/productDetail/:id" exact component={ProductDetail} />
            <Route path="/products/:search" exact component={Products} />
            <Route path="/products" exact component={Products} />
            <Route path="/cart" exact component={Cart} />
            <PrivateRoute path="/myprofile" exact component={MyProfile} />
            <PrivateRoute path="/myorders" exact component={MyOrders} />
            <PrivateRoute path="/checkout" exact component={Checkout} />
            <Route path="/seller">
              <Switch>
                <Route path="/seller/login" exact component={SellerLogin} />
                <SellerPrivateRoute
                  path="/seller/productlist"
                  exact
                  component={ProductList}
                />
                <SellerPrivateRoute
                  path="/seller/orderlist"
                  exact
                  component={SellerOrderList}
                />
                <SellerPrivateRoute
                  path="/seller/addproduct"
                  exact
                  component={AddProduct}
                />
                <SellerPrivateRoute
                  path="/seller/productDetail/:id"
                  exact
                  component={SellerProductDetail}
                />
                <Route component={SellerLogin} />
              </Switch>
            </Route>
            <Route component={NotFound} />
          </Switch>
        </div>
        <AppFooter />
      </Router>
    </div>
  );
}

export default App;
