import React from 'react'
import styles from "./insideBounce.module.css";
import { Bounce } from 'react-activity';

const InsideBounce = () => {
  return (
    <div className={styles.loading}>
      <Bounce size="20px" color="#EE7D15" />
    </div>
  )
}

export default InsideBounce