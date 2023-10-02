import React from 'react'
import styles from "./header.module.css";

const MainHeader = () => {


  return (

    <div className={styles.container}> 
      <div>
        <div className={styles.main_line}>
          <p>Your</p>
          <div>
            <p>Journey</p>
            <hr style={{ marginLeft: "7%", bottom: "5px" }} />
            <hr />
          </div>
          <p>Starts</p>
          <p className={styles.flex_}>Here</p>
        </div>
      </div>         
    </div>
    
  )
}

export default MainHeader