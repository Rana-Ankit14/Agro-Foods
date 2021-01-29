import React from "react";

export const Images = ({ source, alt, height = 50, width = 50 }) => {
  return <img src={source} alt={alt} height={height} width={width} />;
};
