import React, { useContext, useState } from 'react'
import styles from "./dropDown.module.css";
import { AuthContext } from '../../../../contextAPI/AuthContext';
import { useNavigate } from 'react-router-dom';
// logos
import user_logo from "../../../../assets/dropDown/user_logo.png"
import coints_logo from "../../../../assets/dropDown/coints_logo.png"
import star_logo from "../../../../assets/dropDown/star_logo.png"
import { NavLink } from 'react-router-dom';


const UserDropDown = () => {

    const [dropDownMenu, showDropDownMenu] = useState(false);
    const navigate = useNavigate();
    const User = useContext(AuthContext);
    const ActiveUser = User.authenticatedUser || null;
    const UserData = ActiveUser ? ActiveUser.data : null

    const logoutHandler = () => {
        User.logout();
        navigate("/")
        console.log("logging you out, user: ", User)
    }

    return (

        <div className={styles.container}>
            
            <img className={styles.user_logo} src={user_logo} alt="" onClick={()=>showDropDownMenu(!dropDownMenu)} />

            {dropDownMenu && ActiveUser &&
            
            // <div className={styles.dropDownContainer}>

            //     <div className={styles.profile_link}>
            //         {/* <NavLink to={"/profile"}>Visit your profile</NavLink> */}
            //         laas
            //     </div>

            //     <div className={styles.body}>
            //         <div>
            //             <img src={star_logo} alt="" />
            //             <h1>{UserData.points > 1 ? `${UserData.points} points` : `${UserData.points} point`}</h1>
            //         </div>

            //         <div>
            //             <img src={coints_logo} alt="" />
            //             <h1>Get more points</h1>
            //         </div>
            //     </div>

            //     <div onClick={logoutHandler} className={styles.logout_link}>
            //         <h1>Logout</h1>
            //     </div>

            // </div>

<div>
    <NavLink to={"/profile"}>Visit your profile</NavLink>
</div>

            }

        </div>
    )
}

export default UserDropDown