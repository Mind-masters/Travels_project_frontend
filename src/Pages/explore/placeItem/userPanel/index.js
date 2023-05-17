import React from 'react'
import styles from "./user_panel.module.css";
import more_icon from "../../../../assets/explore/more_icon.png";


const UserPanel = ({user}) => {

  return (
    <div className={styles.user_panel}>
        
        <div className={styles.user_content}>

          <img src={`${user.avatar}`} alt='' />

          <div className={styles.details}>
            <h1>{user.name}</h1>
            <p>23 mins ago</p>
          </div>

        </div>

        <img src={more_icon} alt='' className={styles.more_icon} />

      </div>
  )
}

export default UserPanel