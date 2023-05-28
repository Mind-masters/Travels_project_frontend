import React from 'react'
import styles from "./header.module.css";

const MainHeader = () => {


  return (

    <div  className={styles.container}> 
      <div className={styles.welcome_page_text}>
        <p>Unexplored locations,</p>
        <div className={styles.main_line}>
            <p>Blogs, </p>
            <div>
                <p>travel friends</p>
                <hr style={{ marginLeft: "5%", bottom: "5px" }} />
                <hr />
            </div>
        </div>
        <p>and more!</p>
      </div>                           
    </div>
    
  )
}

export default MainHeader