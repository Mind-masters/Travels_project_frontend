import React from 'react'
import styles from "./Button.module.css";

const Button = (props) => {
  return <div className={styles.wrapper}>
    <div 
      style={{ border: props.border }} 
      className={styles.container}
    >
      <button
        onClick={props.onSubmit} 
        style={{ backgroundColor:props.color, height: props.height}} 
        className={styles.btn}
      >
        {props.children}
      </button>
    </div>
  </div>
}

export default Button