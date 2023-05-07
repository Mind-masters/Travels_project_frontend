import React from 'react'
import styles from "./controllers.module.css";
import Button from '../../../../components/shared/UI/button/Button';


const Controllers = () => {

  return (


    <div className={styles.controllers}>
        <Button color="#EE7D15">
            <h1 className={styles.btn_text}>Become invitor</h1>
        </Button>

        <div className={styles.middle_content}>
            <hr />
            <h1>Or</h1>
            <hr />
        </div>

        <Button color="#2C2B2A">
            <h1 className={styles.btn_text}>Join others</h1>
        </Button>
    </div>
  )
}

export default Controllers