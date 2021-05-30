# Stackline Product Sales

[Stackline Product Sales](https://pmin825.github.io/stackline-product-sales/#/ "Stackline Product Sales"), is a web application that displays weekly product sales information for a given product.

## Technologies

- React

- Redux

- Javascript

## Code Snippet

Data is fetched with an API call, that pulls the information from a JSON file we have stored locally.

```js
export const fetchProducts = async () => {
  const response = await fetch("./stackline_data.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  const data = await response.json();
  return data;
};
```

In the ProductIndexItem component, we generate a dynamic table that utilizes the fetched data.

```js
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
              {week.weekEnding.slice(5) + "-" + week.weekEnding.slice(2, 4)}
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
```
