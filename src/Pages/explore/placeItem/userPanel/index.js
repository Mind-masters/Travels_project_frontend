import React, { useState } from 'react'
import styles from "./user_panel.module.css";
import more_icon from "../../../../assets/explore/more_icon.png";
import Modal from '../../../../components/shared/UI/Modal';
import { useContext } from 'react';
import { AuthContext } from '../../../../contextAPI/AuthContext';
import { deletePlaceById } from '../../../../components/utils/places/delete';
import { notify } from "../../../../components/shared/UI/toast";
import { reportPlaceById } from '../../../../components/utils/places/report';


const UserPanel = ({user, place, onFilter, onShowMap}) => {

  const [expandedOptions, setExpandedOptions] = useState(false);
  const Auth = useContext(AuthContext).authenticatedUser;

  const onDeletePlaceHandler = async() => {
    if(!Auth)return

    setExpandedOptions(false);
    
    try {
      const deletePlaceReq = await deletePlaceById(place._id, Auth.token.access_token);
      if(!deletePlaceReq.status) throw new Error(deletePlaceReq.message);
      notify("Place deleted", "success")
      return onFilter ? onFilter(place._id) : null;

    } catch (error) {
      return notify(error.message || "Cannot delete place", "error");
    }
  }

  const onReportPlaceHandler = async() => {

    if(!Auth)return notify("Only available for TripWhoop members", "warning")

    setExpandedOptions(false);

    try {
      const reportPlaceReq = await reportPlaceById(place._id, Auth.token.access_token);
      if(!reportPlaceReq.status)throw new Error("");
      else return notify("Thanks! Now this place is under review", "success")

    } catch (error) {

      return notify(error.message || "Cannot report place", "error");
    }
  }

  const onViewOnMapHandler = () => {
    if(!Auth)return notify("Only available for TripWhoop members", "warning");
    setExpandedOptions(false);
    return onShowMap && onShowMap();
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
                Auth && Auth.data && Auth.data._id === place.user_id._id ?
                <h1 onClick={onDeletePlaceHandler} style={{ color: "#f63939" }}>Delete</h1>
                :
                <h1 onClick={onReportPlaceHandler} style={{ color: "#f63939" }}>Report</h1>
              }
              <h1 onClick={onViewOnMapHandler}>View on map</h1>
              <h1 onClick={onUserProfileHandler}>About this account</h1>
              <h1 onClick={()=>setExpandedOptions(false)} style={{ backgroundColor: "#f63939", color: "white", margin: "0" }}>Cancel</h1>
            </div>

          </div>
        </Modal>

      </div>
  )
}

export default UserPanel