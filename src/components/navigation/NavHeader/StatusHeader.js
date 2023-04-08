import React from 'react';
import styles from "./Headers.module.css";
import logo from "../../../assets/logo.PNG"
import { useContext } from 'react';
import { AuthContext } from '../../../contextAPI/AuthContext';
import UserDropDown from '../NavLinks/dropDown';
import Authentication from '../../../Pages/PopUpPages/Authentication';
import { useState } from 'react';
import MobileNavButton from '../Mobile';
import Button from '../../shared/UI/button/Button';


const StatusHeader = props => {

    const User = useContext(AuthContext);

    const [authenticationIsOpen, setAuthenticationIsOpen] = useState(false);

    const openAuthenticationForm = () => {
        setAuthenticationIsOpen(true);
    };

    const closeAuthenticationForm = () => {
        setAuthenticationIsOpen(false);
    };

    
    const ActiveUser = User.authenticatedUser || null;
    const UserData = ActiveUser ? ActiveUser.data : null


    return <header className={`${styles.statusHeaderContainer}`}>

        <div className={`${styles.statusHeader}`}>

            <div style={{ justifyContent:"left" }} className={`${styles.flex_item}`}>
                <MobileNavButton onClick={props.onMobile}/>
                <div className={`${styles.none}`}>
                    <h1><span>Tripzi</span>Go</h1>
                </div>
            </div>

            <div className={`${styles.userData} ${styles.flex_item} `}>
                <div>
                    {
                        UserData?
                        <>
                            <p className={`${styles.plus_one_point}`} >+ 1</p>

                            <p className={styles.points}>{UserData.points > 1 ? `${UserData.points} points` : `${UserData.points} point`}</p>
                        </>
                        :
                        <img src={logo} alt="logo" />

                    }
                </div>
            </div>

            


            <div style={{ justifyContent:"right" }} className={`${styles.flex_item} ${styles.login_btn}`}>
                {!User.isLoggedIn ? 

                    <Button height="auto" onSubmit={openAuthenticationForm}>
                        <h1>Login</h1>
                    </Button>
                    

                    :

                    <UserDropDown />
                }

            </div>


            <Authentication
                show={authenticationIsOpen}
                onClose={closeAuthenticationForm}
            />

        </div>
    </header>;
};

export default StatusHeader;
