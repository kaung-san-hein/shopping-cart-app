import React from "react";
import Util from "../Util";
import { connect } from "react-redux";
import { removeToCart } from "../actions/cartActions";

const Basket = ({ cartItems, handleRemoveFromCart }) => {
  return (
    <div className="alert alert-info">
      {cartItems.length === 0 ? (
        "Basket is empty"
      ) : (
        <div>You have {cartItems.length} products in the basket.</div>
      )}
      {cartItems.length > 0 && (
        <div>
          <ul>
            {cartItems.map((product, index) => {
              return (
                <li key={index}>
                  <b>{product.title}</b> X {product.count} ={" "}
                  {Util.formatCurrency(product.price * product.count)}
                  <button
                    className="btn btn-danger"
                    onClick={() => handleRemoveFromCart(cartItems, product)}
                  >
                    X
                  </button>
                </li>
              );
            })}
          </ul>
          Total:{" "}
          {Util.formatCurrency(
            cartItems.reduce(
              (total, current) => total + current.price * current.count,
              0
            )
          )}
          <br />
          <button
            className="btn btn-primary"
            onClick={() => alert("Checkout needs to implement...")}
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cartItems: state.cartItems.cartItems
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleRemoveFromCart: (items, product) =>
      dispatch(removeToCart(items, product))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
