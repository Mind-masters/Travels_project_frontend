import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../../../../../contextAPI/AuthContext'
import Button from '../../../../../../components/shared/UI/button/Button'
import styles from "./balance.module.css";
import boost_icon from "../../../../../../assets/explore/gifts_boost.png";

const Balance = () => {

    const Auth = useContext(AuthContext);
    console.log("heyy: ", Auth)

    return (
        <div className={styles.container}>
            <h1 className={styles.balance_header}>Your Balance:</h1>
            <div className={styles.auth_info}>
                <span>500</span>
                <button className={styles.btn_wrapper} color="#EE7D15">
                    <div className={styles.boost_btn}>
                        <div className={styles.boost_icon_wrapper}>
                            <img src={boost_icon} alt='' />
                        </div>
                        <h1 style={{ color:"white"}}>Boost</h1>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default Balance