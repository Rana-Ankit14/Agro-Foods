import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assert/logo.png";
export const AppFooter = () => {
  return (
    <div className="footer">
      <div
        style={{
          // backgroundColor: "#342e2e",
          paddingTop: 50,
          paddingBottom: 50,
          paddingLeft: 100,
          paddingRight: 100,
          margin: 0,
          // marginTop: 50,
          backgroundColor: "#7f5a83",
          backgroundImage: "linear-gradient(315deg, #7f5a83 0%, #0d324d 74%)",
        }}
        className="col-12 row"
      >
        <div className="col-md-3 col-12 p-2 justify-content-center d-flex">
          <img
            // src="https://techcrunch.com/wp-content/uploads/2018/07/logo-2.png?w=300"
            src={logo}
            alt="Logo"
            width="200"
            height="150"
          />
        </div>
        <div className="col-md-3 col-12">
          <h6 className="title">Information</h6>
          <ul>
            <li>
              <Link to="/">Term of Use</Link>
            </li>
          </ul>
        </div>
        <div className="col-md-3 col-12">
          <h6 className="title">My Account</h6>
          <ul>
            <li>
              <Link to="/myorders">My Orders</Link>
            </li>
          </ul>
        </div>
        <div className="col-md-3 col-12">
          <h6 className="title">Contact Detail</h6>
          <ul>
            <li>
              <Link to="/">About Us</Link>
            </li>
            <li>
              <Link to="">Email </Link>
            </li>
          </ul>
        </div>
      </div>
      <Navbar
        color="dark"
        // bg="dark"
        // variant="dark"
        className="justify-content-center col-12"
        style={{ backgroundColor: "#110011" }}
      >
        <Nav style={{ color: "#fff" }}>
          &copy; {new Date().getFullYear()} Copyright:
          <a href="https://www.websitname.com">&nbsp;websitename.com </a>
        </Nav>
      </Navbar>
    </div>
  );
};
