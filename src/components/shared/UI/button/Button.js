import React from 'react'
import styles from "./Button.module.css";


const Button = (props) => {
  return (
  <div className={`${props.CustomClassName} ${styles.defaultButton}`} onClick={props.onClick}>
    {props.children || props.text}
  </div>
)}

export default Button