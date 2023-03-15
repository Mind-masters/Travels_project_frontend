import React from 'react'
import styles from "./alertContainer.module.css"
import Button from '../button/Button';
import alert_logo from "../../../../assets/map_alert_logo.png";
import { useState } from 'react';
import MapContent from './mapContent';

const AlertContainer = (props) => {

    const [isSubmited, setIsSubmited] = useState(false);

    const onGoHandler = () => {
        // setIsSubmited(true)
        props.onGo();
    }
    
  return (
    <div className={styles.alert}>
        {
            !isSubmited ?
            <>
                <div className={styles.alert_header}>
                    <h1>Approved</h1>
                </div>

                <div className={styles.alert_logo}>
                    <img src={alert_logo} alt='logo'/>
                </div>

                <div className={styles.alert_message}>
                    <h1>This review is rated 3 points</h1>
                </div>

                <div className={styles.alert_controllers}>
                    <div className={styles.alert_btn}>
                        <Button onSubmit={props.onClose} color={"rgba(212, 30, 37, 1)"}>
                            <h1 style={{ color: "white" }}>Cancel</h1>
                        </Button>
                    </div>

                    <div className={styles.alert_btn}>
                        <Button onSubmit={onGoHandler} color={"rgba(243, 222, 27, 1)"}>
                            <h1 style={{ color: "black" }}>Go!</h1>
                        </Button>
                    </div>
                </div>
            </>
            
            :

            <>
                <MapContent />
            </>
        }


    </div>
  )
}

export default AlertContainer