import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = useSelector((state) => state.user);
  // const user = JSON.parse(localStorage.getItem('user')) === null ? {isLogin : false}: JSON.parse(localStorage.getItem('user')) ;

  return (
    <Route
      {...rest}
      render={(props) => {
        if (user) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};
