import { SWITCH_PRODUCTS_CART_SIDEBAR } from "../actions/types";

const initialState = {
  cartIsOpen: false
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SWITCH_PRODUCTS_CART_SIDEBAR: {
      return {
        ...state,
        cartIsOpen: payload
      };
    }
    default: {
      return state;
    }
  }
};
