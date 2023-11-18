import React, { useContext } from 'react'
import styles from "./congratulations.module.css";
import { notify } from '../../toast';
import { useEffect } from 'react';
import { AuthContext } from '../../../../../contextAPI/AuthContext';
import ConfettiExplosion from 'react-confetti-explosion';


const Congratulations = (props) => {

    const Auth = useContext(AuthContext);

    useEffect(()=>{

        const onCompleteHandler = async()=>{
      
        //   if(!create_new_donation.status)return notify(create_new_donation.message, "error")

          
        // Auth.update({
        //     data: create_new_donation.data, 
        //     token: 
        //     {
        //       access_token: create_new_donation.data.access_token,
        //       refresh_token: create_new_donation.data.refresh_token
        //     } 
        //   })
        }
    
        setTimeout(() => {
            onCompleteHandler();
            return props.onClose()
        }, 3000)
      })

    return (
        <div className={styles.container}>
            <div className={styles.middle_anime}>
                <ConfettiExplosion zIndex={5} />
            </div>
            <h1>Congratulations</h1>
            <p>
                {props.message}
            </p>
            <p className={styles.close_label}>
                Close after 3 seconds..
            </p>
        </div>
    )
}

export default Congratulations