import React from 'react'
import { NavLink } from 'react-router-dom';
import "./Button.css";


const Button = (props) => {
  console.log("props: ", props.CustomClassName);
  return (
  <div className={props.CustomClassName || "defaultButton"} onClick={props.onClick}>
    {props.children || props.text}
  </div>
)}

export default Button