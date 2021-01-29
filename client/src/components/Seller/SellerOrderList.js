import React, { useEffect, useState } from "react";
import { ProductForm } from "./Form/ProductForm";
import { useSelector } from "react-redux";
import { Button, Typography, Paper } from "@material-ui/core";

const apis = require("../../apis/apis");

export const SellerOrderList = () => {
  const user = useSelector((state) => state.user);
  //   const history = useHistory();
  //   const { id } = useParams();
  const [orders, setOrders] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const res = await apis.getApiCall("/seller/orders", {}, user);
      setOrders(res.orders);
      //   console.log(res.productDetail);
    };

    fetchData();
  }, []);

  const OrderDetails = ({ orderDetail }) => {
    // console.log({ orderDetail });
    return (
      <>
        {orderDetail.map((order) => {
          return (
            <div
              className="mt-2 mb-2 row "
              style={{ alignItems: "center" }}
              key={order.id}
            >
              <div className="col-sm-4 col-12">
                <img
                  className="img-fluid w-100"
                  src={order.coverImage}
                  alt="product"
                  style={{ maxHeight: 150, maxWidth: 150 }}
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

  const Orders = () => {
    return (
      <div className="col-12">
        {orders.map((order) => {
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

  if (orders == null) {
    return <h3>Loading ....</h3>;
  } else {
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
                All Orders
              </Typography>
            </div>
            {/* {order === null ? (
              <div>
                <Loading />
              </div>
            ) : ( */}
            <Orders />
            {/* )} */}
          </div>
        </div>
      </div>
    );
  }
};
