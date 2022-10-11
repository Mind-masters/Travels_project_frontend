import React, { useContext, useState } from 'react'
import styles from "./dropDown.module.css";
import { AuthContext } from '../../../../contextAPI/AuthContext';

// logos
import user_logo from "../../../../assets/dropDown/user_logo.png"
import coints_logo from "../../../../assets/dropDown/coints_logo.png"
import star_logo from "../../../../assets/dropDown/star_logo.png"
import { NavLink } from 'react-router-dom';


const UserDropDown = () => {

    const [dropDownMenu, showDropDownMenu] = useState(false);

    const User = useContext(AuthContext);

    const logoutHandler = () => {
        console.log("logging you out, user: ", User)
    }

    return (

        <div className={styles.dropDownContainer}>
            
            <img className={styles.user_logo} src={user_logo} alt="" onClick={()=>showDropDownMenu(!dropDownMenu)} />

            {dropDownMenu && 
            
            <div className={styles.container}>

                <div className={styles.profile_link}>
                    <NavLink to={"/profile"}>Visit your profile</NavLink>
                </div>

                <div className={styles.body}>
                    <div>
                        <img src={star_logo} alt="" />
                        <h1>You have 22 points</h1>
                    </div>

                    <div>
                        <img src={coints_logo} alt="" />
                        <h1>Get more points</h1>
                    </div>
                </div>

                <div onClick={logoutHandler} className={styles.logout_link}>
                    <h1>Logout</h1>
                </div>

            </div>

            }

        </div>
    )
}

export default UserDropDown