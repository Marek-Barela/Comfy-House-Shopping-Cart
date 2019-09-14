import React from "react";
import styles from "./index.module.css";

const ProductItem = ({ title, price, image }) => {
  const { header, span, button, imageWrapper } = styles;
  return (
    <article>
      <div className={imageWrapper}>
        <img src={image} alt={title} />
        <button className={button}>
          <span className="fas fa-shopping-cart"></span>
          ADD TO CART
        </button>
      </div>
      <h3 className={header}>{title}</h3>
      <span className={span}>${price}</span>
    </article>
  );
};

export default ProductItem;
