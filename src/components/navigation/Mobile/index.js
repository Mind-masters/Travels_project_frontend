import React from 'react'
import styles from "./mobile.module.css";

const MobileNavButton = (props) => (
    <button className={styles.navigationMenuBtn} onClick={props.onClick}>
        <span />
        <span />
        <span />
    </button>
  )

export default MobileNavButton