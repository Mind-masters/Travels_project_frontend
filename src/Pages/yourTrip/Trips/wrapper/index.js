import React from 'react'
import styles from "./yourTripWrapper.module.css";
import "./yourTripWrapper_shadow.css";

const YourTripWrapper = (props) => {


  return (
    <div className={`effect ${styles.wrapper}`}>

      {
        props.header &&
        <div className={styles.header_container}>
          <h1>{props.header}</h1>
        </div>
      }

      {props.children}
    </div>
  )
}

export default YourTripWrapper