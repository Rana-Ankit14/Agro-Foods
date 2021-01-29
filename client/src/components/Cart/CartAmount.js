import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const CartAmount = () => {
  const totalOrderCost = useSelector((state) => state.totalOrderCost);
  return (
    <div className="col-12">
      <h5 className="mb-3">The total amount of</h5>

      <ul className="list-group list-group-flush">
        <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
          Amount
          <span>&#8377;&nbsp;{totalOrderCost}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center px-0">
          Discount
          <span>NA</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
          <div>
            <strong>The total amount of</strong>
          </div>
          <span>
            <strong>&#8377;&nbsp;{totalOrderCost}</strong>
          </span>
        </li>
      </ul>

      {/* <button type="button" className="btn btn-primary btn-block"> */}
      <Link to="/checkout" type="button" className="btn btn-primary btn-block">
        Go to checkout
      </Link>
      {/* </button> */}
    </div>
  );
};
