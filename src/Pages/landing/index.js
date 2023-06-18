import Button from '../../components/shared/UI/button/Button';
import NewUser from '../PopUpPages/newUserModal';
import styles from "./landing.module.css";
import React, { useContext, useState } from 'react'

import Destinations from "./destinations";
import AboutUs from './aboutUs';
import Faq from './FAQ';

import MainHeader from './header';
import ImageContainer from "./imageContainer";
import { useNavigate } from 'react-router-dom';


import Authentication from '../PopUpPages/Authentication';
import { AuthContext } from '../../contextAPI/AuthContext';
import FellowTravelers from './FellowTravelers';


const LandingMain = (props) => {

    const navigate = useNavigate();
    const [showAuthenticationForm, setShowAuthenticationForm] = useState(false);
    const Auth = useContext(AuthContext);

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
                                <Button onSubmit={() => navigate("/explore")} color={"#EE7D15"}><p style={{ color: "white" }}>Explore places</p></Button>
                                {
                                    !Auth.authenticatedUser ?
                                    <Button onSubmit={() => setShowAuthenticationForm(true)} border={"1px solid rgba(44, 60, 77, 1)"}><p>Join us</p></Button>
                                    :
                                    <Button onSubmit={() => navigate("/social")} border={"1px solid rgba(44, 60, 77, 1)"}><p>Friends</p></Button>
                                }
                            </div>
                        </div>

                    </div>


                </div>
            
                <div className={styles.computer_bg_images}>
                    <ImageContainer />
                </div>


            </div>

            <Destinations/>
            <FellowTravelers />
            <AboutUs />
            <Faq />

            {
                showAuthenticationForm &&
                <Authentication 
                    signup 
                    show 
                    onClose={()=>setShowAuthenticationForm(false)}
                />
            }

        </div>
    )
}

export default LandingMain