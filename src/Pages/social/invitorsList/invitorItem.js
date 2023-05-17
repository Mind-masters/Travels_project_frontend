import Button from '../../../components/shared/UI/button/Button'
import earthLogo from "../../../assets/your-trip/earth_logo.png"
import styles from "./item.module.css";
import React, {useState} from 'react'
import InvitingDetails from "./details";
import Authentication from "../../PopUpPages/Authentication/index";
import Modal from "../../../components/shared/UI/Modal";
import InsideBounce from '../../../components/shared/UI/LoadingSpinner/InsideBounce';

const InvitorItem = (props) => {

  const [showDetails, setShowDetails] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState(false);


  return (
    <div>

      <div className={styles.item_container}>
          
          <div className={styles.user_info}>
            <img className={styles.user_image} src={props.invite.user_id.avatar} alt="" />
            <div className={styles.user_content}>
              <h1>{props.invite.user_id.name}</h1>
              <p>{props.invite.user_id.country}</p>
            </div>
          </div>

          <div className={styles.details}>
            <img src={earthLogo} alt="" />
            <h1>GOING TO: {`${props.invite.destination}`.toUpperCase()}</h1>
            <div className={styles.details_btn}>
              <Button onSubmit={()=>setShowDetails(true)} color="#2C2B2A">
                <h1>Details</h1>
              </Button>

              <Authentication show={showSignUpForm} no_redirect onClose={()=>{setShowSignUpForm(false); setShowDetails(true)}}/>

              <Modal
                show={showDetails}
                onClose={()=>setShowDetails(false)}
              >
                <InvitingDetails 
                  invite={props.invite} 
                  onClose={()=>setShowDetails(false)} 
                  onSignUp={()=>{setShowDetails(false); 
                  setShowSignUpForm(true)}} 
                />
              </Modal>
            </div>
          </div>
      </div>

    </div>
  )
}

export default InvitorItem