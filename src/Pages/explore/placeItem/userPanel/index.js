import React from 'react'
import styles from "./user_panel.module.css";
import more_icon from "../../../../assets/explore/more_icon.png";


const UserPanel = ({url}) => {

  return (
    <div className={styles.user_panel}>
        
        <div className={styles.user_content}>

          <img src={`${url}`} alt='' />

          <div className={styles.details}>
            <h1>Samuel</h1>
            <p>23 mins ago</p>
          </div>

        </div>

        <img src={more_icon} alt='' className={styles.more_icon} />

      </div>
  )
}

export default UserPanel