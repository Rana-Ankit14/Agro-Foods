import { createStore } from "redux";
import rootReducer from "../reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";

const saveStateToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (err) {
    console.log(err);
  }
};

const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};
const persistedState = loadStateFromLocalStorage();
const store = createStore(rootReducer, persistedState, composeWithDevTools());

store.subscribe(() => {
  saveStateToLocalStorage(store.getState());
});
export default store;
// export default createStore(rootReducer);
