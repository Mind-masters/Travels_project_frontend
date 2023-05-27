import React from 'react'
import styles from "./imageContainer.module.css";
import scroll_logo from "../../assets/landing/scroll_logo.png"


const ImageContainer = () => {

  return (

    <div className={styles.welcome_page_bg_images}>
      <div className={styles.image_big} />
      <div className={styles.image_small} />
      <img className={styles.scroll_logo} src={scroll_logo} alt='' />
    </div>
    
  )
}

export default ImageContainer