import React from "react";
import styles from "./index.module.css";

const ShoppingCartItem = () => {
  const { cartItem, cartImage, title, price, removeProduct } = styles;
  return (
    <div className={cartItem}>
      <img
        className={cartImage}
        src="https://images.ctfassets.net/48t1s0p1dk0p/bUeEtzVzKegKpFg08kDtn/d3b9541630f14dbf16858a9ef2ace9cc/product-8.jpeg"
        alt="Product"
      />
      <div>
        <h5 className={title}>Table</h5>
        <h6 className={price}>$11,99</h6>
        <span className={removeProduct}>remove</span>
      </div>
    </div>
  );
};

export default ShoppingCartItem;
