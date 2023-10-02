import React, { useState, useContext } from 'react'
import styles from "./topBar.module.css"
import Button from '../../../../components/shared/UI/button/Button';
import Authentication from '../../../PopUpPages/Authentication';
import { AuthContext } from '../../../../contextAPI/AuthContext';
import { useNavigate } from 'react-router-dom';

import info_logo from "../../../../assets/signs/about.png";
import admin_logo from "../../../../assets/signs/admin.png";
import friends_logo from "../../../../assets/signs/friends.png";
import shop_logo_logo from "../../../../assets/signs/shop.png";
import gifts_logo from "../../../../assets/signs/gifts.png";


const TopBar = () => 
{

    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        console.log("Scrolled: ", scrolled)
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

            <img onClick={imageClickHandler} className={styles.admin_logo} src={info_logo} alt='' /> 

            {   visible && 
                <div className={styles.menu_logos}>
                    <img onClick={()=>navigate("/social")} className={styles.admin_logo} src={friends_logo} alt='' /> 
                    <img onClick={()=>navigate("/shop")} className={styles.admin_logo} src={shop_logo_logo} alt='' /> 
                    <img onClick={()=>navigate("/benefits")} className={styles.admin_logo} src={gifts_logo} alt='' /> 
                </div>
            }

            <div className={styles.login_btn}>
                <Button color={visible && "#EE7D15"} onSubmit={User.isLoggedIn?User.logout:openAuthenticationForm} border={!visible && "2px solid #FFFFFF"} height="auto" >
                    <h1 style={{ color:"#FFFFFF", padding:"6px 12px" }}>{User.isLoggedIn?"Logout":"Join us"}</h1>
                </Button>
            </div>
        </div>
    )
}

export default TopBar