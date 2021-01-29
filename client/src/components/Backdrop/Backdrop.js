import React from "react";
import "./Backdrop.css";
export const Backdrop = ({ click }) => {
  return <div className="backdrop" onClick={click} />;
};
