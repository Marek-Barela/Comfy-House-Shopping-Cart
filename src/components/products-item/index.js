import React from "react";
import { onProductAdded } from "../../actions/productsCartActions";
import { connect } from "react-redux";
import styles from "./index.module.css";

const ProductItem = props => {
  const { header, span, button, imageWrapper } = styles;
  const { title, price, image, onProductAdded } = props;
  return (
    <article>
      <div className={imageWrapper}>
        <img src={image} alt={title} />
        <button className={button} onClick={() => onProductAdded(props)}>
          <span className="fas fa-shopping-cart"></span>
          ADD TO CART
        </button>
      </div>
      <h3 className={header}>{title}</h3>
      <span className={span}>${price}</span>
    </article>
  );
};

const mapStateToProps = {
  onProductAdded
};

export default connect(
  null,
  mapStateToProps
)(ProductItem);
