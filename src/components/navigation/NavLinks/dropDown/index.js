import React, { useState } from 'react'
import styles from "./dropDown.module.css";
import user_logo from "../../../../assets/dropDown/user_logo.png"


const UserDropDown = () => {

    const [dropDownMenu, showDropDownMenu] = useState(false);

  return (
    <div className={styles.dropDownContainer}>
        
        <img className={styles.user_logo} src={user_logo} alt="" onClick={()=>showDropDownMenu(!dropDownMenu)} />

        {dropDownMenu && 
        
        <div className={styles.container}>

            hello

        </div>

        }

    </div>
  )
}

export default UserDropDown