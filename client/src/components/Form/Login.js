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

export const Login = ({ handleUserLogin, errorMessage }) => {
  const classes = useStyles();

  return (
    <Formik
      initialValues={{ phoneNo: "", password: "" }}
      onSubmit={handleUserLogin}
      validate={(values) => {
        const errors = {};

        // phone no validation
        if (!values.phoneNo) {
          errors.phoneNo = "Required";
        } else if (
          //   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.phoneNo)
          !/^\d{10}$/.test(values.phoneNo)
        ) {
          errors.phoneNo = "Invalid Phone Number";
        }
        // password validation
        if (!values.password) {
          errors.password = "Required";
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
                Log in
              </Typography>
              {errorMessage.status ? (
                <small className="text-danger h6">{errorMessage.message}</small>
              ) : (
                <></>
              )}
              <div>
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
              <div>
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

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
              </Button>
              <Grid container>
                {/* <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid> */}
                <Grid item>
                  <Link to="/register" variant="body2">
                    {"Don't have an account? Sign Up"}
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
