import React, { useEffect, useState } from 'react'
import styles from "./bottom_nav.module.css";
import { useNavigate } from 'react-router-dom';
import filter_places_logo from "../../../assets/signs/filter.png";
import add_new_place_logo from "../../../assets/signs/plus.png";
import new_friends_logo from "../../../assets/signs/friends.png";
import scrollDown_logo from "../../../assets/signs/scroll_down.png";
import ScrollDown from './scroll_down';

const BottomNavigation = () => {

    const navigate = useNavigate();

    const [showArrow, setShowArrow] = useState(true);

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setShowArrow(false);
        } else {
            setShowArrow(true);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={styles.fixed_add_icon}>
            {
                showArrow ? 
                <div className={styles.scrollDown_logo}> 
                    <ScrollDown />
                </div>
                :
                <div className={styles.controll_logos}>
                    <img style={{ marginRight:"12px" }} alt='' src={filter_places_logo} />
                    <img onClick={()=>{navigate("/uploads")}} style={{ marginRight:"12px" }} src={add_new_place_logo} alt=''/>
                    <img onClick={()=>{navigate("/social")}} src={new_friends_logo} alt=''/>
                </div>
            }
        </div>
    )
}

export default BottomNavigation