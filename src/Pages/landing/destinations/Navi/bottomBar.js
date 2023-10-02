import React from 'react'
import ReactGA from 'react-ga4';
import { useNavigate } from 'react-router-dom';
import logo from "../../../../assets/registration-modals/2_trip.png"
import about_logo from "../../../../assets/signs/about.png"
import all_right_logo from "../../../../assets/landing/all_right_logo.png"
import styles from "./bottomBar.module.css"
import { useState } from 'react';
import Modal from '../../../../components/shared/UI/Modal';
import AboutUs from '../../../../components/shared/UI/Footer/AboutUs';
const BottomBar = ({currPlaceType}) => {
    const navigate = useNavigate();
    const [showAbout, setShowAbout] = useState(false);
    
    const onShowAllHandler = () => {
        if(!currPlaceType)return
        
        let type_of_place=currPlaceType;

        
        if(currPlaceType==="Abandoned")type_of_place="Mystery places"
        if(currPlaceType==="Mystery")type_of_place="Mystery places"
        if(currPlaceType==="Roads")type_of_place="Road trip"

        ReactGA.event({
            category: 'User',
            action: 'Clicked the button',
            label: type_of_place
        });

        return navigate(`/explore/${type_of_place}`)
    }


    return (
        <>
        <Modal
            show={showAbout}
            onClose={()=>setShowAbout(false)}
        >
            <div className={styles.modal_wrapper}>
            <div className={styles.modal_wrapper_header} onClick={()=>setShowAbout(false)}>
                Close
            </div>
                {showAbout && <AboutUs />}
            </div>
        </Modal>
        <div className={styles.controll_bar}>

            <div className={styles.inner_bar}>
                {/* <img onClick={()=>setShowAbout(true)} className={styles.about_logo} src={about_logo} alt='' /> */}
                <div onClick={onShowAllHandler} className={styles.controll_bar_type}>
                    <img src={logo} alt='' style={{ width:"30px", height:"30px", padding:"1px", marginRight:"15px" }} />
                    {currPlaceType}
                </div>

                <div onClick={()=>navigate("/explore")} className={styles.controll_bar_all}>
                <p>All</p>
                <img src={all_right_logo} alt='' />
                </div>
            </div>
        </div>
        </>
    )
}

export default BottomBar