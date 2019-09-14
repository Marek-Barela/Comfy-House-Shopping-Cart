import React from "react";
import ProductItem from "../products-item";
import styles from "./index.module.css";

const ProductsList = () => {
  const { wrapper } = styles;
  return (
    <div className={wrapper}>
      {testArray.map(product => {
        return <ProductItem key={product.id} {...product} />;
      })}
    </div>
  );
};

const testArray = [
  {
    id: 1,
    title: "Sample item",
    price: 19.99,
    image: "https://via.placeholder.com/270"
  },
  {
    id: 2,
    title: "Sample item",
    price: 19.99,
    image: "https://via.placeholder.com/270"
  },
  {
    id: 3,
    title: "sample item",
    price: 19.99,
    image: "https://via.placeholder.com/270"
  },
  {
    id: 4,
    title: "sample item",
    price: 19.99,
    image: "https://via.placeholder.com/270"
  },
  {
    id: 5,
    title: "Cample item",
    price: 19.99,
    image: "https://via.placeholder.com/270"
  },
  {
    id: 6,
    title: "sample item",
    price: 19.99,
    image: "https://via.placeholder.com/270"
  },
  {
    id: 7,
    title: "sample item",
    price: 19.99,
    image: "https://via.placeholder.com/270"
  },
  {
    id: 8,
    title: "sample item",
    price: 19.99,
    image: "https://via.placeholder.com/270"
  }
];

export default ProductsList;
