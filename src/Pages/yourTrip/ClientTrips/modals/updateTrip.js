import React, { useState, useContext, useEffect } from 'react'
import styles from "./update.module.css";
import Modal from '../../../../components/shared/UI/Modal';
import { Create } from '../../../../components/utils/places/create';
import Button from '@mui/material/Button';
import { AuthContext } from '../../../../contextAPI/AuthContext';
import LoadingSpinner from '../../../../components/shared/UI/LoadingSpinner';
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { notify } from "../../../../components/shared/UI/toast";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

// icons
import flag_icon from "../../../../assets/flag.png";
import map_icon from "../../../../assets/map_icon.png";
import photo_icon from "../../../../assets/photo_icon.png";

// submodals
import SelectCountryModal from '../../../../components/shared/UI/Modal/subModals/selectCountryModal';
import Location from '../../../../components/shared/UI/map/location/index';
import ImageUpload from "./uploadImage";
import FormInput from '../../../../components/shared/UI/formInput';

const UpdateTrip = (props) => {

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const Auth = useContext(AuthContext);
  const token = Auth.isLoggedIn ? Auth.authenticatedUser.token.access_token : null
  const [countryModal, setCountryModal] = useState(false);
  const [locationModal, setLocationModal] = useState(false);
  const [imageModal, setImageModal] = useState(false);
  const handle = useFullScreenHandle();
  const parentModalHidden = countryModal || locationModal || imageModal;

  const onModalHide = () => {setCountryModal(false);setLocationModal(false);setImageModal(false);}
  const onOpenCountryModal = () => setCountryModal(true);
  const onOpenLocationModal = () => {handle.enter();setLocationModal(true)};  
  const onOpenImageModal = () => setImageModal(true);

  // states and functions for validation
  const [countryInputError, setCountryInputError] = useState(false);
  const [locationInputError, setLocationInputError] = useState(false);
  const [imageInputError, setImageInputError] = useState(false);
  const [descriptionInputError, setDescriptionInputError] = useState(false);
  const [titleInputError, setTitleInputError] = useState(false);
  

  // states and functions for storing values
  const [countryValue, setCountryValue] = useState(null);
  const [locationValue, setLocationValue] = useState(null);
  const [imageValue, setImageValue] = useState(false);
  const [descriptionValue, setDescriptionValue] = useState(null);
  const [titleValue, setTitleValue] = useState(null);

  const onSubmitDescription = (value) => setDescriptionValue(value);
  const onSubmitCountryModal = (results) => {setCountryValue(results); onModalHide()}
  const onSubmitLocationModal = (results) => {setLocationValue(results); onModalHide()}
  const onSubmitImageModal = (results) => {setImageValue(results); onModalHide()}
  const onSubmitTitle = (value) => setTitleValue(value);

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

    
    const create_new_place = await Create(
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
      notify(create_new_place.message, "success");
      navigate("/your-trip");
      
      props.onClose();
    }
    else if(!create_new_place.status)notify(create_new_place.message, "error");

  }

  useEffect(() => {
    handle.enter();
  }, [locationModal])


  return (
    <>
      { !isLoading ?
        <div className={`${styles.container} ${parentModalHidden && styles.hidden}`}>
          <h1 className={styles.login_form_title}>Share your experience</h1>

          <form className={styles.form_container} onSubmit={(e)=>{e.preventDefault()}}>

            <Modal 
              onClose={onModalHide}
              show={countryModal || locationModal || imageModal} 
            >
              {countryModal && <SelectCountryModal onClose={onModalHide} onSubmit={onSubmitCountryModal} />}
              {
                locationModal && 
                <FullScreen handle={handle}>
                  <Location 
                    onSubmit={onSubmitLocationModal} 
                    onClose={onModalHide}
                  />
                </FullScreen>
              }
              {imageModal && <ImageUpload onClose={onModalHide} onSubmit={onSubmitImageModal} />}

            </Modal>
            
            <div className={styles.form_content}>

              <div className={styles.title_container}>
                <FormInput 
                  isValid={true}
                  name="Title"
                  value={titleValue}
                  onChange={onSubmitTitle}
                />
              </div>

              <div className={styles.description_container}>
                <FormInput 
                  isValid={true}
                  name="Description"
                  value={descriptionValue}
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