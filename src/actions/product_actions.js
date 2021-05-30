import * as ProductAPIUtil from "../util/products_api_util";

export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";

const receiveProducts = (products) => ({
  type: RECEIVE_PRODUCTS,
  products,
});

export const fetchProducts = () => (dispatch) => {
  return ProductAPIUtil.fetchProducts().then((payload) =>
    dispatch(receiveProducts(payload))
  );
};
