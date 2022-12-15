import React, { useState, useContext } from 'react'
import styles from "./update.module.css";
import Modal from '../../../../components/shared/UI/Modal';
import TextField from '@material-ui/core/TextField';
import { AddNewPlace } from '../../../../components/utils/places/addNewPlace';
import Button from '@mui/material/Button';
import { AuthContext } from '../../../../contextAPI/AuthContext';
import LoadingSpinner from '../../../../components/shared/UI/LoadingSpinner';
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { notify } from "../../../../components/shared/UI/toast";
// icons
import flag_icon from "../../../../assets/flag.png";
import map_icon from "../../../../assets/map_icon.png";
import photo_icon from "../../../../assets/photo_icon.png";

// submodals
import SelectCountryModal from '../../../../components/shared/UI/Modal/subModals/selectCountryModal';
import Location from './subModals/location';
import ImageUpload from "./subModals/uploadImage";

const UpdateTrip = (props) => {

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  // states and funtions for modals
  const Auth = useContext(AuthContext);
  const token = Auth.isLoggedIn ? Auth.authenticatedUser.token.access_token : null

  const [countryModal, setCountryModal] = useState(false);
  const [locationModal, setLocationModal] = useState(false);
  const [imageModal, setImageModal] = useState(false);

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


  // states and functions for validation
  const [countryInputError, setCountryInputError] = useState(false);
  const [locationInputError, setLocationInputError] = useState(false);
  const [imageInputError, setImageInputError] = useState(false);
  const [descriptionInputError, setDescriptionInputError] = useState(false);
  const [titleInputError, setTitleInputError] = useState(false);
  

  // states and functions for values
  const [countryValue, setCountryValue] = useState(null);
  const [locationValue, setLocationValue] = useState(null);
  const [imageValue, setImageValue] = useState(false);
  const [descriptionValue, setDescriptionValue] = useState(null);
  const [titleValue, setTitleValue] = useState(null);

  const onSubmitDescription = (e) => setDescriptionValue(e.target.value);
  const onSubmitTitle = (e) => setTitleValue(e.target.value);

  const onFormSubmitHandler = async(e) => {
    setTitleInputError(false);
    setDescriptionInputError(false);
    setCountryInputError(false);
    setLocationInputError(false);
    setImageInputError(false);

    if(!titleValue){setTitleInputError(true);return}
    if(!descriptionValue){setDescriptionInputError(true);return}
    if(!countryValue){setCountryInputError(true);return}
    if(!locationValue){setLocationInputError(true);return}
    if(!imageValue){setImageInputError(true);return}

    setIsLoading(true);


    const create_new_place = await AddNewPlace(
      {
        description: descriptionValue,
        title: titleValue,
        country: countryValue,
        location: locationValue,
        image: imageValue
      },
      token
    )

    setIsLoading(false);


    if(create_new_place.status){
      notify(create_new_place.data, "success");
      navigate("/your-trip");
      props.onClose();
    }
    else if(!create_new_place.status)notify(create_new_place.error, "error");

  }

  


  return (
    <>
      { !isLoading ?
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
                <TextField
                  variant='outlined'
                  error={titleInputError}
                  aria-label="minimum height"
                  label="Title..."
                  className={styles.text_area}
                  onChange={onSubmitTitle}
                /> 
              </div>

              <div className={styles.description_container}>
                <TextField
                  variant='outlined'
                  error={descriptionInputError}
                  multiline={true}
                  aria-label="minimum height"
                  label="Description..."
                  className={styles.text_area}
                  onChange={onSubmitDescription}
                /> 
              </div>

              <div className={styles.logo_menu}>
                <img className={`${countryInputError && styles.icon_invalid}`} onClick={onOpenCountryModal}  src={flag_icon} alt="" />
                <img className={`${locationInputError && styles.icon_invalid}`} onClick={onOpenLocationModal} src={map_icon} alt="" />
                <img className={`${imageInputError && styles.icon_invalid}`} onClick={onOpenImageModal} src={photo_icon} alt="" />
              </div>
            </div>


            <Button className={styles.button} onClick={onFormSubmitHandler} variant="contained" color="success">
              Add
            </Button>

          </form>
        </div>
        :
        <LoadingSpinner asOverlay />
      }
    </>
  )
}

export default UpdateTrip