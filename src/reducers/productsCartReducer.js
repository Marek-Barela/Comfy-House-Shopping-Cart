import {
  SWITCH_PRODUCTS_CART_SIDEBAR,
  ADD_NEW_PRODUCT_TO_CART,
  REMOVE_PRODUCTS_FROM_CART
} from "../actions/types";

const initialState = {
  cartIsOpen: false,
  cartItems: []
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  const newState = { ...state };

  switch (type) {
    case SWITCH_PRODUCTS_CART_SIDEBAR: {
      return {
        ...state,
        cartIsOpen: payload
      };
    }
    case ADD_NEW_PRODUCT_TO_CART: {
      const newItem = payload;
      newItem.quantity = 1;
      return {
        ...state,
        cartItems: newState.cartItems.concat(newItem)
      };
    }
    case REMOVE_PRODUCTS_FROM_CART: {
      return {
        ...state,
        cartItems: []
      };
    }
    default: {
      return state;
    }
  }
};
