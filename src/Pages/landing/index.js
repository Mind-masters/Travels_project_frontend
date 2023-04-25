import React, {useState} from 'react'
import styles from "./landing.module.css";
import NewUser from '../PopUpPages/newUserModal';
import Button from '../../components/shared/UI/button/Button';
import Destinations from "./destinations";
import Authentication from '../PopUpPages/Authentication';

import AboutUs from './aboutUs';
import Faq from './FAQ';
import SignUp_Form from '../../components/signUp-form/SignUp_Form';
import SignIn_Form from '../../components/sigIn-form/SignIn_Form';



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

                        <div className={styles.welcome_page_text}>
                            
                            <p>Unexplored locations,</p>
                            <div className={styles.main_line}>
                                <p>Discounts, </p>
                                <div>
                                    <p>new friends</p>
                                    <hr style={{ marginLeft: "5%", bottom: "5px" }} />
                                    <hr />
                                </div>
                            </div>
                            <p>and more!</p>
                        </div>

                        <div className={styles.welcome_page_controllers}>
                            <div className={styles.controllers}>
                                <Button color={"#EE7D15"}><p style={{ color: "white" }}>Explore places</p></Button>
                                <Button border={"1px solid rgba(44, 60, 77, 1)"}><p>Join us</p></Button>
                            </div>
                        </div>

                    </div>


                </div>
            

                <div className={styles.welcome_page_bg_images}>

                    <div className={styles.image_big} />
                    <div className={styles.image_small} />

                </div>


            </div>

            {!props.extra && <Destinations/>}
            <AboutUs />
            <Faq />


        </div>
    )
}

export default LandingMain