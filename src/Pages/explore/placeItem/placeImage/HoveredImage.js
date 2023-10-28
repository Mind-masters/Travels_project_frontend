import React from 'react'
import styles from "./hovered.module.css";
import vissibleIcon from "../../../../assets/signs/description.png";


const HoveredImage = ({hovered}) => {
  return (
    <div className={`${styles.container} ${hovered ? styles.visible : styles.hidden}`}>
    </div>
  )
}

export default HoveredImage