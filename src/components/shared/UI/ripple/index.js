import React from 'react'
import earthLogo from "../../../../assets/earth.png";
import styles from "./ripple.module.css";

const Ripple = () => {
  // not working for a moment
  return (
    <div>
        <div classname={styles.gt_dev}></div>
        <div classname={styles.gt_dev}></div>
        <div classname={styles.gt_dev}></div>
        <div classname={styles.gt_dev}></div>
        <div classname={styles.open_dev_badge}>
            <img src={earthLogo} alt=''/>
        </div>
    </div>
  )
}

export default Ripple