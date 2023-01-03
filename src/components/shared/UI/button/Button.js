import React from 'react'
import styles from "./Button.module.css";


const Button = (props) => {


  const onClickHandler = () => {
    return props.onCLick || null;
  }

  return (
    <div style={{ backgroundColor:`${props.color ? props.color : "rgba(243, 222, 27, 1)"}` }} className={styles.button} onClick={onClickHandler}>
      {props.children}
    </div>
  )
}

export default Button