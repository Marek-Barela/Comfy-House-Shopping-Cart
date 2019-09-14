import React from "react";
import SectionHeader from "../section-header";
import ProductsList from "../products-list";
import styles from "./index.module.css";

const Products = () => {
  const { container } = styles;
  return (
    <main>
      <section className={container}>
        <SectionHeader>Our Products</SectionHeader>
        <ProductsList />
      </section>
    </main>
  );
};

export default Products;
