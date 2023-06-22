import React from 'react'
import retake_photo_icon from "../../../../assets/retake_photo.png";
import styles from "./styles.module.css";


const UploadedState = ({imageResetHandler, imageSubmitHandler, file_base64}) => {


      return (
      <React.Fragment>
        <div>
          <img src={retake_photo_icon} alt="" onClick={imageResetHandler} className={styles.retake} />
          <img
            onClick={imageSubmitHandler}
            className={styles.media}
            src={file_base64}
            alt=""
          />
        </div>
      </React.Fragment>
    );
}

export default UploadedState