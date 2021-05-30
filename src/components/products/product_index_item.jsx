import React from "react";

import "./product_styles.css";

const ProductIndexItem = ({ product }) => {
  return (
    <div className="index-container">
      <div className="product-info-container">
        <div className="product-info">
          <img src={product.image} alt="Shark Ninja"></img>
          <p className="product-title">{product.title}</p>
          <p className="product-subtitle">{product.subtitle}</p>
        </div>
        <div className="tags">
          {product.tags.map((tag) => {
            return <p key={tag}>{tag}</p>;
          })}
        </div>
      </div>
      <div className="sales-info-container">
        <table className="weekly-sales">
          <tbody>
            <tr>
              <th>WEEK ENDING</th>
              <th>RETAIL SALES</th>
              <th>WHOLESALE SALES</th>
              <th>UNITS SOLD</th>
              <th>RETAILER MARGIN</th>
            </tr>
            {product.sales.map((week) => {
              return (
                <tr key={week.weekEnding}>
                  <td>
                    {week.weekEnding.slice(5) +
                      "-" +
                      week.weekEnding.slice(2, 4)}
                  </td>
                  <td>${week.retailSales.toLocaleString("en-US")}</td>
                  <td>${week.wholesaleSales.toLocaleString("en-US")}</td>
                  <td>{week.unitsSold}</td>
                  <td>${week.retailerMargin.toLocaleString("en-US")}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductIndexItem;
