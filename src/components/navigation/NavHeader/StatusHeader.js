import React from 'react';
import styles from "./Headers.module.css";
import logo from "../../../assets/logo.PNG"
import { useContext } from 'react';
import { AuthContext } from '../../../contextAPI/AuthContext';
import { NavLink } from 'react-router-dom';
import UserDropDown from '../NavLinks/dropDown';
import Modal from "../../../components/shared/UI/Modal";
import Login from '../../../components/shared/UI/Authentication/login';
import { useState } from 'react';
import Backdrop from '../../shared/UI/Backdrop';


const StatusHeader = props => {

    const User = useContext(AuthContext);

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openDrawerHandler = () => {
        setModalIsOpen(true);
    };

    const closeDrawerHandler = () => {
        setModalIsOpen(false);
    };

    
    const ActiveUser = User.authenticatedUser || null;
    const UserData = ActiveUser ? ActiveUser.data : null

    const onLoginHandler = () => {
        
    }

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

                    <NavLink className={styles.login_link} to={"#"} onClick={openDrawerHandler}>Login</NavLink>

                    :

                    <UserDropDown />
                }
            </div>

            <Modal
                show={modalIsOpen}
                onClose={closeDrawerHandler}
            >
                <Login />
            </Modal>

        </div>
    </header>;
};

export default StatusHeader;
