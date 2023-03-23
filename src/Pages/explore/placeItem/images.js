import React from 'react'
import styles from "./image.module.css";


const Image = (props) => {

  
  return (
    <div className={styles.image}>
      <img src={props.url}/>
    </div>
  )
}

export default Image