import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Typography, Paper } from "@material-ui/core";
import { MyProfileShared } from "./MyProfileShared";
import { Loading } from "../sharedSubComponents/LoadingDotsIndicator";
import { userLogin } from "../../action";
import { useHistory } from "react-router-dom";
const apis = require("../../apis/apis");

export const MyProfile = () => {
  const [userInfo, setUserInfo] = useState(null);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const fetchAddressData = async () => {
    const res = await apis.getApiCall("/user/userInfo", {}, user);
    setUserInfo(res.userInfo);
    // setLoading(false);
    return true;
  };
  useEffect(() => {
    fetchAddressData();
  }, []);
  // console.log({ userInfo });

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(userLogin(null));
    history.push("/");
  };

  const Addresses = () => {
    return (
      <div className="col-12">
        <div
          className="col-12"
          style={{
            borderBottom: 1,
            borderBottomColor: "#dcdcdc",
            borderBottomStyle: "solid",
          }}
        >
          <Typography variant="h5" gutterBottom>
            My Addresses
          </Typography>
        </div>
        <div className="col-12">
          {userInfo === null ? (
            <div>
              <Loading padding={20} />
            </div>
          ) : (
            <div className="row">
              {userInfo.address.map((address) => {
                return (
                  <Paper
                    elevation={3}
                    style={{
                      display: "flex",
                      paddingTop: 20,
                      paddingBottom: 20,
                      minHeight: "25vh",
                    }}
                    className="col-md-5 m-2  col-12"
                    key={address.id}
                  >
                    <div
                      style={{
                        textAlign: "left",
                        fontFamily: "sans-serif",
                        fontSize: 14,
                      }}
                    >
                      <p className="m-0 p-0">{address.street}</p>
                      <p className="m-0 p-0">{address.area}</p>
                      <p className="m-0 p-0">{address.landmark}</p>
                      <p className="m-0 p-0">{address.city}</p>
                      <p className="m-0 p-0">
                        {address.state}-{address.pincode}
                      </p>
                    </div>
                  </Paper>
                );
              })}
            </div>
          )}
        </div>
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
                My Profile
              </Typography>
            </div>
            <div>
              <Typography variant="body1" gutterBottom>
                {userInfo === null ? (
                  <>
                    <span>Name :</span> <br />
                    <span>Mobile No :</span>
                    <br />
                    <span>Email :</span>
                  </>
                ) : (
                  <>
                    <span>Name :</span>
                    <b style={{ textTransform: "capitalize" }}>
                      &nbsp;{userInfo.firstName}&nbsp;{userInfo.lastName}
                    </b>
                    <br />
                    <span>Mobile No :</span> <b>&nbsp;{userInfo.phoneNo}</b>
                    <br />
                    <span>Email :</span> <b>&nbsp;{userInfo.email}</b>
                  </>
                )}
              </Typography>
            </div>
          </div>
          <div className="col-12 d-flex justify-content-end">
            <Button
              variant="contained"
              color="secondary"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </div>
          {/* Addresses */}
          <Addresses />
        </div>
      </div>
    );
  };
  return <MyProfileShared Subcomponent={Subcomponent} />;
};
