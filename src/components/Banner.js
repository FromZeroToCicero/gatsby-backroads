import React from "react";
import styles from "../styles/banner.module.css";

const Banner = ({ title, info, children }) => {
  return (
    <div className={styles.banner}>
      <h1>{title}</h1>
      <p>{info}</p>
      {children}
    </div>
  );
};

export default Banner;
