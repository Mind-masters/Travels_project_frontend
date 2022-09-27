import React from 'react'
import "./Button.css";


const Button = (props) => {
  return (
  <div className={props.CustomClassName || "defaultButton"} onClick={props.onClick}>
    {props.children || props.text}
  </div>
)}

export default Button