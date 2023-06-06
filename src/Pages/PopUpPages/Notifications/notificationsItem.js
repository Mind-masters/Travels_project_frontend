import React from 'react'
import styles from "./notificationsItem.module.css";


const NotificationsItem = ({item}) => {

    return (
    <div className={styles.container}>
        <img src={item.icon} alt='' />
        <p>{item.text}</p>
    </div>
  )
}

export default NotificationsItem