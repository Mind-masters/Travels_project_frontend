import React, { useState } from 'react'
import styles from "./update.module.css";
import Modal from '../../../../components/shared/UI/Modal';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import TextField from '@material-ui/core/TextField';

import Button from '@mui/material/Button';

// icons
import flag_icon from "../../../../assets/flag.png";
import map_icon from "../../../../assets/map_icon.png";
import photo_icon from "../../../../assets/photo_icon.png";

// submodals
import SelectCountryModal from '../../../../components/shared/UI/Modal/subModals/selectCountryModal';
import Location from './subModals/location';
import ImageUpload from "./subModals/uploadImage";

const UpdateTrip = (props) => {

  const [countryModal, setCountryModal] = useState(false);
  const [locationModal, setLocationModal] = useState(false);
  const [imageModal, setImageModal] = useState(false);

  // states for values
  const [countryValue, setCountryValue] = useState(null);
  const [locationValue, setLocationValue] = useState(null);
  const [imageValue, setImageValue] = useState(false);
  const [descriptionValue, setDescriptionValue] = useState(null);

  const parentModalHidden = countryModal || locationModal || imageModal;

  const onModalHide = () => {
    setCountryModal(false);
    setLocationModal(false);
    setImageModal(false);
  }

  const onOpenCountryModal = () => setCountryModal(true);
  const onOpenLocationModal = () => setLocationModal(true);  
  const onOpenImageModal = () => setImageModal(true);
  
  const onSubmitCountryModal = (results) => {setCountryValue(results); onModalHide()}
  const onSubmitLocationModal = (results) => {setLocationValue(results); onModalHide()}
  const onSubmitImageModal = (results) => {setImageValue(results); onModalHide()}

  const onSubmitDescription = (e) => setDescriptionValue(e.target.value);


  const onFormSubmitHandler = (e) => {
    // e.preventDefault();
    console.log("values: ", [
      countryValue,
      locationModal,
      imageValue,
      descriptionValue
    ])
  }



  return (
    <div className={`${styles.container} ${parentModalHidden && styles.hidden}`}>
      <h1 className={styles.header}>Share your experience</h1>

      <form className={styles.form_container}>
        <Modal 
          onCancel={onclose}
          show={countryModal || locationModal || imageModal} 
        >
          {countryModal && <SelectCountryModal onClose={onModalHide} onSubmit={onSubmitCountryModal} />}
          {locationModal && <Location onClose={onModalHide} onSubmit={onSubmitLocationModal} />}
          {imageModal && <ImageUpload onClose={onModalHide} onSubmit={onSubmitImageModal} />}

        </Modal>
        
        <div className={styles.form_content}>

          <div className={styles.title_container}>
            <TextareaAutosize
              aria-label="minimum height"
              placeholder="Title..."
              className={styles.text_area}
              maxRows={1}
              onChange={onSubmitDescription}
            /> 
          </div>

          <div className={styles.description_container}>
            <TextareaAutosize
              aria-label="minimum height"
              placeholder="Description..."
              className={styles.text_area}
              onChange={onSubmitDescription}
              maxRows={5}
            /> 
          </div>


          <div className={styles.logo_menu}>
            <img onClick={onOpenCountryModal}  src={flag_icon} alt="" />
            <img onClick={onOpenLocationModal} src={map_icon} alt="" />
            <img onClick={onOpenImageModal} src={photo_icon} alt="" />
          </div>
          
          
        </div>


        <Button className={styles.button} variant="contained" color="success">
          Add
        </Button>

      </form>
    </div>
  )
}

export default UpdateTrip