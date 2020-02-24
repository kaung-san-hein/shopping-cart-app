import React from "react";
import { connect } from "react-redux";
import { filterProducts, sortProducts } from "../actions/productActions";

const Filter = ({
  products,
  filterItems,
  sort,
  sortProducts,
  size,
  filterProducts
}) => {
  return (
    <div className="row">
      <div className="col-md-4">{filterItems.length} products found.</div>
      <div className="col-md-4">
        <label htmlFor="price">
          Order by
          <select
            id="price"
            className="form-control"
            value={sort}
            onChange={event => sortProducts(filterItems, event.target.value)}
          >
            <option value="">Select</option>
            <option value="lowest">lowest to highest</option>
            <option value="highest">highest to lowest</option>
          </select>
        </label>
      </div>
      <div className="col-md-4">
        <label htmlFor="size">
          Filter size
          <select
            id="size"
            className="form-control"
            value={size}
            onChange={event => filterProducts(products, event.target.value)}
          >
            <option value="">All</option>
            <option value="x">XS</option>
            <option value="s">S</option>
            <option value="m">M</option>
            <option value="l">L</option>
            <option value="xl">XL</option>
            <option value="xxl">XXL</option>
          </select>
        </label>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    products: state.products.items,
    filterItems: state.products.filteredItems,
    size: state.products.size,
    sort: state.products.sort
  };
};

const mapDispatchToProps = dispatch => {
  return {
    filterProducts: (products, size) =>
      dispatch(filterProducts(products, size)),
    sortProducts: (filterProducts, sort) =>
      dispatch(sortProducts(filterProducts, sort))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
