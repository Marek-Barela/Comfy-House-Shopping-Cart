import {
  SWITCH_PRODUCTS_CART_SIDEBAR,
  ADD_NEW_PRODUCT_TO_CART,
  REMOVE_PRODUCTS_FROM_CART,
  INCREASE_AMOUNT_OF_PRODUCTS,
  DECREASE_AMOUNT_OF_PRODUCTS
} from "./types";

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

export const removeItemsFromCart = () => {
  return {
    type: REMOVE_PRODUCTS_FROM_CART
  };
};

export const increaseAmountOfProducts = id => {
  return {
    type: INCREASE_AMOUNT_OF_PRODUCTS,
    payload: id
  };
};

export const decreaseAmountOfProducts = id => {
  return {
    type: DECREASE_AMOUNT_OF_PRODUCTS,
    payload: id
  };
};
