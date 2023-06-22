import React from 'react'
import styles from "./styles.module.css";


const InitialState = ({onChangeFile}) => {  
    
    return (
        <React.Fragment>
          <div>
            <input
              id="contained-button-file"
              accept=".jpg,.png,.jpeg"
              className={styles.input}
              onChange={onChangeFile}
              type="file"
            />
            <label htmlFor="contained-button-file">
              <p className={styles.add_photo_header}>Add photo</p>
            </label>
          </div>
        </React.Fragment>
    );
}

export default InitialState