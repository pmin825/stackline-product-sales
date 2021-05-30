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
