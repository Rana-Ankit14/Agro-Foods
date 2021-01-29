import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeItemFromCart } from "../../action";
import { QuantiyButton } from "../sharedSubComponents/QuantiyButton";
export const CartItems = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="col-12" style={{}}>
      <div className="row mb-4">
        <div className="col-md-5 col-lg-3 col-xl-3">
          <div className="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
            <img
              className="img-fluid w-100"
              src={item.coverImage}
              alt="product"
              style={{ maxHeight: 200, maxWidth: 200 }}
            />
          </div>
        </div>
        <div className="col-md-7 col-lg-9 col-xl-9">
          <div>
            <div className="d-flex justify-content-between">
              <div>
                <h5>{item.name}</h5>
                <p className="mb-3 text-muted text-uppercase small">
                  {item.weight}&nbsp;{item.weightType}
                </p>
              </div>
              <div>
                <QuantiyButton item={item} />
                {/* </div> */}
                {/* <small
                    id="passwordHelpBlock"
                    class="form-text text-muted text-center"
                  >
                    (Note, 1 piece)
                  </small> */}
              </div>
            </div>

            <div className="d-flex justify-content-between align-items-center">
              <div>
                <Link
                  to="/cart"
                  type="button"
                  className="card-link-secondary small text-uppercase mr-3"
                  onClick={() => {
                    dispatch(removeItemFromCart(item));
                  }}
                >
                  <i className="fas fa-trash-alt mr-1"></i> Remove item
                </Link>
              </div>
              <p className="mb-0">
                <span>
                  <strong id="summary">&#8377;&nbsp;{item.totalPrice}</strong>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr className="mb-4" />
    </div>
  );
};
