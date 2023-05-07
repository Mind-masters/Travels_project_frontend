import Button from '../../../../components/shared/UI/button/Button'
import earthLogo from "../../../../assets/your-trip/earth_logo.png"
import AdminImg from '../../../../assets/your-trip/user.png'
import styles from "./item.module.css";
import React from 'react'


const InvitorItem = (props) => {


  return (
    <div>

      <div className={styles.item_container}>
          
          <div className={styles.user_info}>
            <img className={styles.user_image} src={AdminImg} alt="" />
            <div className={styles.user_content}>
              <h1>Samuel</h1>
              <p>Nigeria</p>
            </div>
          </div>

          <div className={styles.details}>
            <img src={earthLogo} alt="" />
            <h1>GOING TO ENGLAND</h1>
            <div className={styles.details_btn}>
              <Button color="#2C2B2A">
                <h1>Details</h1>
              </Button>
            </div>
          </div>
      </div>

    </div>
  )
}

export default InvitorItem