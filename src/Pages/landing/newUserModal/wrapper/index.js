import React from 'react'
import styles from "./wrapper.module.css";


const Wrapper = (props) => {
  return (
    <div className={styles.container}>
        {props.children}
    </div>
  )
}

export default Wrapper