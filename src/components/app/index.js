import React, { Fragment } from "react";
import Header from "../header";
import Hero from "../hero";
import Products from "../products";
import "./index.module.css";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Hero />
      <Products />
    </Fragment>
  );
};

export default App;
