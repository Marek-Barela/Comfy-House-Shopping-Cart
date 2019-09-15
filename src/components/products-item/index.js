import React from "react";
import { getProductsCart } from "../../selectors/productsCartSelector";
import {
  onProductAdded,
  switchCartSidebar
} from "../../actions/productsCartActions";
import { connect } from "react-redux";
import styles from "./index.module.css";

const AddProductToCartButton = ({ onProductAdded, product }) => {
  const { button } = styles;
  // Extract specific elements
  const { id, title, price, image } = product;
  const productProps = { id, title, price, image };
  return (
    <button className={button} onClick={() => onProductAdded(productProps)}>
      <span className="fas fa-shopping-cart"></span>
      ADD TO CART
    </button>
  );
};

const ProductAlreadyInCartButton = ({ products, switchCartSidebar }) => {
  const { button } = styles;
  const { cartIsOpen } = products;
  return (
    <button className={button} onClick={() => switchCartSidebar(!cartIsOpen)}>
      IN CART
    </button>
  );
};

const ProductItem = props => {
  const { header, span, imageWrapper } = styles;
  const {
    id,
    title,
    price,
    image,
    onProductAdded,
    products,
    switchCartSidebar
  } = props;
  const productExist = products.cartItems.find(item => item.id === id);
  return (
    <article>
      <div className={imageWrapper}>
        <img src={image} alt={title} />
        {productExist === undefined ? (
          <AddProductToCartButton
            onProductAdded={onProductAdded}
            product={props}
          />
        ) : (
          <ProductAlreadyInCartButton
            products={products}
            switchCartSidebar={switchCartSidebar}
          />
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
  onProductAdded,
  switchCartSidebar
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductItem);
