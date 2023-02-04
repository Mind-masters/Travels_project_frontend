import React from 'react'
import logo from "../../../../assets/logo.PNG";
import backArrow from "../../../../assets/landing/back_arrow.png";
import nextArrow from "../../../../assets/landing/next_arraow.png";
import styles from "./header.module.css";

const Header = (props) => {
  return (
    <div>
      <div className={styles.pagination}>
        <div className={`${props.page === 1 && styles.filled}`}></div>
        <div className={`${props.page === 2 && styles.filled}`}></div>
        <div className={`${props.page === 3 && styles.filled}`}></div>
      </div>
      <div className={styles.top_menu_container}>
          <img onClick={props.onPrev || null} className={`${styles.back_arrow} ${!props.onPrev && styles.invisible_arrow}`} src={backArrow} alt="back" />
          <img className={styles.main_logo} src={logo} alt="logo" />
          <img onClick={props.onSkip || null} className={`${styles.next_arrow} ${!props.onSkip && styles.invisible_arrow}`} src={nextArrow} alt="next" />
      </div>

      <div className={styles.about_container}>
          <h1>{props.mainText || "Main text"}</h1>
          <p>{props.subText || "Sub text"}</p>
      </div>

    </div>
  )
}

export default Header