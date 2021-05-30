import React, { useState, useEffect } from "react";
import ProductIndexItem from "./product_index_item";

const ProductIndex = (props) => {
  useEffect(() => {
    props.fetchProducts();
  }, []);

  return (
    <div className="product-index-container">
      {props.products.map((product) => {
        return <ProductIndexItem key={product.id} product={product} />;
      })}
    </div>
  );
};

export default ProductIndex;
