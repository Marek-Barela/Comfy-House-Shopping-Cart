import { SWITCH_PRODUCTS_CART_SIDEBAR, ADD_NEW_PRODUCT_TO_CART } from "./types";

export const switchCartSidebar = payload => {
  return {
    type: SWITCH_PRODUCTS_CART_SIDEBAR,
    payload
  };
};

export const onProductAdded = payload => {
  return {
    type: ADD_NEW_PRODUCT_TO_CART,
    payload
  };
};
