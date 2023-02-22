import React from 'react'
import marked_true from "../../../assets/marked_false.png";
import marked_false from "../../../assets/marked_true.png"
import styles from "./settings.module.css";

const Settings = ({settings}) => {

  console.log("settings: ", settings)
  return (
    <div className={styles.container}>

      <div className={styles.content_line}>
        <img src={settings.booking_opportunities ? marked_true : marked_false} alt=""/>
        <h1>Looking for fellow traveler</h1>
      </div>

      <div className={styles.content_line}>
        <img src={settings.home_stay_programs ? marked_true : marked_false} alt=""/>
        <h1>Interested in home stay program</h1>
      </div>

      <div className={styles.content_line}>
        <img src={settings.looking_followed_travelers ? marked_true : marked_false} alt=""/>
        <h1>Looking for booking opportunities</h1>
      </div>

    </div>
  )
}

export default Settings