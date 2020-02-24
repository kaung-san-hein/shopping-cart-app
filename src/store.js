import { createStore } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { compose } from "redux";

const initialState = {};
if (localStorage.getItem("cartItems")) {
  initialState.cartItems = {
    cartItems: JSON.parse(localStorage.getItem("cartItems"))
  };
}
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(
  rootReducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
