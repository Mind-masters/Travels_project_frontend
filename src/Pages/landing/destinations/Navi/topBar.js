import React, { useState, useContext } from 'react'
import styles from "./topBar.module.css"
import Button from '../../../../components/shared/UI/button/Button';
import Authentication from '../../../PopUpPages/Authentication';
import { AuthContext } from '../../../../contextAPI/AuthContext';
import { useNavigate } from 'react-router-dom';

import info_logo from "../../../../assets/signs/about.png";
import friends_logo from "../../../../assets/signs/friends.png";
import gift_logo from "../../../../assets/signs/gifts.png";
import places_icon from "../../../../assets/signs/map_pin.png";
import shop_white_logo_logo from "../../../../assets/signs/white_shop_icon.png";
import shop_colorful_logo_logo from "../../../../assets/signs/shop_2.png";
import map_pin_logo from "../../../../assets/signs/map_pin.png";


const TopBar = () => 
{

    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        // console.log("Scrolled: ", scrolled)
        if (scrolled > 140){
            setVisible(true)
        } 
        else if (scrolled <= 400){
            setVisible(false)
        }
    };

      
    window.addEventListener('scroll', toggleVisible);

    const User = useContext(AuthContext);
    const navigate = useNavigate();
    
    const [authenticationIsOpen, setAuthenticationIsOpen] = useState(false);

    const openAuthenticationForm = () => setAuthenticationIsOpen(true);
  
    const closeAuthenticationForm = () => setAuthenticationIsOpen(false);

    const imageClickHandler = () => {
        if(User.isLoggedIn && User.authenticatedUser.data){
            navigate(`/profile/${User.authenticatedUser.data._id}`)
        }
        else{
            openAuthenticationForm();
        }
    }

    return (
        <div className={`${styles.container} ${visible && styles.white}`}>
            <Authentication
                show={authenticationIsOpen}
                onClose={closeAuthenticationForm}
            />

            { visible && 
                <div className={styles.header_text}>
                    <h1><span>Trip</span>Whoop<span>!</span></h1>
                </div>
                
            }

            <div className={styles.menu_logos}>
                
                <div className={styles.menu_logos_insider}> 
                    <img onClick={()=>navigate("/social")} className={styles.admin_logo} src={friends_logo} alt='' /> 
                    <img onClick={()=>navigate("/explore")} className={styles.admin_logo} src={places_icon} alt='' /> 
                    <img onClick={()=>navigate("/benefits")} className={styles.admin_logo} src={gift_logo} alt='' /> 
                </div> 
                
            </div>

            

            <div className={styles.login_btn}>
                <img onClick={()=>navigate("/shop")} src={visible ? shop_colorful_logo_logo : shop_white_logo_logo} alt='' />
                <Button color={visible && "#EE7D15"} onSubmit={User.isLoggedIn?User.logout:openAuthenticationForm} border={!visible? "2px solid #FFFFFF": "2px solid #EE7D15"} height="auto" >
                    <h1 style={{ color:"#FFFFFF", padding:"6px 12px" }}>{User.isLoggedIn?"Logout":"Join us"}</h1>
                </Button>
            </div>
        </div>
    )
}

export default TopBar