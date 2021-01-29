import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import { CardComponent } from "./sharedSubComponents/CardComponent";
import { PaginationComponent } from "./sharedSubComponents/PaginationComponent";
import Typography from "@material-ui/core/Typography";
const apis = require("../apis/apis");

export const Products = () => {
  const history = useHistory();
  const { search } = useParams();
  const [productList, setProductList] = useState([]);
  const [sort, setSort] = useState(null);

  // set these three for pagination
  const [perPage, setPerPage] = useState(6);
  const [totalPage, setTotalPage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchData = async () => {
    const res = await apis.getApiCall("/product/list", {
      search,
      page: currentPage,
      limit: perPage,
      sort: sort,
    });
    if (res.productList.length > 0) {
      setProductList(res.productList);
      setTotalPage(res.pagination.totalPage);
    }
  };
  useEffect(() => {
    fetchData();
  }, [search, currentPage, sort]);

  const handleClick = (page) => {
    console.log("handle click" + page);
    setCurrentPage(page);
  };

  const Product = () => {
    return (
      <div className="container" style={{ textAlign: "left" }}>
        <div className="d-flex justify-content-center">
          <div className="col-12 row">
            {productList.map((item) => (
              <div
                key={item.id}
                className="col-md-4  col-12 mt-5 justify-content-center d-flex"
                // onClick={() => {
                //   history.push(`/productDetail/${item.id}`);
                // }}
              >
                <CardComponent item={item} />
              </div>
            ))}
          </div>
        </div>
        <div className="d-flex justify-content-center mt-5">
          <PaginationComponent
            perPage={perPage}
            totalPage={totalPage}
            currentPage={currentPage}
            handleClick={handleClick}
          />
        </div>
      </div>
    );
  };

  const Filter = () => {
    return (
      <div style={{ maxWidth: 300 }}>
        <Typography variant="button" display="block" gutterBottom align="left">
          Sort By Price
        </Typography>
        <ul style={{ listStyleType: "none" }}>
          <li
            style={{ cursor: "pointer" }}
            onClick={() => setSort({ sortOption: ["price", "ASC"] })}
          >
            Low To High
          </li>
          <li
            style={{ cursor: "pointer" }}
            onClick={() => setSort({ sortOption: ["price", "DESC"] })}
          >
            High To Low
          </li>
        </ul>
      </div>
    );
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2 col-12 pt-5 border-right">
          <Filter />
        </div>
        <div className="col-md-10 col-12">
          <Product />
        </div>
      </div>
    </div>
  );
};
