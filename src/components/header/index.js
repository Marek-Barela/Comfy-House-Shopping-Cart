import React from "react";
import Logo from "../header-logo";
import ShoppingCart from "../header-cart";
import styles from "./index.module.css";

const Header = () => {
  const { header, wrapper } = styles;
  return (
    <header className={header}>
      <div className={wrapper}>
        <Logo />
        <ShoppingCart />
      </div>
    </header>
  );
};

export default Header;
