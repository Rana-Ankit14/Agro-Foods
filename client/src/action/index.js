export const userLogin = (user) => ({
  type: "USER_LOGIN",
  payload: user,
});

export const userLogout = () => ({
  type: "USER_LOGOUT",
  payload: null,
});

export const addToCart = (newItem) => ({
  type: "ADD_CART",
  payload: newItem,
});

export const removeItemFromCart = (removeItem) => ({
  type: "REMOVE_ITEM_FROM_CART",
  payload: removeItem,
});
export const increaseItemQuantity = (item) => ({
  type: "INCREASE_ITEM_QUANTITY",
  payload: item,
});
export const decreaseItemQuantiy = (item) => ({
  type: "DECREASE_ITEM_QUANTITY",
  payload: item,
});

export const placeOrder = () => ({
  type: "PLACEORDER",
  payload: null,
});
