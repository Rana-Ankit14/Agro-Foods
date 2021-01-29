import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Register } from "./Form/Register";
const apis = require("../apis/apis");

export const UserRegister = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const existingUser = useSelector((state) => state.user);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [errorMessage, setErrorMessage] = useState({
    status: false,
    message: "",
  });
  const history = useHistory();
  useEffect(() => {
    if (existingUser) {
      history.push("/");
    }
  }, []);

  

  const handleUserRegistration = async (values) => {
    console.log("******** Register **********");
    try {
      const data = await apis.postApiCall("/user/signup", {
        email: values.email,
        firstName: values.firstName,
        lastName: values.lastName,
        phoneNo: values.phoneNo,
        password: values.password,
      });
      console.log(data.isRegister);
      if (data.isRegister) {
        setErrorMessage({ status: false, message: data.message });
        history.push("/login");
      } else {
        setConfirmPassword("");
        setPassword("");
        setErrorMessage({ status: true, message: data.message });
      }
    } catch (err) {
      setConfirmPassword("");
      setPassword("");
      setErrorMessage({
        status: true,
        message: "Phone Number or Email already Registered",
      });
    }
  };
  return (
    <Register
      handleUserRegistration={handleUserRegistration}
      errorMessage={errorMessage}
    />
  );
};
