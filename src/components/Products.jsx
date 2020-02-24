import React, { Component } from "react";
import Util from "../Util";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/productActions";
import { addToCart } from "../actions/cartActions";

class Products extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }
  render() {
    const { products, handleAddToCart, cartItems } = this.props;
    return (
      <div className="row">
        {products.map((product, index) => {
          return (
            <div className="col-md-4" key={index}>
              <div className="thumbnail text-center">
                <a href={`#${product.id}`}>
                  <img
                    src={`/products/${product.sku}_2.jpg`}
                    alt={product.title}
                  />

                  <p>{product.title}</p>
                </a>
                <div>
                  <b>{Util.formatCurrency(product.price)}</b>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleAddToCart(cartItems, product)}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products.filteredItems,
    cartItems: state.cartItems.cartItems
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
    handleAddToCart: (items, product) => dispatch(addToCart(items, product))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
