import { Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { DataTable } from "./DataTable";
import { useHistory } from "react-router-dom";
const apis = require("../../apis/apis");
export const ProductList = () => {
  const [productList, setProductList] = useState([]);
  const history = useHistory();
  useEffect(() => {
    const fetchData = async () => {
      const res = await apis.getApiCall("/product/list", {});
      if (res.productList.length > 0) {
        setProductList(res.productList);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="container pt-5" style={{ textAlign: "left" }}>
      <div className="col-12">
        <Button
          onClick={() => {
            history.push("/seller/addproduct");
          }}
        >
          Add Product
        </Button>
      </div>
      <div className="col-12 mt-3">
        <DataTable productList={productList} />
      </div>
    </div>
  );
};
