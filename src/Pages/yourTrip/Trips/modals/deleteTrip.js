import React from 'react'
import styles from './delete.module.css';
import exclamation_mark_logo from "../../../../assets/your-trip/exclamation_mark.png";
import { CircularProgress, Button } from '@material-ui/core';
import "react-toastify/dist/ReactToastify.css";
import { notify } from "../../../../components/shared/UI/toast";
import { useContext } from 'react';
import { AuthContext } from '../../../../contextAPI/AuthContext';
import { deletePlaceById } from '../../../../components/utils/places/delete';
import { useState } from 'react';


const DeleteTrip = (props) => {

  const Author = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);

  const onDeleteHandler = async() => {
    const {place_id} = props;
    setIsLoading(true);

    const fetch_delete = await deletePlaceById(place_id, Author.authenticatedUser && Author.authenticatedUser.token.access_token);

    setIsLoading(false);
    if(fetch_delete.status){
      notify(fetch_delete.message, "success");
      props.onClose(false);
    }
    if(!fetch_delete.status)notify(fetch_delete.message, "error");



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
        {!isLoading && <Button className={styles.cancel} onClick={props.onClose.bind(null,true)} variant="contained" >No, Keep it</Button>}
        <Button className={styles.submit} onClick={onDeleteHandler} variant="contained" >
          {isLoading && <CircularProgress className={styles.loading_btn}/>}
          {!isLoading && 'Click Me'}
        </Button>
      </div>      
      

    </div>
  )
}

export default DeleteTrip