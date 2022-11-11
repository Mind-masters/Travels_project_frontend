import React from 'react'
import styles from './delete.module.css';
import exclamation_mark_logo from "../../../../assets/your-trip/exclamation_mark.png";


const DeleteTrip = (props) => {


  return (
    <div className={styles.delete_container}>
      
      <img src={exclamation_mark_logo} alt="!" />

      <div className={styles.text_container}>
        <h1>Delete trip</h1>
        <p>
          You're going to delete this trip. Are you sure?
        </p>
      </div>

      <div className={styles.btn_container}>
        <button className={styles.keep_btn} onClick={()=>props.onClose()}> No, Keep it.</button>
        <button className={styles.delete_btn}> Yes, Delete!</button>
      </div>

    </div>
  )
}

export default DeleteTrip