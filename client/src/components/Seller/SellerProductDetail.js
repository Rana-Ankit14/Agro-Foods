import React, { useEffect, useState } from "react";
import { ProductForm } from "./Form/ProductForm";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router";
const apis = require("../../apis/apis");

export const SellerProductDetail = () => {
  const user = useSelector((state) => state.user);
  const history = useHistory();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const res = await apis.getApiCall("/product/detail", { id });
      setProduct(res.productDetail);
      console.log(res.productDetail);
    };

    fetchData();
  }, [id]);
  const handleUpdateProduct = async (values) => {
    const res = await apis.postApiCall(
      "/seller/updateProduct",
      {
        id: values.id,
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

  if (product == null) {
    return <h3>Loading ....</h3>;
  } else {
    return (
      <div>
        <ProductForm
          handleSaveProduct={handleUpdateProduct}
          heading="Product Detail"
          product={product}
        />
      </div>
    );
  }
};
