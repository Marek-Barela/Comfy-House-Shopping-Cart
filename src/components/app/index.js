import React, { Fragment } from "react";
import Header from "../header";
import Hero from "../hero";
import Products from "../products";
import ShoppingCartOverlay from "../shopping-cart-overlay";
import "./index.module.css";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Hero />
      <Products />
      <ShoppingCartOverlay />
    </Fragment>
  );
};

export default App;
