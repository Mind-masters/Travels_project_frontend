import React from 'react'
import AdminImg from '../../../../assets/your-trip/user.png'
import AdminCountryImg from "../../../../assets/your-trip/country.png";
import Button from '../../../../components/shared/UI/button/Button'
import styles from "./styles.module.css";

const InvitorItem = () => {
  return (
    <div>

      <div className={styles.item_container}>
          
          <div className={styles.user_image_container}>
            <img className={styles.user_image} src={AdminImg} alt="" />
            <img className={styles.country_image} src={AdminCountryImg} alt="" />
          </div>

          <p className={styles.item_intro}>
            Moving to Grace!
          </p>

          <div>
              <Button>
                  <h1 style={{ color: "white"}}>Details</h1>
              </Button>
          </div>
      </div>

    </div>
  )
}

export default InvitorItem