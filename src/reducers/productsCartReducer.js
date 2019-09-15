import {
  SWITCH_PRODUCTS_CART_SIDEBAR,
  ADD_NEW_PRODUCT_TO_CART
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
      return {
        ...state,
        cartItems: newState.cartItems.concat(payload)
      };
    }
    default: {
      return state;
    }
  }
};
