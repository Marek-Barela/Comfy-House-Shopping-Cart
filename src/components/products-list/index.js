import React from "react";
import ProductItem from "../products-item";
import productsData from "../../data/products.json";
import styles from "./index.module.css";

const ProductsList = () => {
  const { wrapper } = styles;
  return (
    <div className={wrapper}>
      {productsData.products.map(product => {
        return <ProductItem key={product.id} {...product} />;
      })}
    </div>
  );
};

export default ProductsList;
