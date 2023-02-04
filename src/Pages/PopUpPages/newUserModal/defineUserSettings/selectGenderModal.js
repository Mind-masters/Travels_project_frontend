import React, { useEffect, useState } from 'react'
import styles from "./selectGenderModal.module.css";


const SelectGenderModal = (props) => {

  const genderList = [
    "Women", "Man", "Non-binary", "I prefer not to say"
  ]


  const genderClickHandler = (gender) => {
    return props.onSubmit(gender);
  }


  return (
    <>
      <div className={styles.modal_content}>
      

      <ul>
        {genderList.map(option => <h1 key={option} onClick={genderClickHandler.bind(null,option)}>{option}</h1>)}
      </ul>

      </div>
    
    </>
  )
}

export default SelectGenderModal