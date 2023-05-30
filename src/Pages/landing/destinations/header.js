import React from 'react'
import styles from "./header.module.css";
import discover_all_arrow from '../../../assets/landing/long-arrow-right.png'
import { useNavigate, NavLink, Navigate } from 'react-router-dom';


const Header = () => {

  const navigate = useNavigate();

  return (
    <div className={styles.title_container}>
        <h1>
        Your journey starts here
        </h1>
        <div className={styles.discover_all}>
            <p onClick={() => {navigate("/explore")}}>Discover All</p>
            <img src={discover_all_arrow} alt='' />
        </div>
    </div>
  )
}

export default Header