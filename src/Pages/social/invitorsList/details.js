import React, { useContext, useEffect, useState } from 'react'
import Button from "../../../components/shared/UI/button/Button";
import { AuthContext } from '../../../contextAPI/AuthContext';
import styles from "./details.module.css";
import earth_logo from "../../../assets/ripple.png";
import {deleteInviteById} from "../../../components/utils/invitings/delete";
import InsideBounce from '../../../components/shared/UI/LoadingSpinner/InsideBounce';
import delete_icon from "../../../assets/social/delete_icon.png";



const InvitingDetails = (props) => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    if(isLoading){
      setTimeout(() => {
        setIsLoading(false);
      }, 1100);

    }

  }, [isLoading])

  const Auth = useContext(AuthContext);
  if(!props.invite)return;
  const isCreator = (Auth.authenticatedUser && Auth.authenticatedUser.data._id) === props.invite.user_id._id;

  const SubmitButtonHandler = async() => {
    setIsLoading(true)

    if(!Auth.authenticatedUser)return props.onSignUp();

    if(isCreator){
      try {
        const deleteInviting = await deleteInviteById(props.invite._id, Auth.authenticatedUser.token.access_token);
        if(!deleteInviting.status){

          if(deleteInviting.message === "Unauthorized")Auth.logout();
          props.onClose();
          return alert(deleteInviting.message);
        }
      } catch (error) {
        alert(error)
      }
    }
  }

  return (
    <div className={styles.container}>

      <div className={styles.header}>
        <div className={styles.user_bar}>
          <img src={`${props.invite.user_id.avatar}`} alt='' />

          <div className={styles.name_country}>
            <h1>{`${props.invite.user_id.name}`}</h1>
            <div className={styles.user_country}>
              <img src={props.invite.user_id.country.flag} alt='flag'/>
              <p>{props.invite.user_id.country.name}</p>
            </div>
          </div>
        </div>

        <div className={styles.destination}>
          <img src={earth_logo} alt='' />
          <h1>GOING TO: <span>{`${props.invite.destination.name}`.toUpperCase()}</span></h1>
        </div>
      </div>

      {/* <div className={styles.gender_content}>
        <h1>Looking for {props.invite.gender}</h1>
      </div> */}

      <div className={styles.description}>
        <p>
          {props.invite.about}
        </p>
      </div>

      <div className={styles.btn_wrapper}>
        <Button 
          color={`${isCreator ? "white" : "#EE7D15"}`} 
          onSubmit={SubmitButtonHandler}
        >
          
          {
            isCreator ? 
            <img src={delete_icon} alt='' />
            :
            <h1 style={{ color: "white"}}>
              Message
            </h1>
          }
        </Button>
      </div>

      {
        isLoading && 
        <InsideBounce />
      }
    </div>
  )
}

export default InvitingDetails