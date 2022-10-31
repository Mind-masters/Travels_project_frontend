import React, { useState } from "react";
import styles from "./index.module.css";

const SeeMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
  return (
    <p className={styles.text}>
      {isReadMore ? text.slice(0, 150) : text}
      <span onClick={toggleReadMore} className={styles.readorhide}>
        {isReadMore ? "...read more" : " read less"}
      </span>
    </p>
  )
}

export default SeeMore