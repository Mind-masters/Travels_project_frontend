import React from 'react'
import styles from "./styles/listItem.module.css";

const YourTripListItem = (props) => {



  return (
    <div className={styles.item_container}>
      {
        !props.secured && 
        <div className={styles.controllers_container}>
          <button>Review</button>
          <button>Delete</button>
          <button>Update</button>
        </div>
      }

      <div className={styles.item_content_container}>
        <img src={props.element.image} alt={props.element.title} />
      </div>
    </div>
  )
}

export default YourTripListItem