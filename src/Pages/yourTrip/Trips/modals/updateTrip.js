import React, { useState } from 'react'
import styles from "./update.module.css";
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Button from '@mui/material/Button';
import flag_icon from "../../../../assets/flag.png";
import map_icon from "../../../../assets/map_icon.png";
import photo_icon from "../../../../assets/photo_icon.png";

const UpdateTrip = (props) => {

  

  const [expandCoordsInput, setExpandCoordsInput] = useState(false);
  const [definedCoordinates, setDefinedCoordinates] = useState(null);

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Share your experiences with others</h1>

      <form>

        <div className={styles.textfield_container}>
          <img src={flag_icon} alt="" />
          <TextField 
            sx={{ input: { color: 'red' } }}
            className={styles.input} 
            fullWidth 
            label="country" 
            id="fullWidth" 
          />
        </div>

        <div className={styles.textfield_container}>
          <img src={map_icon} alt="" />
          <TextField 
            sx={{ input: { color: 'red' } }}
            className={styles.input} 
            fullWidth 
            label="coords" 
            id="fullWidth" 
          />
        </div>

        <div className={styles.textfield_container}>
          <img src={photo_icon} alt="" />
          <TextField 
            className={styles.input} 
            fullWidth 
            label="image url" 
            id="fullWidth" 
          />
        </div>

        {/* <div className={styles.textfield_container}>
          <TextareaAutosize
            aria-label="minimum height"
            minRows={3}
            placeholder="Description"
            style={{ width: 200 }}
          />
        </div> */}


        <Button className={styles.button} variant="contained" color="success">
          Add
        </Button>

      </form>
    </div>
  )
}

export default UpdateTrip