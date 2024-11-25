import React from "react";
import styles from "../styles/loading.module.css";

const loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className={styles.spinner}></div>
    </div>
  );
};

export default loading;
