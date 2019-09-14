import React from "react";
import styles from "./index.module.css";

const SectionHeader = ({ children }) => {
  const { header } = styles;
  return <h2 className={header}>{children}</h2>;
};

export default SectionHeader;
