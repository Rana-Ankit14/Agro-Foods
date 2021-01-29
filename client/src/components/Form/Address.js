import {
  Button,
  makeStyles,
  Avatar,
  Typography,
  Paper,
} from "@material-ui/core";
import { Field, Form, Formik, ErrorMessage } from "formik";
import HomeSharpIcon from "@material-ui/icons/HomeSharp";
import React, { useEffect, useState } from "react";
import { MyField } from "./MyField";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
      paddingBottom: theme.spacing(4),
    },

    minHeight: "50vh",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#000",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const Address = ({ handleSaveAddress }) => {
  const classes = useStyles();

  const [errorMessage, setErrorMessage] = useState({
    status: false,
    message: "",
  });
  useEffect(() => {
    // setErrorMessage({ status: true, message: "error" });
  }, []);

  return (
    <Formik
      initialValues={{
        flat: "",
        area: "",
        landmark: "",
        pincode: "",
        city: "",
        state: "Jharkhand",
      }}
      onSubmit={handleSaveAddress}
      validate={(values) => {
        const errors = {};

        if (!values.city) {
          errors.city = "Required";
        }
        if (!values.pincode) {
          errors.pincode = "Required";
        }
        if (!values.flat) {
          errors.flat = "Required";
        }
        if (!values.area) {
          errors.area = "Required";
        }
        if (!values.landmark) {
          errors.landmark = "Required";
        }
        if (!values.state) {
          errors.state = "Required";
        }
        return errors;
      }}
    >
      {({ values, handleChange, errors, touched, handleBlur }) => (
        <div className="container justify-content-center">
          <Paper className={classes.paper}>
            <Form className={classes.form}>
              <Avatar className={classes.avatar}>
                <HomeSharpIcon />
              </Avatar>
              <Typography component="h1" variant="h6">
                {/* Enter  */}
                New Address
              </Typography>
              {errorMessage.status ? (
                <small className="text-danger h6">{errorMessage.message}</small>
              ) : (
                <></>
              )}
              <div className="col-12 mt-2">
                <Field
                  name="flat"
                  //   placeholder="Phone Number"
                  type="text"
                  label="Flat No., Apartment, Street"
                  component={MyField}
                />
              </div>
              <ErrorMessage name="flat" component="div" />
              <div className="col-12 mt-2">
                <Field
                  name="area"
                  //   placeholder="Password"
                  type="text"
                  label="Area"
                  component={MyField}
                />
              </div>
              <ErrorMessage name="area" component="div" />

              <div className="col-12 mt-2">
                <Field
                  name="landmark"
                  //   placeholder="Password"
                  type="text"
                  label="Landmark"
                  component={MyField}
                />
              </div>
              <ErrorMessage name="landmark" component="div" />

              <div className="col-12 mt-2">
                <Field
                  name="city"
                  //   placeholder="Password"
                  type="text"
                  label="City"
                  component={MyField}
                />
              </div>
              <ErrorMessage name="city" component="div" />

              <div className="col-12 mt-2">
                <Field
                  name="state"
                  //   placeholder="Password"
                  type="text"
                  label="State"
                  disabled
                  component={MyField}
                />
              </div>
              <ErrorMessage name="state" component="div" />

              <div className="col-12 mt-2">
                <Field
                  name="pincode"
                  //   placeholder="Password"
                  type="number"
                  label="Pincode"
                  component={MyField}
                />
              </div>
              <ErrorMessage name="pincode" component="div" />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Save Address
              </Button>
            </Form>
          </Paper>
        </div>
      )}
    </Formik>
  );
};
