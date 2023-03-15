import React from 'react'
import styles from "./Button.module.css";


const Button = (props) => <div className={`${styles.container_login_form_btn}`}>
  <div className={`${styles.wrap_login_form_btn}`}>
    <button onClick={props.onSubmit} style={{ backgroundColor:props.color, height: props.height}} className={`${styles.login_form_btn}`}>
      {props.children}
    </button>
  </div>
</div>

export default Button