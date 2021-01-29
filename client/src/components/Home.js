import React, { useEffect, useState } from "react";
import { CardComponent } from "./sharedSubComponents/CardComponent";
import { CarouselComponent } from "./sharedSubComponents/CarouselComponent";
import { useHistory } from "react-router-dom";
const apis = require("../apis/apis");

export const Home = () => {
  const history = useHistory();
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await apis.getApiCall("/product/list", { limit: 6 });
      if (res.productList.length > 0) {
        setProductList(res.productList);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="">
      <CarouselComponent />
      <div className="col-12 ">
        <div className="col-12 mt-5">
          <h3
            style={{
              textDecorationStyle: "solid",
              textDecorationColor: "#6f6f6f",
              textDecorationWidth: 10,
              textDecorationLine: "underline",
            }}
          >
            New Products
          </h3>
        </div>
        <div
          className="container justify-content-center d-flex"
          style={{ textAlign: "left" }}
        >
          <div className="col-12 row">
            {productList.map((item) => (
              <div
                key={item.id}
                className="col-md-4 col-12 mt-5 justify-content-center d-flex"
                // onClick={() => {
                //   history.push(`/productDetail/${item.id}`);
                // }}
              >
                <CardComponent item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
