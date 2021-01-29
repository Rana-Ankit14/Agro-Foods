import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../action/index";
import { Login } from "./Form/Login";
const apis = require("../apis/apis");

export const UserLogin = () => {
  const dispatch = useDispatch();
  const existingUser = useSelector((state) => state.user);
  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState({
    status: false,
    message: "",
  });
  useEffect(() => {
    if (existingUser) {
      history.push("/");
    }
  }, []);
  const handleUserLogin = async (values) => {
    console.log("******** Login **********");
    try {
      const data = await apis.postApiCall("/user/login", {
        phoneNo: values.phoneNo,
        password: values.password,
      });
      if (data.isLogin) {
        setErrorMessage({ status: false, message: data.message });
        dispatch(userLogin(data));

        // redirecting to home
        // history.push("/");
        history.goBack();
        // history.pop();
      } else {
        setErrorMessage({ status: true, message: data.message });
      }
    } catch (err) {
      console.log({ err });

      setErrorMessage({ status: true, message: err.message });
    }
  };
  return (
    <Login handleUserLogin={handleUserLogin} errorMessage={errorMessage} />
  );
};
