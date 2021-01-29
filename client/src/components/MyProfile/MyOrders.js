import { Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Loading } from "../sharedSubComponents/LoadingDotsIndicator";
import { MyProfileShared } from "./MyProfileShared";

const apis = require("../../apis/apis");

export const MyOrders = () => {
  const [orderList, setOrderList] = useState(null);
  const user = useSelector((state) => state.user);
  const fetchAddressData = async () => {
    const res = await apis.getApiCall("/user/myOrders", {}, user);
    setOrderList(res.myOrderList);
    // setLoading(false);
    return true;
  };
  useEffect(() => {
    fetchAddressData();
  }, []);
  // console.log({ orderList });

  const OrderDetails = ({ orderDetail }) => {
    // console.log({ orderDetail });
    return (
      <>
        {orderDetail.map((order) => {
          return (
            <div
              className="row border-bottom pt-3 pb-3"
              style={{ alignItems: "center" }}
              key={order.id}
            >
              <div className="col-sm-4 col-12 d-flex justify-content-center">
                <img
                  className="img-fluid"
                  src={order.coverImage}
                  alt="product"
                  style={{ maxHeight: 120, maxWidth: 120 }}
                />
              </div>
              <div className="col-sm-8 col-12">
                <Typography variant="body1" gutterBottom>
                  Name: &nbsp;{order.name}
                  <br />
                  Price: &nbsp;{order.price}
                  <br />
                  Quantity: &nbsp;{order.quantity}
                  <br />
                  Total Price: &nbsp;{order.totalPrice}
                  <br />
                  Weight: &nbsp;{order.weight}&nbsp;{order.weightType}
                </Typography>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  const MyOrders = () => {
    return (
      <div className="col-12">
        {orderList.map((order) => {
          return (
            <div
              key={order.id}
              className="mb-5 container"
              style={{
                border: "1px solid #dcdcdc",
                position: "relative",
              }}
            >
              <div
                // variant="outlined"
                // square
                className="row p-3  mb-2"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #dcdcdc , darkgrey)",
                  position: "relative",
                }}
              >
                <div className="col-md-4 col-12">
                  Order Date: &nbsp;
                  {new Date(order.createdAt).toLocaleString("en-IN", {
                    timeZone: "Asia/Kolkata",
                    dateStyle: "medium",
                  })}
                </div>
                <div className="col-md-4 col-12">
                  Total Order Cost: &nbsp;{order.totalOrderCost}
                </div>
                <div className="col-md-4 col-12">
                  Status: &nbsp;
                  <span style={{ textTransform: "uppercase" }}>
                    {order.status}
                  </span>
                </div>
              </div>

              <OrderDetails orderDetail={order.orderDetail} />
            </div>
          );
        })}
      </div>
    );
  };

  const Subcomponent = () => {
    return (
      <div
        className="container"
        style={{
          textAlign: "left",
        }}
      >
        <div className="row">
          <div className="col-12">
            <div
              style={{
                borderBottom: 1,
                borderBottomColor: "#dcdcdc",
                borderBottomStyle: "solid",
              }}
            >
              <Typography variant="h5" gutterBottom>
                My Orders
              </Typography>
            </div>
            {orderList === null ? <Loading padding={20} /> : <MyOrders />}
          </div>
        </div>
      </div>
    );
  };
  return <MyProfileShared Subcomponent={Subcomponent} />;
};
