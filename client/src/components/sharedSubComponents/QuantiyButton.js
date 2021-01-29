import { Button } from "@material-ui/core";
import AddSharpIcon from "@material-ui/icons/AddSharp";
import RemoveSharpIcon from "@material-ui/icons/RemoveSharp";
import React from "react";
import { useDispatch } from "react-redux";
import { decreaseItemQuantiy, increaseItemQuantity } from "../../action";

export const QuantiyButton = ({ item }) => {
  const dispatch = useDispatch();
  console.log("************ quantity ****************88");
  console.log(item);
  console.log(item.quantity);
  return (
    <div style={{ display: "flex" }}>
      <Button
        style={{
          padding: 1,
          minWidth: 40,
        }}
        onClick={() => {
          console.log("*** decrease **************8");
          dispatch(decreaseItemQuantiy(item));
        }}
      >
        <RemoveSharpIcon />
      </Button>
      <input
        className="quantity"
        name="quantity"
        value={item.quantity}
        disabled
        style={{
          width: 40,
          borderRadius: 5,
          backgroundColor: "#fff",
          padding: 1,
          textAlign: "center",
          height: 25,
        }}
      />

      <Button
        style={{
          padding: 1,
          minWidth: 40,
        }}
        onClick={() => {
          console.log("*** Increase **************8");
          dispatch(increaseItemQuantity(item));
        }}
      >
        <AddSharpIcon />
      </Button>
    </div>
  );
};
