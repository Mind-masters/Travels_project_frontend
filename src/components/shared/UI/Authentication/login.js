import React from 'react'
import styles from "./login.module.css"
import admin_logo from "../../../../assets/admin.png"
import Button from "../button/Button";
import { useState } from 'react';


const Login = () => {



    return (
        <div className={styles.container}>
            <div className={styles.form_container}>
                <form>
                    <div className={styles.form_icon}>
                        <img src={admin_logo} />
                    </div>
                    <h3 className={styles.title}>Login</h3>
                    <input className={styles.form_control} type="email" placeholder="Email Address" />
                    <input className={styles.form_control} type="password" placeholder="Password" />  
                    <button type="button" className={styles.btn}>Login</button>
                    {/* <div className={styles.btn}>
                        <Button >Submit</Button>
                    </div> */}
                </form>
            </div>
        </div>
    )
}

export default Login