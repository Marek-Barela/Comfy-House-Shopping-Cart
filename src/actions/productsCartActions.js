import { SWITCH_PRODUCTS_CART_SIDEBAR } from "./types";

export const switchCartSidebar = () => {
  return {
    type: SWITCH_PRODUCTS_CART_SIDEBAR,
    payload: true
  };
};
