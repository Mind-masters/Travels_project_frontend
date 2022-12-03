import React from "react";
import {AuthContext} from "../../contextAPI/AuthContext";
import Styles from "./profile.module.css"
import profileImage from '../../assets/Profile Pic.png';
import placeImage from '../../assets/Rectangle 104.png';
import arrowImage from '../../assets/arrow.png'
import profileName from '../../assets/profile name.png';
import profileFlag from '../../assets/flag.png';
import profileMail from '../../assets/mail.png';


const ProfilePage = ({interest})=>{
    return(
        <div className={Styles.container}>
        <div className={Styles.wrapper}>

            <img className={Styles.profile_image} src={profileImage} alt=""></img>
            <h1 className={Styles.profile_name}>Johnny Depp</h1>
        
        <div className={Styles.profile_place}>
            <h2>Places <span className={Styles.number_place}>{interest.length}</span></h2>
            <span className={Styles.place_image}><img src={placeImage} alt=""></img></span>
        </div>
        <div className={Styles.profile_setting}>
            <span className={Styles.profile_setting}>...</span>
        </div>
        </div>
        <div className={Styles.profile_interest}>
            <h1 className={Styles.hobby}>Hobbeis</h1>
            <div className={Styles.profile_hobby}>

            {/* types of interests */}
            {interest.map((place)=>{
            const {id, name} = place
            return(   
                <p key={id} className={Styles.interest}>{name}</p> 
            )
        })}
        </div>
        </div>
         {/* ABOUT PROFILE */}
            <h1 className={Styles.about}>About</h1>
            <div className={Styles.box}>
                <div className={Styles.details}>
                <p className={Styles.details_name}><img src={profileName} alt=""/>Johnny Depp</p>
                <p className={Styles.details_flag}><img src={profileFlag}/>Sweden</p>
                <p><img src={profileMail}/>Johny.test@gmail.com</p>
                </div>
                <div className={Styles.arrow} >

                <img src={arrowImage} alt=""></img>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage