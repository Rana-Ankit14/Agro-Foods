import { TextField } from "@material-ui/core";
import React from "react";
// import { FieldProps } from "formik";

export const MyField = ({ label, type, field, form, disabled = false }) => {
  if (disabled) {
    return (
      <TextField
        label={label}
        type={type}
        {...field}
        disabled
        className="col-12"
      />
    );
  } else {
    return (
      <TextField label={label} type={type} {...field} className="col-12" />
    );
  }
};
