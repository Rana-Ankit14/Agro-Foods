import React from "react";
import { ProductForm } from "./Form/ProductForm";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
const apis = require("../../apis/apis");

export const AddProduct = () => {
  const user = useSelector((state) => state.user);
  const history = useHistory();

  const handleSaveProduct = async (values) => {
    const res = await apis.postApiCall(
      "/seller/addProduct",
      {
        name: values.name,
        price: values.price,
        weight: values.weight,
        weightType: values.weightType,
        description: values.description,
        coverImage: values.coverImage,
        images: values.images,
      },
      user
    );
    console.log(res);
    history.goBack();
  };
  return (
    <div>
      <ProductForm
        handleSaveProduct={handleSaveProduct}
        heading="Add Product"
      />
    </div>
  );
};
