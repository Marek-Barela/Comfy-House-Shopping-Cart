import React from "react";
import ShoppingCartItem from "../shopping-cart-item";
import getFullItemsPrice from "../../utils/getFullItemsPrice";
import roundItemsPrice from "../../utils/roundItemsPrice";
import {
  switchCartSidebar,
  removeItemsFromCart
} from "../../actions/productsCartActions";
import { getProductsCart } from "../../selectors/productsCartSelector";
import { connect } from "react-redux";
import styles from "./index.module.css";

const ShoppingCartOverlay = ({
  productsCart,
  switchCartSidebar,
  removeItemsFromCart
}) => {
  const {
    overlay,
    cartContainer,
    closeCartButton,
    cartContent,
    cartFooter,
    clearButton
  } = styles;
  const { cartIsOpen, cartItems } = productsCart;
  const itemsPrice = getFullItemsPrice(cartItems);
  /** Because of how javascript work we need to round price of items
   * Otherwise price in the view will look like "$19.9900000004"
   */
  const roundedItemsPrice = roundItemsPrice(itemsPrice);
  return (
    cartIsOpen && (
      <div className={overlay}>
        <aside className={cartContainer}>
          <button
            className={closeCartButton}
            onClick={() => switchCartSidebar(!cartIsOpen)}
          >
            <span className="far fa-window-close"></span>
          </button>
          <div className={cartContent}>
            <h3>Your Cart</h3>
            {cartItems.map(product => {
              return <ShoppingCartItem key={product.id} {...product} />;
            })}
          </div>
          <div className={cartFooter}>
            <h4>Your Total : ${roundedItemsPrice}</h4>
            <button
              className={clearButton}
              onClick={() => removeItemsFromCart()}
            >
              CLEAR CART
            </button>
          </div>
        </aside>
      </div>
    )
  );
};

const mapStateToProps = state => ({
  productsCart: getProductsCart(state)
});

const mapDispatchToProps = {
  switchCartSidebar,
  removeItemsFromCart
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCartOverlay);
