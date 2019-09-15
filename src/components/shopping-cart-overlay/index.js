import React from "react";
import { switchCartSidebar } from "../../actions/productsCartActions";
import { getProductsCart } from "../../selectors/productsCartSelector";
import { connect } from "react-redux";
import styles from "./index.module.css";

const ShoppingCartOverlay = ({ productsCart, switchCartSidebar }) => {
  const {
    overlay,
    cartContainer,
    closeCartButton,
    cartContent,
    cartFooter,
    clearButton
  } = styles;
  const { cartIsOpen } = productsCart;
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
          </div>
          <div className={cartFooter}>
            <h4>Your Total : $0</h4>
            <button className={clearButton}>CLEAR CART</button>
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
  switchCartSidebar
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCartOverlay);
