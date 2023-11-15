import React from 'react'
import styles from "./congratulations.module.css";


const Congratulations = (props) => {

    if(!props.message)return null;

    return (
        <div className={styles.container}>
            <h1>Congratulations</h1>
            <p>
                {props.message}
            </p>

        </div>
    )
}

export default Congratulations