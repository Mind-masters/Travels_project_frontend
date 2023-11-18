import React from 'react'
import styles from './levelsHeader.module.css';

const levelsHeader = (props) => {
  return (
    <div>
         <div className={styles.levelIcon_wrapper}>
        {props.children}
        </div>
        <h3 className={styles.earn_point}>{props.header}</h3>
    </div>
  )
}

export default levelsHeader