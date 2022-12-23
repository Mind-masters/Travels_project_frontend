import React from 'react';
import styles from "./Headers.module.css";
import logo from "../../../assets/logo.PNG"
import { useContext } from 'react';
import { AuthContext } from '../../../contextAPI/AuthContext';
import { NavLink } from 'react-router-dom';
import UserDropDown from '../NavLinks/dropDown';

const StatusHeader = props => {

    const User = useContext(AuthContext);
    const ActiveUser = User.authenticatedUser || null;
    const UserData = ActiveUser ? ActiveUser.data : null

    return <header className={`${styles.statusHeaderContainer}`}>

        <div className={`${styles.statusHeader}`}>

            <div className={styles.none}>
                <h1><span>Trip</span>Master</h1>
            </div>

            <div className={styles.userData}>
                {
                    UserData?
                    <>
                        <p className={`${UserData.is_new_login && styles.hidden}`} >+ 1</p>

                        <p className={styles.points}>{UserData.points > 1 ? `${UserData.points} points` : `${UserData.points} point`}</p>
                    </>
                    :
                    <img src={logo} alt="logo" />

                }
            </div>


            <div>
                {!User.isLoggedIn ? 

                    <NavLink className={styles.login_link} to={"/auth/login"}>Login</NavLink>

                    :

                    <UserDropDown />
                }
            </div>

        </div>
    </header>;
};

export default StatusHeader;
