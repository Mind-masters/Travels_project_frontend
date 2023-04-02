import React from 'react'
import Button from '../../../../components/shared/UI/button/Button'
import styles from "./details.module.css"
import map_icon from "../../../../assets/map_icon.png";


const Details = (props) => { //props.item.description
  const description = `${props.item.description.substring(0,15)}...`
  return (
    <div className={styles.container}>

      <div className={styles.small_screen_controlls}>
        small devices controll panel
      </div>

      {description}

      <div className={styles.big_screen_map}>
        <Button color={"#d9d9d9"} height={35} onSubmit={props.onSubmit}>
          <div className={styles.map_content}>
            <img src={map_icon} alt="" />
            <p style={{ color: "#EE7D15" }}>Map</p>
          </div>
        </Button>
      </div>
    </div>
  )
}

export default Details