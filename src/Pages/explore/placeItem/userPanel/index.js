import React from 'react'
import styles from "./user_panel.module.css";
import Button from '../../../../components/shared/UI/button/Button';

const UserPanel = ({url}) => {
  // console.log("url: ", url)
  return (
    <div className={styles.user_panel}>
        
        <div className={styles.flex_item}>
          <div className={styles.avatar} style={{ backgroundImage: `url("${url})"`, backgroundSize: "cover" }}></div>
        </div>
        
        <div className={styles.flex_item}>
          <div className={styles.profile_btn}>
            {/* <Button height={35}>
              <h1 style={{ color: "white" }}>Profile</h1>
            </Button> */}
            <h1>Samuel</h1>
          </div>
        </div>

        <div className={styles.flex_item}>
          <div className={styles.client_dropdown}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

      </div>
  )
}

export default UserPanel