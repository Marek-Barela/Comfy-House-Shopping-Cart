import {
  SWITCH_PRODUCTS_CART_SIDEBAR,
  ADD_NEW_PRODUCT_TO_CART,
  REMOVE_PRODUCTS_FROM_CART,
  INCREASE_AMOUNT_OF_PRODUCTS,
  DECREASE_AMOUNT_OF_PRODUCTS,
  REMOVE_SINGLE_PRODUCT_FROM_CART
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
    case INCREASE_AMOUNT_OF_PRODUCTS: {
      const productItem = newState.cartItems.filter(product => {
        return product.id === payload;
      });
      productItem[0].quantity++;
      return {
        ...state,
        cartItems: [...newState.cartItems]
      };
    }
    case DECREASE_AMOUNT_OF_PRODUCTS: {
      const MINIMAL_AMOUNT_OF_ITEMS = 1;
      const productItem = newState.cartItems.filter(product => {
        return product.id === payload;
      });
      if (productItem[0].quantity > MINIMAL_AMOUNT_OF_ITEMS) {
        productItem[0].quantity--;
      }
      return {
        ...state,
        cartItems: [...newState.cartItems]
      };
    }
    case REMOVE_SINGLE_PRODUCT_FROM_CART: {
      const filtredProducts = newState.cartItems.filter(product => {
        return product.id !== payload;
      });
      return {
        ...state,
        cartItems: filtredProducts
      };
    }
    default: {
      return state;
    }
  }
};
