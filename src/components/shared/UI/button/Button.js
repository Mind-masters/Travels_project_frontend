import React from 'react'
import styles from "./Button.module.css";


const Button = (props) => {
  return (
    <button class="btn">
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="text">Press Me!</span>
    </button>
  )
}

export default Button