import {
  Button,
  makeStyles,
  Grid,
  Avatar,
  Typography,
  Paper,
  TextareaAutosize,
} from "@material-ui/core";
import { Field, Form, Formik, ErrorMessage } from "formik";
import HomeSharpIcon from "@material-ui/icons/HomeSharp";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { MyField } from "./MyField";
const apis = require("../../../apis/apis");

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
    // // backgroundColor: "red",
    minHeight: "50vh",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#000",
    // theme.palette.secondary.main,
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

export const ProductForm = ({ handleSaveProduct, product = null, heading }) => {
  const classes = useStyles();
  const imageURL =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png";
  const [errorMessage, setErrorMessage] = useState({
    status: false,
    message: "",
  });
  useEffect(() => {
    console.log({ product });
  }, []);

  return (
    <Formik
      initialValues={{
        id: product == null ? "" : product.id,
        name: product == null ? "" : product.name,
        description: product == null ? "" : product.description,
        coverImage: imageURL,
        images: [imageURL],
        price: product == null ? "" : product.price,
        weight: product == null ? "" : product.weight,
        weightType: product == null ? "" : product.weightType,
      }}
      onSubmit={handleSaveProduct}
      validate={(values) => {
        const errors = {};

        if (!values.name) {
          errors.name = "Required";
        }
        if (!values.description) {
          errors.description = "Required";
        }

        if (!values.price) {
          errors.price = "Required";
        } else if (!/^\d+$/.test(values.price)) {
          errors.price = "Only Numbers";
        }
        if (!values.weight) {
          errors.weight = "Required";
        } else if (!/^\d+$/.test(values.weight)) {
          errors.weight = "Only Numbers";
        }
        if (!values.weightType) {
          errors.weightType = "Required";
        } else if (values.weightType !== "kg" && values.weightType !== "gram") {
          errors.weightType = "kg or gram";
        }
        return errors;
      }}
    >
      {({ values, handleChange, errors, touched, handleBlur }) => (
        <div className="container justify-content-center pt-5">
          <Form className={classes.form}>
            <Typography component="h1" variant="h6">
              {/* Enter  */}
              {heading}
            </Typography>
            {errorMessage.status ? (
              <small className="text-danger h6">{errorMessage.message}</small>
            ) : (
              <></>
            )}
            <div className="row justify-content-center">
              <div className="row col-sm-6 col-12 ">
                <div className="col-sm-6 col-12 mt-2">
                  <Field
                    name="name"
                    type="text"
                    label="Product Name"
                    component={MyField}
                  />
                  <ErrorMessage name="name" component="div" />
                </div>
                <div className="col-sm-6 col-12 mt-2">
                  <Field
                    name="price"
                    //   placeholder="Password"
                    type="text"
                    label="Price"
                    component={MyField}
                  />
                  <ErrorMessage name="price" component="div" />
                </div>

                <div className="col-sm-6 col-12 mt-2">
                  <Field
                    name="weight"
                    //   placeholder="Password"
                    type="text"
                    label="Weight"
                    component={MyField}
                  />
                  <ErrorMessage name="weight" component="div" />
                </div>
                <div className="col-sm-6 col-12 mt-2">
                  <Field
                    name="weightType"
                    //   placeholder="Password"
                    type="text"
                    label="weight Type in kg or gram"
                    component={MyField}
                  />
                  <ErrorMessage name="weightType" component="div" />
                </div>

                <div className="col-12 mt-2">
                  <Field
                    name="description"
                    //   placeholder="Password"
                    type="text"
                    label="Description"
                    component={MyField}
                  />
                  <ErrorMessage name="description" component="div" />
                </div>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Save Product
                </Button>
              </div>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};
