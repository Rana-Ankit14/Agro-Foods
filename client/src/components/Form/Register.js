import {
  Avatar,
  Button,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import { MyField } from "./MyField";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
    // backgroundColor: "red",
    minHeight: "50vh",
    minWidth: "40vw",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    // align: center,
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

export const Register = ({ handleUserRegistration, errorMessage }) => {
  const classes = useStyles();

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        phoneNo: "",
        confirmPassword: "",
      }}
      onSubmit={handleUserRegistration}
      validate={(values) => {
        const errors = {};

        // email validation
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid Email";
        }
        // phone no validation
        if (!values.phoneNo) {
          errors.phoneNo = "Required";
        } else if (
          //   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.phoneNo)
          !/^\d{10}$/.test(values.phoneNo)
        ) {
          errors.phoneNo = "Invalid Phone Number";
        }
        // name validation
        if (!values.firstName) {
          errors.firstName = "Required";
        }
        if (!values.lastName) {
          errors.lastName = "Required";
        }
        // password validation
        if (!values.password) {
          errors.password = "Required";
        }
        // confirm password
        if (!values.confirmPassword) {
          errors.confirmPassword = "Required";
        } else if (values.password !== values.confirmPassword) {
          errors.confirmPassword = "Password does not match";
          errors.password = "Password does not match";
        }
        return errors;
      }}
    >
      {({ values, handleChange, errors, touched, handleBlur }) => (
        <div className="container justify-content-center d-flex pt-5">
          <Paper className={classes.paper}>
            <Form className={classes.form}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign Up
              </Typography>
              {errorMessage.status ? (
                <small className="text-danger h6">{errorMessage.message}</small>
              ) : (
                <></>
              )}

              <div className="col-sm-10 col-12 mt-2 mb-2">
                <Field
                  name="firstName"
                  //   placeholder="Phone Number"
                  type="text"
                  label="First Name"
                  component={MyField}
                />
              </div>
              <ErrorMessage
                name="firstName"
                component="div"
                style={{ color: "red" }}
              />

              <div className="col-sm-10 col-12 mt-2 mb-2">
                <Field
                  name="lastName"
                  //   placeholder="Phone Number"
                  type="text"
                  label="Last Name"
                  component={MyField}
                />
              </div>
              <ErrorMessage
                name="lastName"
                component="div"
                style={{ color: "red" }}
              />

              <div className="col-sm-10 col-12 mt-2 mb-2">
                <Field
                  name="phoneNo"
                  //   placeholder="Phone Number"
                  type="text"
                  label="Phone Number"
                  component={MyField}
                />
              </div>
              <ErrorMessage
                name="phoneNo"
                component="div"
                style={{ color: "red" }}
              />

              <div className="col-sm-10 col-12 mt-2 mb-2">
                <Field
                  name="email"
                  //   placeholder="Phone Number"
                  type="text"
                  label="Email"
                  component={MyField}
                />
              </div>
              <ErrorMessage
                name="email"
                component="div"
                style={{ color: "red" }}
              />
              <div className="col-sm-10 col-12 mt-2 mb-2">
                <Field
                  name="password"
                  //   placeholder="Password"
                  type="password"
                  label="Password"
                  component={MyField}
                />
              </div>
              <ErrorMessage
                name="password"
                component="div"
                style={{ color: "red" }}
              />
              <div className="col-sm-10 col-12 mt-2 mb-2">
                <Field
                  name="confirmPassword"
                  //   placeholder="Password"
                  type="password"
                  label="Confirm Password"
                  component={MyField}
                />
              </div>
              <ErrorMessage
                name="confirmPassword"
                component="div"
                style={{ color: "red" }}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign Up
              </Button>
              <Grid container>
                {/* <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid> */}
                <Grid item>
                  <Link to="/login" variant="body2">
                    {"Already have an account? Sign In"}
                  </Link>
                </Grid>
              </Grid>
              {/* <pre>{JSON.stringify(values, null, 2)}</pre>
              <pre>{JSON.stringify(errorMessage, null, 2)}</pre> */}
            </Form>
          </Paper>
        </div>
      )}
    </Formik>
  );
};
