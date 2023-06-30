import React from 'react'
import styles from "./notificationsItem.module.css";


const NotificationsItem = ({item}) => {
    return (
    <div className={styles.container}>
        <img src={`https://mind-master-backend-production.up.railway.app/${item.icon}`} alt='' />
        <p>{item.text}</p>
    </div>
  )
}

export default NotificationsItem