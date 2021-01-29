import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { AddToCart } from "./sharedSubComponents/AddToCart";
import { CarouselComponent } from "./sharedSubComponents/CarouselComponent";
import { LoadingCircularIndicator } from "./sharedSubComponents/LoadingCircularIndicator";
const apis = require("../apis/apis");

export const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const res = await apis.getApiCall("/product/detail", { id });
      setProduct(res.productDetail);
    };

    fetchData();
  }, [id]);

  if (product === null) {
    return <LoadingCircularIndicator />;
  } else {
    return (
      <div className="container p-5">
        <div className="row">
          <div className="col-md-6 col-12">
            <CarouselComponent
              autoplay={false}
              maxHeight={300}
              items={product.images}
            />
          </div>
          <div className="col-md-6 col-12" style={{ textAlign: "left" }}>
            <h3>{product.name}</h3>
            <hr
              style={{
                borderTopWidth: 2,
                borderTopStyle: "solid",
                borderTopColor: "darkgray",
              }}
            />
            <p>{product.description}</p>
            <p style={{ fontSize: 16 }}>
              MRP:{" "}
              <span style={{ fontWeight: "bold" }}>
                &#8377; {product.price}
              </span>
            </p>
            <AddToCart item={product} />
          </div>
        </div>
      </div>
    );
  }
};
