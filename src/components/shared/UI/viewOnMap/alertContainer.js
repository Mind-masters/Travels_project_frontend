import React, { useContext, useState } from 'react'
import styles from "./alertContainer.module.css"
import Button from '../button/Button';
import alert_logo from "../../../../assets/points_alert.png";
import alert_submited_logo from "../../../../assets/map_alert_logo.png";
import { AuthContext } from '../../../../contextAPI/AuthContext';
import { useNavigate } from 'react-router-dom';
import { notify } from '../toast';

const AlertContainer = (props) => {
    const Auth = useContext(AuthContext);
    const navigate = useNavigate();
    const [submited, setSubmited] = useState(false);

    const onGoHandler = async() => {
        if(!Auth.authenticatedUser)return;
        if(Auth.authenticatedUser.data.points < 3) {
            notify("Get more bonus points", "warning")
            return navigate("/benefits");
        }
        setSubmited(true);

        const timer = setTimeout(() => {
            props.onGo();
        }, 1200);

        return timer
    }
    
  return (
    <div className={styles.alert}>
        <>
            { submited ?
                <>
                    <div className={styles.alert_header}>
                        <h1>Approved</h1>
                    </div>

                    <div className={styles.alert_submited_logo}>
                        <img src={alert_submited_logo} alt='logo'/>
                    </div>
                </>
                :
                <div className={styles.alert_logo}>
                    <img src={alert_logo} alt='logo'/>
                </div>
            }

            

            <div className={styles.alert_message}>
                <h1>{`${submited ? "You spent 3 points" : "This review is rated 3 points"}`}</h1>
            </div>

            {   !submited &&
                <div className={styles.alert_btn}>
                    <Button onSubmit={onGoHandler} color={`${submited ? "transparent" : "#EE7D15"}`}>
                        <h1 className={styles.btn_text} style={{ color: "white" }}>Continue</h1>
                    </Button>
                </div>
            }
        </>
    </div>
  )
}

export default AlertContainer