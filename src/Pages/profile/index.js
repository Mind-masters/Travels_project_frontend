import React from 'react'
import { useContext } from 'react'
import Card from '../../components/shared/UI/Card';
import {AuthContext} from "../../contextAPI/AuthContext";
import styles from "./profile.module.css"
import profileImage from '../../assets/Profile Pic.png';
import placeImage from '../../assets/Rectangle 104.png';
import arrowImage from '../../assets/arrow.png'
import profileName from '../../assets/profile name.png';
import profileFlag from '../../assets/flag.png';
import profileMail from '../../assets/mail.png';

const Profile = () => {


    return (
        <Card>
            <div className={styles.container}>
        <div className={styles.wrapper}>

            <img className={styles.profile_image} src={profileImage} alt=""></img>
            <h1 className={styles.profile_name}>Johnny Depp</h1>
        
        <div className={styles.profile_place}>
            <h2>Places <span className={styles.number_place}>3</span></h2>
            <span className={styles.place_image}><img src={placeImage} alt=""></img></span>
        </div>
        <div className={styles.profile_setting}>
            <span className={styles.profile_setting}>...</span>
        </div>
        </div>
        <div className={styles.profile_interest}>
            <h1 className={styles.hobby}>Hobbeis</h1>
            <div className={styles.profile_hobby}>

        <p className={styles.interest}>Hills</p>
        <p className={styles.interest}>Hills</p>
            </div>
        </div>
            <h1>About</h1>
            <div className={styles.box}>
                <div className={styles.details}>

                <p className={styles.details_name}><img src={profileName} alt=""/>Johnny Depp</p>
                <p><img src={profileFlag}/>Sweden</p>
                <p><img src={profileMail}/>Johny.test@gmail.com</p>
                </div>
                <div className={styles.arrow} >

                <img src={arrowImage} alt=""></img>
                </div>
            </div>
        </div>
        
        </Card>
    )
}

export default Profile