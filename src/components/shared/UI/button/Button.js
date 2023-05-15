import React from 'react'
import { motion } from "framer-motion"
import styles from "./Button.module.css";


const Button = (props) => <div className={`${styles.container_login_form_btn}`}>
  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
   style={{ border: props.border }} className={`${styles.wrap_login_form_btn}`}>
    <button
      onClick={props.onSubmit} 
      style={{ backgroundColor:props.color, height: props.height}} 
      className={`${styles.login_form_btn}`}
    >
      {props.children}
    </button>
  </motion.div>
</div>

export default Button