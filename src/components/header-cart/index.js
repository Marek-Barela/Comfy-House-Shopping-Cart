import React from "react";
import { switchCartSidebar } from "../../actions/productsCartActions";
import { getProductsCart } from "../../selectors/productsCartSelector";
import { connect } from "react-redux";
import styles from "./index.module.css";

const Cart = ({ switchCartSidebar, productsCart }) => {
  const { cart } = styles;
  const { cartIsOpen } = productsCart;
  return (
    <div className={cart} onClick={() => switchCartSidebar(!cartIsOpen)}>
      <span className="fas fa-cart-plus"></span>
    </div>
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
)(Cart);
