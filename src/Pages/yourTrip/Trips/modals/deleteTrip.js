import React from 'react'
import styles from './delete.module.css';
import exclamation_mark_logo from "../../../../assets/your-trip/exclamation_mark.png";
import Button from '@mui/material/Button';
import { useContext } from 'react';
import { AuthContext } from '../../../../contextAPI/AuthContext';
import { useNavigate } from 'react-router-dom';


const DeleteTrip = (props) => {
  const navigate = useNavigate();

  const Author = useContext(AuthContext);
  

  const onDeleteHandler = async() => {
    const {place_id} = props;
    console.log("deleting place with id: ", place_id)

    try {
      const kazkas = await fetch(`http://localhost:5000/api/v1/user/places/delete/${place_id}`, { 
        method: 'POST', 
        headers: {
            "Content-Type" : "application/json",
            "accept" : "application/json",
            "authorization" : `Bearer ${Author.authenticatedUser.token.access_token}`
        }
      })
      console.log("delete response: ", kazkas)
    } catch (error) {
      console.log("delete error: ",error);
    }

    props.onClose()

  }


  return (
    <div className={styles.delete_container}>
      
      <img src={exclamation_mark_logo} alt="!" />

      <div className={styles.text_container}>
        <h1>Delete trip</h1>
        <p>
          You're going to delete this trip. Are you sure?
        </p>
      </div>

      <div className={styles.buttons}>
        <Button className={styles.cancel} onClick={props.onClose} variant="contained" color="success">No, Keep it</Button>
        <Button className={styles.submit} onClick={onDeleteHandler} variant="contained" color="success">Yes, Delete!</Button>
      </div>

    </div>
  )
}

export default DeleteTrip