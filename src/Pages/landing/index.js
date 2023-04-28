import Button from '../../components/shared/UI/button/Button';
import NewUser from '../PopUpPages/newUserModal';
import styles from "./landing.module.css";
import React, {useState} from 'react'

import Destinations from "./destinations";
import AboutUs from './aboutUs';
import Faq from './FAQ';

import MainHeader from './header';
import ImageContainer from "./imageContainer";

// import SignUp_Form from '../../components/signUp-form/SignUp_Form';
// import SignIn_Form from '../../components/sigIn-form/SignIn_Form';
// import Authentication from '../PopUpPages/Authentication';



const LandingMain = (props) => {

    return (
        <div>

            {
                props.extra &&
                <NewUser />
            }
        
            <div className={styles.welcome_page}>

                <div className={styles.welcome_page_content}>

                    <div className={styles.content}>

                        <MainHeader />

                        <div className={styles.mobile_bg_images}>
                            <ImageContainer />
                        </div>


                        <div className={styles.welcome_page_controllers}>
                            <div className={styles.controllers}>
                                <Button color={"#EE7D15"}><p style={{ color: "white" }}>Explore places</p></Button>
                                <Button border={"1px solid rgba(44, 60, 77, 1)"}><p>Join us</p></Button>
                            </div>
                        </div>

                    </div>


                </div>
            
                <div className={styles.computer_bg_images}>
                    <ImageContainer />
                </div>


            </div>

            {!props.extra && <Destinations/>}
            <AboutUs />
            <Faq />


        </div>
    )
}

export default LandingMain