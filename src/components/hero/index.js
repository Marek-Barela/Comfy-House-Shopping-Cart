import React from "react";
import styles from "./index.module.css";

const Hero = () => {
  const { hero, baner, header, button } = styles;
  return (
    <section className={hero}>
      <div className={baner}>
        <h1 className={header}>FURNITURE COLLECTION</h1>
        <button className={button}>SHOP NOW</button>
      </div>
    </section>
  );
};

export default Hero;
