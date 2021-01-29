import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Address } from "../Form/Address";
import { SavedAddress } from "./SavedAddress";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import { Paper } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { placeOrder } from "../../action/index";
const apis = require("../../apis/apis");

export const Checkout = () => {
  const [addressList, setAddressList] = useState([]);
  const [user, cart, totalOrderCost] = useSelector((state) => {
    return [state.user, state.cart, state.totalOrderCost];
  });
  console.log({ user, cart, totalOrderCost });
  const [loading, setLoading] = useState(true);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const fetchAddressData = async () => {
    const res = await apis.getApiCall("/user/addressList", {}, user);
    setAddressList(res.addressList);
    setLoading(false);
  };
  useEffect(() => {
    fetchAddressData();
  }, []);

  const OrderPlaced = () => {
    return (
      <div
        style={{
          position: "fixed",
          width: "100%",
          height: "100vh",
          background: "rgba(0, 0, 0, 0.3)",
          zIndex: 95,
          top: 0,
          left: 0,
        }}
        className="col-12 d-flex justify-content-center"
      >
        <Paper
          elevation={5}
          className="col-md-4 col-10"
          style={{
            height: "40vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20vh",
          }}
        >
          <CheckCircleOutlineIcon
            style={{
              color: "#228B22",
              fontSize: 150,
            }}
          />
          <h4 style={{ fontSize: "3vh", color: "#000" }}>Order Placed</h4>
        </Paper>
      </div>
    );
  };

  const handleSaveAddress = async (values) => {
    setLoading(true);
    const res = await apis.postApiCall(
      "/user/saveAddress",
      {
        street: values.flat,
        landmark: values.landmark,
        city: values.city,
        state: values.state,
        pincode: values.pincode,
        area: values.area,
      },
      user
    );
    console.log(res);
    fetchAddressData();
  };

  const handlePlaceOrder = async () => {
    console.log("order placed on addres " + selectedAddress);
    try {
      const res = await apis.postApiCall(
        "user/placeOrder",
        {
          cart: cart,
          totalOrderCost: totalOrderCost,
          selectedAddress: selectedAddress,
        },
        user
      );
      console.log(res);
      dispatch(placeOrder());
      setOrderPlaced(true);
      setTimeout(() => {
        history.push("/myorders");
      }, 2000);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container pt-5">
      <h3>Checkout</h3>
      <hr
        style={{
          borderTopWidth: 2,
          borderTopStyle: "solid",
          borderTopColor: "#dcdcdc",
        }}
      />
      {orderPlaced ? <OrderPlaced /> : <></>}

      <div className="row">
        <div className="col-md-6 col-12">
          <SavedAddress
            addressList={addressList}
            loading={loading}
            setSelectedAddress={setSelectedAddress}
            selectedAddress={selectedAddress}
            handlePlaceOrder={handlePlaceOrder}
          />
        </div>
        <div className="col-md-6 col-12">
          <Address handleSaveAddress={handleSaveAddress} />
        </div>
      </div>
    </div>
  );
};
