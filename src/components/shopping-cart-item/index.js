import React from "react";
import styles from "./index.module.css";

const ShoppingCartItem = ({ title, price, image, quantity }) => {
  const {
    cartItem,
    cartImage,
    productName,
    cost,
    removeProduct,
    productFooter,
    size
  } = styles;
  return (
    <div className={cartItem}>
      <img className={cartImage} src={image} alt={title} />
      <div>
        <h5 className={productName}>{title}</h5>
        <h6 className={cost}>${price}</h6>
        <span className={removeProduct}>remove</span>
      </div>
      <div className={productFooter}>
        <span className="fas fa-chevron-up"></span>
        <p className={size}>{quantity}</p>
        <span className="fas fa-chevron-down"></span>
      </div>
    </div>
  );
};

export default ShoppingCartItem;
