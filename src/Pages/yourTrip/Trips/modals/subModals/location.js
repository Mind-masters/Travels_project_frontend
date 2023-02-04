import React from 'react'
import styles from "./location.module.css";
import location_logo from "../../../../../assets/your-trip/location_logo.png";
import TextField from '@material-ui/core/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

const Location = (props) => {

    const [longitude, setLongitude] = useState(null);
    const [latitude, setLatitude] = useState(null);

    const [LongitudeError, setLongitudeError] = useState(false);
    const [LatitudeError, setLatitudeError] = useState(false);


    const onLongitudeChangeHandler = (e) => setLongitude(e.target.value);
    const onLatitudeChangeHandler = (e) => setLatitude(e.target.value);

    const onSubmitHandler = () => {

        setLatitudeError(false);
        setLongitudeError(false);

        if(longitude && latitude){
            if(longitude.length > 4 && latitude.length > 4){
                props.onSubmit({longitude, latitude});
            }
            if(latitude.length <= 4)setLatitudeError(true)
            if(longitude.length <= 4)setLongitudeError(true)
        }
        else{
            if(!latitude)setLatitudeError(true)
            if(!longitude)setLongitudeError(true)
        }

        
        
        

    }   

  return (
    <>

        <div className={styles.content}>
            <h1 >Let others know where they can find it</h1>
            <img src={location_logo} alt="location logo"/>

            <form>
                
                <div className={styles.inputs}>
                    <TextField type={"number"} className={styles.input} error={LongitudeError} id="outlined-basic" label="longitude" variant="outlined" onChange={onLongitudeChangeHandler} />
                    <TextField type={"number"} className={styles.input} error={LatitudeError} id="outlined-basic" label="latitude" variant="outlined" onChange={onLatitudeChangeHandler} />
                </div>

                <div className={styles.buttons}>
                    <Button className={styles.cancel} onClick={props.onClose} variant="contained" color="success">Cancel</Button>
                    <Button className={styles.submit} onClick={onSubmitHandler} variant="contained" color="success">Submit</Button>
                </div>
            </form>
        </div>
        
        
    </>
  )
}

export default Location