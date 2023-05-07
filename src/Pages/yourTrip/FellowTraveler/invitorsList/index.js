import React from 'react'
import styles from "./list.module.css";
import Button from '../../../../components/shared/UI/button/Button';
import InvitorItem from './invitorItem';
import filter_icon from "../../../../assets/your-trip/filter_icon.png";


const InvitorsList = (props) => {



  return (
    <div className={`${styles.container}`}>
      
      <div className={styles.header_line}>
        <h1>Suggestions</h1>
        <div className={styles.filter}>
          <img src={filter_icon} alt=""/>
          <h1>Filter</h1>
        </div>
      </div>

      {[1,2].map(invitor => <InvitorItem invitor={invitor} />)}
      
    </div>
  )
}

export default InvitorsList