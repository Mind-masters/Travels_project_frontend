import React, { useState } from 'react'
import styles from "./user_panel.module.css";
import more_icon from "../../../../assets/explore/more_icon.png";
import Modal from '../../../../components/shared/UI/Modal';
import { useContext } from 'react';
import { AuthContext } from '../../../../contextAPI/AuthContext';


const UserPanel = ({user, place}) => {

  const [expandedOptions, setExpandedOptions] = useState(false);
  const Auth = useContext(AuthContext).authenticatedUser;

  const onDeletePlaceHandler = () => {
    console.log("on delete place")
  }

  const onReportPlaceHandler = () => {
    console.log("on report place")
  }

  const onViewOnMapHandler = () => {
    console.log("View on map")
  }

  const onUserProfileHandler = () => {
    console.log("on profile")
  }

  return (
    <div className={styles.user_panel}>
        
        <div className={styles.user_content}>

          <img src={`${user.avatar}`} alt='' />

          <div className={styles.details}>
            <h1>{user.name}</h1>
            <p>23 mins ago</p>
          </div>

        </div>

        <img onClick={()=>setExpandedOptions(true)} src={more_icon} alt='' className={styles.more_icon} />

        <Modal
          show={expandedOptions}
          onClose={()=>setExpandedOptions(false)}
        >
          <div className={styles.expanded_container}>
            <div className={styles.expanded_content}>
              {
                Auth && Auth.data && Auth.data.id === place.user_id._id ?
                <h1 onClick={onDeletePlaceHandler} style={{ color: "red" }}>Delete</h1>
                :
                <h1 onClick={onReportPlaceHandler} style={{ color: "red" }}>Report</h1>
              }
              <h1 onClick={onViewOnMapHandler}>View on map</h1>
              <h1 onClick={onUserProfileHandler}>About this account</h1>
              <h1 onClick={()=>setExpandedOptions(false)} style={{ backgroundColor: "red", color: "white", margin: "0" }}>Cancel</h1>
            </div>

          </div>
        </Modal>

      </div>
  )
}

export default UserPanel