import React from 'react'
import styles from "./Button.module.css";


const Button = (props) => {


  const onClickHandler = () => {
    return props.onCLick || null;
  }

  return (
    <div class={styles.button} onClick={onClickHandler}>
      {props.children}
    </div>
  )
}

export default Button