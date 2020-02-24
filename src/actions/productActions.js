import {
  FETCH_PRODUCTS,
  FILTER_PRODUCTS_BY_SIZE,
  FILTER_PRODUCTS_BY_PRICE
} from "./types";

export const fetchProducts = () => dispatch => {
  fetch("http://localhost:8000/products/")
    .then(res => res.json())
    .then(data => {
      return dispatch({
        type: FETCH_PRODUCTS,
        payload: data
      });
    });
};

export const filterProducts = (products, size) => dispatch => {
  return dispatch({
    type: FILTER_PRODUCTS_BY_SIZE,
    payload: {
      size: size,
      items:
        size === ""
          ? products
          : products.filter(
              product => product.availableSizes.indexOf(size.toUpperCase()) >= 0
            )
    }
  });
};

export const sortProducts = (items, sort) => dispatch => {
  const products = [...items];
  if (sort !== "") {
    products.sort((s, f) =>
      sort === "lowest"
        ? s.price > f.price
          ? 1
          : -1
        : s.price < f.price
        ? 1
        : -1
    );
  } else {
    products.sort((s, f) => (s.id > f.id ? 1 : -1));
  }
  return dispatch({
    type: FILTER_PRODUCTS_BY_PRICE,
    payload: {
      sort: sort,
      items: products
    }
  });
};
