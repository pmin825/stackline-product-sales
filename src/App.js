import React from "react";
import ProductIndexContainer from "./components/products/product_index_container";
import { Route } from "react-router-dom";

import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <div className="navbar">
        <img src="./stackline_logo.svg"></img>
      </div>
      <Route path="/" component={ProductIndexContainer} />
    </div>
  );
};

export default App;
