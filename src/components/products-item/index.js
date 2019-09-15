import React from "react";
import { getProductsCart } from "../../selectors/productsCartSelector";
import { onProductAdded } from "../../actions/productsCartActions";
import { connect } from "react-redux";
import styles from "./index.module.css";

const AddProductToCartButton = ({ onProductAdded, props }) => {
  const { button } = styles;
  const { id, title, price, image } = props;
  const productProps = { id, title, price, image };
  return (
    <button className={button} onClick={() => onProductAdded(productProps)}>
      <span className="fas fa-shopping-cart"></span>
      ADD TO CART
    </button>
  );
};

const ProductAlreadyInCartButton = () => {
  const { button } = styles;
  return <button className={button}>IN CART</button>;
};

const ProductItem = props => {
  const { header, span, imageWrapper } = styles;
  const { id, title, price, image, onProductAdded, products } = props;
  const productExist = products.cartItems.find(item => item.id === id);
  return (
    <article>
      <div className={imageWrapper}>
        <img src={image} alt={title} />
        {productExist === undefined ? (
          <AddProductToCartButton
            onProductAdded={onProductAdded}
            props={props}
          />
        ) : (
          <ProductAlreadyInCartButton />
        )}
      </div>
      <h3 className={header}>{title}</h3>
      <span className={span}>${price}</span>
    </article>
  );
};

const mapStateToProps = state => ({
  products: getProductsCart(state)
});

const mapDispatchToProps = {
  onProductAdded
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductItem);
