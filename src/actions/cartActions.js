import { ADD_TO_CART, REMOVE_FROM_CART } from "./types";

export const addToCart = (items, product) => dispatch => {
  const cartItems = [...items];
  let productAlreadyInCart = false;
  cartItems.forEach(item => {
    if (item.id === product.id) {
      productAlreadyInCart = true;
      item.count++;
    }
  });
  if (!productAlreadyInCart) {
    cartItems.push({ ...product, count: 1 });
  }
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  return dispatch({
    type: ADD_TO_CART,
    payload: { cartItems }
  });
};

export const removeToCart = (items, product) => dispatch => {
  const citems = [...items];
  const cartItems = citems.filter(item => item.id !== product.id);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  return dispatch({
    type: REMOVE_FROM_CART,
    payload: {
      cartItems
    }
  });
};
