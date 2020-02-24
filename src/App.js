import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Products from "./components/Products";
import Filter from "./components/Filter";
import Basket from "./components/Basket";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Ecommerce Shopping Cart Application</h1>
        <hr />
        <div className="row">
          <div className="col-md-8">
            <Filter />
            <hr />
            <Products />
          </div>
          <div className="col-md-4">
            <Basket />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
