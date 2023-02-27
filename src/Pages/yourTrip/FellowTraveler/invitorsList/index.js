import React from 'react'
import styles from "./styles.module.css";
import Button from '../../../../components/shared/UI/button/Button';
import InvitorItem from './invitorItem';


const InvitorsList = (props) => {



  return (
    <div className={`${styles.container}`}>
      
      <div className={styles.filter_button}>
        <Button>
          <h1 style={{ color: "white"}}>Filter</h1>
        </Button>
      </div>

      {[1,2].map(invitor => <InvitorItem invitor={invitor} />)}
      
    </div>
  )
}

export default InvitorsList