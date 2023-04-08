import React, {useContext, useState} from 'react'
import Button from '../../../../components/shared/UI/button/Button'
import styles from "./details.module.css"
import map_icon from "../../../../assets/map_icon.png";
import Like from '../../../../components/shared/UI/Ratings/like';
import { AuthContext } from '../../../../contextAPI/AuthContext';

const Details = (props) => { //props.item.description
  const description = `${props.item.description.substring(0,15)}...`
  const User = useContext(AuthContext);



  return (
    <div className={styles.container}>

      <div className={styles.small_screen_controlls}>
        { props.onLike &&
          <div className={styles.like_icon}>
            <Like pid={props.pid} count={2} onClick={props.onLike} user={User.authenticatedUser} isLiked={props.isLiked}/>
          </div>
        }
        55
          <Button color={"#d9d9d9"} height={35} onSubmit={props.onMap}>
            <div className={styles.map_content}>
              <img src={map_icon} alt="" />
              <p style={{ color: "#EE7D15" }}>Map</p>
            </div>
          </Button>
      </div>

      {description}

      <div className={styles.big_screen_map}>
        <Button color={"#d9d9d9"} height={35} onSubmit={props.onMap}>
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