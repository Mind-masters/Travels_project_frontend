import React from 'react'
import { useContext } from 'react'
import Card from '../../components/shared/UI/Card';
import {AuthContext} from "../../contextAPI/AuthContext";
import Styles from "./profile.module.css"
import profileImage from '../../assets/Profile Pic.png';
import placeImage from '../../assets/Rectangle 104.png';
import arrowImage from '../../assets/arrow.png'
import profileName from '../../assets/profile name.png';
import profileFlag from '../../assets/flag.png';
import profileMail from '../../assets/mail.png';

const Profile = () => {
    return (
        <Card>
            <div className={Styles.container}>
        <div className={Styles.wrapper}>

            <img className={Styles.profile_image} src={profileImage} alt=""></img>
            <h1 className={Styles.profile_name}>Johnny Depp</h1>
        
        <div className={Styles.profile_place}>
            <h2>Places <span className={Styles.number_place}>3</span></h2>
            <span className={Styles.place_image}><img src={placeImage} alt=""></img></span>
        </div>
        <div className={Styles.profile_setting}>
            <span className={Styles.profile_setting}>...</span>
        </div>
        </div>
        <div className={Styles.profile_interest}>
            <h1 className={Styles.hobby}>Hobbeis</h1>
            <div className={Styles.profile_hobby}>

        <p className={Styles.interest}>Hills</p>
        <p className={Styles.interest}>Hills</p>
            </div>
        </div>
            <h1>About</h1>
            <div className={Styles.box}>
                <div className={Styles.details}>

                <p className={Styles.details_name}><img src={profileName} alt=""/>Johnny Depp</p>
                <p><img src={profileFlag}/>Sweden</p>
                <p><img src={profileMail}/>Johny.test@gmail.com</p>
                </div>
                <div className={Styles.arrow} >

                <img src={arrowImage} alt=""></img>
                </div>
            </div>
        </div>
        
        </Card>
    )
}

export default Profile