import React from 'react'
import styles from "./yourTripWrapper.module.css";
import "./yourTripWrapper_shadow.css";

const YourTripWrapper = (props) => {


  return (
    <div className={`effect ${styles.wrapper} ${props.inherit && styles.inherit}`}>

      {
        props.header &&
        <div className={styles.header_container}>
          <h1>{props.header}</h1>
        </div>
      }

      <div className={styles.wrapper_content}>
        {props.children}
      </div>

    </div>
  )
}

export default YourTripWrapper