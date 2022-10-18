import React, { useLayoutEffect, useRef, useState } from 'react';
import styles from "./Headers.module.css";
import logo from "../../../assets/logo.PNG"
import { useContext } from 'react';
import { AuthContext } from '../../../contextAPI/AuthContext';
import { NavLink } from 'react-router-dom';
import UserDropDown from '../NavLinks/dropDown';

const StatusHeader = props => {

    const User = useContext(AuthContext);

    return <header className={`${styles.statusHeader}`}>
        <h1>Tripmaster</h1>
        <img src={logo} alt="logo" />

        {!User.isLoggedIn ? 

            <NavLink className={"btn"} to={"/auth/login"}>Login</NavLink>

            :

            <UserDropDown />
        }
    </header>;
};

export default StatusHeader;
