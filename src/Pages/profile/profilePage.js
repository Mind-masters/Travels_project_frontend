import React from "react";
import Styles from "./profile.module.css"

// Images and logos
import placeImage from '../../assets/Rectangle 104.png';
import arrowImage from '../../assets/arrow.png'
import profileName from '../../assets/profile name.png';
import profileFlag from '../../assets/flag.png';
import profileMail from '../../assets/mail.png';

const ProfilePage = ({User})=>{

    return(
        <div className={Styles.container}>
            { User.authenticatedUser &&
                <>
                    <div className={Styles.profile_section}>

                        <img className={Styles.profile_image} src={User.authenticatedUser.data.avatar} alt=""></img>
                        <h1 className={Styles.profile_name}>{User.authenticatedUser.data.name}</h1>
                    
                        <div className={Styles.profile_place}>
                            {/* <h2>Places <span className={Styles.number_place}>{interest.length}</span></h2> */}
                            <img className={Styles.place_image} src={placeImage} alt=""></img>
                        </div>

                        <div className={Styles.profile_setting}>
                            <span className={Styles.profile_setting}>...</span>
                        </div>

                    </div>
                

                    <div className={Styles.hobbies_section}>
                        <h1 className={Styles.hobbies_header}>Hobbies</h1>
                        
                        <div className={Styles.hobbies_container}>

                            <div className={Styles.hobbies_wrapper}>

                            {/* {
                                interest.map((place)=>
                                {
                                    const {id, name} = place

                                    return(   

                                        <div key={id} className={Styles.interest_item}>
                                            {name}
                                        </div>
                                    )
                                })
                            } */}

                            </div>
                        </div>

                    </div>

                    <h1 className={Styles.about}>About</h1>
                
                    <div className={Styles.about_container}>
                        <div className={Styles.details_container}>

                            <div>
                                <img src={profileName} alt=""/>
                                <p>{User.authenticatedUser.data.name}</p>
                            </div>

                            <div>
                                <img src={profileFlag} alt=""/>
                                <p>ss</p>
                            </div>

                            <div>
                                <img src={profileMail} alt=""/>
                                <p>{User.authenticatedUser.data.email}</p>
                            </div>
                        </div>

                        <div className={Styles.image_container} >
                            <img src={arrowImage} alt="" />
                        </div>
                    </div>
                </>
            }
            
        </div>
    )
}

export default ProfilePage