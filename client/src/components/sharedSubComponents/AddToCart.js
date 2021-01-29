import React from "react";
// import { Button } from "react-bootstrap";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../action/index";
import { QuantiyButton } from "./QuantiyButton";
export const AddToCart = ({ item }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  // console.log(cart);

  const inCart = cart.filter((cartItem) => {
    return cartItem.id === item.id;
  });

  if (inCart.length > 0) {
    return <QuantiyButton item={inCart[0]} />;
  }
  return (
    <Button
      // type="button"
      // className="btn btn-primary btn-block col-sm-6 col-12"
      size="small"
      color="primary"
      onClick={() => {
        item["totalPrice"] = item.price;
        item["quantity"] = 1;
        dispatch(addToCart(item));
      }}
    >
      Add To Cart
    </Button>
  );
};
