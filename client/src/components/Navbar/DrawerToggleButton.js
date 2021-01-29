import React from "react";
import "./DrawerToggleButton.css";

export const DrawerToggleButton = ({ click }) => {
  return (
    <button className="toggle_button" onClick={click}>
      <div className="toggle_button_line" />
      <div className="toggle_button_line" />
      <div className="toggle_button_line" />
    </button>
  );
};
