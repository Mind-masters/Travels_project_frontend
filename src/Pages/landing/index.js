import React from 'react'
import styles from "./landing.module.css";
import NewUser from '../PopUpPages/newUserModal';
import BGImage from "../../assets/lookin_background.jpg"
import Button from '../../components/shared/UI/button/Button';
import { useContext, useState } from 'react';
import { AuthContext } from '../../contextAPI/AuthContext';
import Destinations from "./subtopics/destinations/destinations"
import Footer from "../footer/Footer"

const LandingMain = (props) => {

    const Auth = useContext(AuthContext);
    const [inputValue, setInputValue] = useState("");

    const ContentJSX = () => <div className={styles.text_content}>
        <h1>
            Unlimited travels
        </h1>

        <h2>unexplored locations, meetups</h2>

        <h3>and more.</h3>
    </div>
    
    const ContentInputJSX = () => <div className={styles.inputbox}>
        <input placeholder={`${Auth.isLoggedIn ? 'Enter your destination' : 'Email address'}`}  />
        <Button>
            <p style={{ color: "white" }}>{Auth.isLoggedIn ? "Explore" : "Join us!"}</p>
        </Button>
    </div>

    return (
        <div>

            {
            props.extra &&
            <NewUser />
            }
        
            <div className={styles.welcomePage}>
            
                <div className={styles.welcomePage_section1}>
                    <ContentJSX />
                </div>

                <div className={styles.welcomePage_section2}>
                    <img src={BGImage}alt="" />
                    <ContentJSX />
                </div>

                <div className={styles.welcomePage_content_input}>
                    <ContentInputJSX />
                </div>

            </div>

            <div>
                {!props.extra && <Destinations/>}
                {/* <PopDestinations/> */}
                <Footer/>
            </div>

        </div>
    )
}

export default LandingMain