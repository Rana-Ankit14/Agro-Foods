import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
  FormLabel,
} from "@material-ui/core";
import { LoadingCircularIndicator } from "../sharedSubComponents/LoadingCircularIndicator";

const AddressLabel = ({ address }) => {
  return (
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
  );
};
const AddressListRadio = ({ address }) => {
  return (
    <Paper
      elevation={3}
      style={{
        display: "flex",
        paddingTop: 5,
        paddingBottom: 5,
      }}
      className="col-12 m-1"
    >
      <FormControlLabel
        value={address.id.toString()}
        control={<Radio color="primary" />}
        // className="col-12"
        label={<AddressLabel address={address} />}
        style={{
          flex: 1,
          margin: 0,
          padding: 0,
        }}
      />
    </Paper>
  );
};

export const SavedAddress = ({
  addressList,
  loading,
  setSelectedAddress,
  selectedAddress,
  handlePlaceOrder,
}) => {
  const handleAddressSelectedChange = (e) => {
    setSelectedAddress(e.target.value);
  };

  const PlacedOrder = () => {
    if (selectedAddress == "") {
      return (
        <Button variant="contained" color="primary" disabled>
          Placed Order
        </Button>
      );
    } else {
      return (
        <Button variant="contained" color="primary" onClick={handlePlaceOrder}>
          Placed Order
        </Button>
      );
    }
  };

  const AddressList = () => {
    if (addressList.length < 1) {
      return (
        <div>
          <h4 style={{ fontSize: "3vh", color: "grey" }}>No Address Found</h4>
        </div>
      );
    } else {
      return (
        <div>
          <FormControl component="fieldset" className="col-12">
            <FormLabel
              component="legend"
              style={{ fontSize: 24, color: "#000" }}
            >
              Saved Address
            </FormLabel>
            <RadioGroup
              aria-label="address"
              name="address"
              value={selectedAddress}
              onChange={handleAddressSelectedChange}
            >
              {addressList.map((address) => {
                return <AddressListRadio key={address.id} address={address} />;
              })}
            </RadioGroup>
          </FormControl>
          <div className="d-flex justify-content-end mt-5">
            <PlacedOrder />
          </div>
        </div>
      );
    }
  };
  return (
    <>
      {loading ? (
        <div>
          <LoadingCircularIndicator />
        </div>
      ) : (
        <AddressList />
      )}
    </>
  );
};
