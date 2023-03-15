import React from 'react'
import earthLogo from "../../../../assets/earth.png";
import styles from "./ripple.module.css";

const Ripple = () => {

  return (
    <div className={styles.dot}>
			<div className={styles.centraldot}></div>
			<div className={styles.wave}></div>
			<div className={styles.wave2}></div>
      <div className={styles.wave3}></div>
		</div>
  )
}

export default Ripple