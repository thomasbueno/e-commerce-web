import React from "react";
import styles from "../../../styles/Background.module.css";

const BlueBackGround: React.FC = ({ children }) => {
  return (
    <div className={styles.main}>
      {children}
    </div>
  )
}

export default BlueBackGround;