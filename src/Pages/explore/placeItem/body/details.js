import React from 'react'
import styles from "./details.module.css"


const Details = ({item}) => {
  return (
    <div className={styles.container}>
      {item.description}
    </div>
  )
}

export default Details