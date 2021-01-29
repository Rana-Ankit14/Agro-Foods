import store from "../store";

const initialState = {
  user: null,
  cart: [],
  totalOrderCost: 0,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_LOGIN":
      return {
        ...state,
        user: action.payload,
      };
    case "USER_LOGOUT":
      return {
        ...state,
        user: action.payload,
      };
    case "ADD_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
        totalOrderCost:
          parseInt(action.payload.price) + parseInt(state.totalOrderCost),
      };
    case "REMOVE_ITEM_FROM_CART":
      console.log(action.payload);
      return {
        ...state,
        totalOrderCost:
          parseInt(state.totalOrderCost) - parseInt(action.payload.totalPrice),
        cart: state.cart.filter((cart) => cart.id !== action.payload.id),
      };
    case "DECREASE_ITEM_QUANTITY":
      const updatedDecreaseCart = [];
      state.cart.forEach((cartItem) => {
        if (cartItem.id !== action.payload.id) {
          updatedDecreaseCart.push(cartItem);
        } else {
          cartItem["quantity"] = --cartItem.quantity;
          cartItem["totalPrice"] =
            parseInt(cartItem.totalPrice) - parseInt(cartItem.price);
          if (cartItem.quantity > 0) {
            updatedDecreaseCart.push(cartItem);
          }
        }
      });
      return {
        ...state,
        totalOrderCost:
          parseInt(state.totalOrderCost) - parseInt(action.payload.price),
        cart: updatedDecreaseCart,
      };
    case "INCREASE_ITEM_QUANTITY":
      const updatedIncreaseCart = [];
      state.cart.forEach((cartItem) => {
        if (cartItem.id !== action.payload.id) {
          updatedIncreaseCart.push(cartItem);
        } else {
          cartItem["quantity"] = ++cartItem.quantity;
          cartItem["totalPrice"] =
            parseInt(cartItem.totalPrice) + parseInt(cartItem.price);

          updatedIncreaseCart.push(cartItem);
        }
      });
      return {
        ...state,
        totalOrderCost:
          parseInt(state.totalOrderCost) + parseInt(action.payload.price),
        cart: updatedIncreaseCart,
      };
    case "PLACEORDER":
      return {
        ...state,
        cart: [],
        totalOrderCost: 0,
      };
    default:
      return state;
  }
};

export default rootReducer;
