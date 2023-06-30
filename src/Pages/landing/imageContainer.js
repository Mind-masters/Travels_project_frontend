import React, {useState} from 'react'
import styles from "./imageContainer.module.css";
import scroll_logo from "../../assets/landing/scroll_logo.png"
import { useNavigate } from 'react-router-dom';


const ImageContainer = () => {

  const navigate = useNavigate()


  return (

    <div className={styles.welcome_page_bg_images}>
      <div className={styles.image_big} onClick={()=>navigate("/explore")}/>
      <div className={styles.image_small} onClick={()=>navigate("/explore")}/>
      <img className={styles.scroll_logo} src={scroll_logo} alt='' />
    </div>
    
  )
}

export default ImageContainer