import { SWITCH_PRODUCTS_CART_SIDEBAR } from "./types";

export const switchCartSidebar = payload => {
  return {
    type: SWITCH_PRODUCTS_CART_SIDEBAR,
    payload
  };
};
