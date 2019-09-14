import React from "react";
import styles from "./index.module.css";

const Cart = () => {
  const { cart } = styles;
  return (
    <div className={cart}>
      <span className="fas fa-cart-plus"></span>
    </div>
  );
};

export default Cart;
