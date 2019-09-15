import React from "react";
import Logo from "../header-logo";
import ShoppingCart from "../header-cart";
import reactImage from "../../images/react.png";
import styles from "./index.module.css";

const Header = () => {
  const { header, wrapper, reactIcon } = styles;
  return (
    <header className={header}>
      <div className={wrapper}>
        <img className={reactIcon} src={reactImage} alt="React" />
        <Logo />
        <ShoppingCart />
      </div>
    </header>
  );
};

export default Header;
