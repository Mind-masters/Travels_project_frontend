import React from "react";
import Styles from "./profile.module.css"

// Images and logos
// import placeImage from '../../assets/Rectangle 104.png';
// import arrowImage from '../../assets/arrow.png'
// import profileName from '../../assets/profile name.png';
// import profileFlag from '../../assets/flag.png';
// import profileMail from '../../assets/mail.png';
import Footer from "./footer";

import Interests from "./profileMenuContent/interests";
import Settings from "./profileMenuContent/settings";
import About from "./profileMenuContent/about";
import { useState } from "react";


const ProfilePage = ({User, Places})=>{

    const [settingsActive, setSettingsActive] = useState(true);
    const [interestsActive, setInterestsActive] = useState(false);
    const [aboutActive, setAboutActive] = useState(false);

    const onCloseActiveWindow = () => {
        setSettingsActive(false);
        setInterestsActive(false);
        setAboutActive(false);
    }


    const onSettingsMenuClick = () => {
        onCloseActiveWindow();
        setSettingsActive(true);
    }

    const onInterestsMenuClick = () => {
        onCloseActiveWindow();
        setInterestsActive(true);
    }

    const onAboutMenuClick = () => {
        onCloseActiveWindow();
        setAboutActive(true);
    }

    return(
        <div className={Styles.container}>
            { User.authenticatedUser &&
                <>
                    <div className={Styles.profile_section}>

                        <div className={Styles.profile_sidebar}>
                            <img className={Styles.profile_image} src={User.authenticatedUser.data.avatar} alt=""></img>
                            <h1 className={Styles.profile_name}>{User.authenticatedUser.data.name}</h1>
                            <ul className={Styles.profile_menu}>
                                <li style={{ color: settingsActive && "rgba(94, 94, 94, 1)" }} onClick={onSettingsMenuClick}>Profile</li>
                                <li style={{ color: interestsActive && "rgba(94, 94, 94, 1)" }} onClick={onInterestsMenuClick}>Interests</li>
                                <li style={{ color: aboutActive && "rgba(94, 94, 94, 1)" }} onClick={onAboutMenuClick}>About</li>
                            </ul>
                        </div>

                        <div className={Styles.profile_content}>
                            {
                                (settingsActive && 
                                    <Settings 
                                        settings={User.authenticatedUser.data.settings} 
                                    />
                                ) 
                                ||
                                (interestsActive && 
                                    <Interests 
                                        interests={User.authenticatedUser.data.interests} 
                                    />
                                ) 
                                ||
                                (aboutActive && 
                                    <About 
                                        name={User.authenticatedUser.data.name}
                                        country={User.authenticatedUser.data.country}
                                        email={User.authenticatedUser.data.email}
                                    />
                                )
                            }
                        </div>


                    </div>
                

                    <Footer Places={Places} />
                </>
            }
            
        </div>
    )
}

export default ProfilePage