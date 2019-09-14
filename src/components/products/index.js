import React from "react";
import SectionHeader from "../section-header";
import styles from "./index.module.css";

const Products = () => {
  const { container } = styles;
  return (
    <main>
      <section className={container}>
        <SectionHeader>Our Products</SectionHeader>
      </section>
    </main>
  );
};

export default Products;
