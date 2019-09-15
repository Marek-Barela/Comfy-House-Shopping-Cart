import React from "react";
import {
  increaseAmountOfProducts,
  decreaseAmountOfProducts
} from "../../actions/productsCartActions";
import { connect } from "react-redux";
import styles from "./index.module.css";

const ShoppingCartItem = props => {
  const {
    id,
    title,
    price,
    image,
    quantity,
    increaseAmountOfProducts,
    decreaseAmountOfProducts
  } = props;
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
        <span
          className="fas fa-chevron-up"
          onClick={() => increaseAmountOfProducts(id)}
        ></span>
        <p className={size}>{quantity}</p>
        <span
          className="fas fa-chevron-down"
          onClick={() => decreaseAmountOfProducts(id)}
        ></span>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  increaseAmountOfProducts,
  decreaseAmountOfProducts
};

export default connect(
  null,
  mapDispatchToProps
)(ShoppingCartItem);
