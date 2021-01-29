import RemoveShoppingCartSharpIcon from "@material-ui/icons/RemoveShoppingCartSharp";
import React from "react";
import { useSelector } from "react-redux";
import { CartAmount } from "./CartAmount";
import { CartItems } from "./CartItems";

const EmptyCart = () => {
  return (
    <div
      className="col-12"
      style={{
        minHeight: "50vh",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <RemoveShoppingCartSharpIcon style={{ fontSize: 100 }} color="disabled" />
      <h4 style={{ fontSize: "3vh", color: "grey" }}>Cart Is Empty</h4>
    </div>
  );
};

export const Cart = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="container pt-5">
      <h3>Shopping Cart</h3>
      <hr
        style={{
          borderTopWidth: 2,
          borderTopStyle: "solid",
          borderTopColor: "#dcdcdc",
        }}
      />
      {cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="row">
          <div className="col-12 col-md-8">
            {cart.map((item) => {
              return <CartItems item={item} key={item.id} />;
            })}
          </div>
          <div className="col-12 col-md-4">
            <CartAmount />
          </div>
        </div>
      )}
    </div>
  );
};
