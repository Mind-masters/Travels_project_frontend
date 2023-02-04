import React from 'react';
import styles from "./Headers.module.css";
import logo from "../../../assets/logo.PNG"
import { useContext } from 'react';
import { AuthContext } from '../../../contextAPI/AuthContext';
import { NavLink } from 'react-router-dom';
import UserDropDown from '../NavLinks/dropDown';
import Authentication from '../../../Pages/PopUpPages/Authentication';
import { useState } from 'react';


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

            <div className={`${styles.none} ${styles.flex_item}`}>
                <h1><span>Trip</span>Master</h1>
            </div>

            <div className={`${styles.userData} ${styles.flex_item}`}>
                {
                    UserData?
                    <>
                        {/* <p className={`${UserData.is_new_login && styles.hidden}`} >+ 1</p> */}

                        <p className={styles.points}>{UserData.points > 1 ? `${UserData.points} points` : `${UserData.points} point`}</p>
                    </>
                    :
                    <img src={logo} alt="logo" />

                }
            </div>


            <div className={`${styles.flex_item}`}>
                {!User.isLoggedIn ? 

                    <NavLink className={styles.login_link} to={"#"} onClick={openAuthenticationForm}>Login</NavLink>

                    :

                    <UserDropDown />
                }
            </div>


            <Authentication
                show={authenticationIsOpen}
                onClose={closeAuthenticationForm}
                width={"23%"}
            />

        </div>
    </header>;
};

export default StatusHeader;
