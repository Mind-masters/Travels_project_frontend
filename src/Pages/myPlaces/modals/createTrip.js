import React, { useState, useContext } from 'react'
import styles from "./createTrip.module.css";
import Modal from '../../../components/shared/UI/Modal';
import { Create } from '../../../components/utils/places/create';
import Button from '../../../components/shared/UI/button/Button';
import { AuthContext } from '../../../contextAPI/AuthContext';
import LoadingSpinner from '../../../components/shared/UI/LoadingSpinner';
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { notify } from "../../../components/shared/UI/toast";
import AuthRequired from "../../../components/shared/layouts/AuthRequired";

// icons
import flag_icon from "../../../assets/flag.png";
import map_icon from "../../../assets/map_icon.png";
import photo_icon from "../../../assets/photo_icon.png";

// submodals
import SelectCountryModal from '../../../components/shared/UI/Popups/selectCountryModal';
import Location from '../../../components/shared/UI/map/location/index';
import ImageUpload from "./uploadImage";
import FormInput from '../../../components/shared/UI/formInput';
import DefineType from './defineType';

const CreateTrip = (props) => {

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const Auth = useContext(AuthContext);
  const token = Auth.isLoggedIn ? Auth.authenticatedUser.token.access_token : null

  const [countryModal, setCountryModal] = useState(false);
  const [typesModal, setTypesModal] = useState(false);
  const [locationModal, setLocationModal] = useState(false);
  const [imageModal, setImageModal] = useState(false);
  const parentModalHidden = countryModal || locationModal || imageModal;

  const onModalHide = () => {setCountryModal(false);setLocationModal(false);setImageModal(false);setTypesModal(false)}
  const onOpenTypesModal = () => setTypesModal(true);
  const onOpenCountryModal = () => setCountryModal(true);
  const onOpenLocationModal = () => {setLocationModal(true)};  
  const onOpenImageModal = () => setImageModal(true);

  // states and functions for validation
  const [typeInputError, setTypeInputError] = useState(false);
  const [countryInputError, setCountryInputError] = useState(false);
  const [locationInputError, setLocationInputError] = useState(false);
  const [imageInputError, setImageInputError] = useState(false);
  
  // states and functions for storing values
  const [typeValue, setTypeValue] = useState(null);
  const [descriptionValue, setDescriptionValue] = useState("");
  const [countryValue, setCountryValue] = useState(null);
  const [locationValue, setLocationValue] = useState(null);
  const [imageValue, setImageValue] = useState(null);

  // handlers for states
  const onSubmitType = (value) => {
    setTypeValue(value)
  };

  const onSubmitDescription = (value) => setDescriptionValue(value);
  const onSubmitCountryModal = (results) => {  setCountryValue({
    flag: results.flags.png,
    name: results.name.common
  }); onModalHide()}
  const onSubmitLocationModal = (results) => {setLocationValue(results); onModalHide()}
  const onSubmitImageModal = (results) => {setImageValue(results); onModalHide()}

  const onFormSubmitHandler = async() => {

    setTypeInputError(false);
    setCountryInputError(false);
    setLocationInputError(false);
    setImageInputError(false);
    if(!typeValue){setTypeInputError(true);return}
    if(!descriptionValue){return}    
    if(!countryValue || !countryValue.flag || !countryValue.name){setCountryInputError(true);return}
    if(!locationValue){setLocationInputError(true);return}
    if(!imageValue){setImageInputError(true);return}

    if(!token)return
    setIsLoading(true);


    const create_new_place = await Create(
      {
        type: typeValue[0].value,
        description: descriptionValue,
        country: countryValue,
        location: locationValue,
        image: imageValue
      },
      token
    )

    setIsLoading(false);


    if(create_new_place.status){
      notify(create_new_place.message, "success");
      navigate("/explore");
      if(props.onRefresh)props.onRefresh();
      return props.onClose();
    }
    else if(!create_new_place.status)notify(create_new_place.message, "error");

  }


  return (
    <>
      { !isLoading ?
        <div className={`${styles.container} ${parentModalHidden && styles.hidden}`}>
          <h1 className={styles.login_form_title}>Share Your Adventures</h1>

          <form className={styles.form_container} onSubmit={(e)=>{e.preventDefault()}}>

            <Modal 
              onClose={onModalHide}
              show={countryModal || locationModal || imageModal || typesModal} 
            >
              {typesModal && <DefineType onClose={onModalHide} onSubmit={onSubmitType} />}
              {countryModal && <SelectCountryModal onClose={onModalHide} onSubmit={onSubmitCountryModal} />}
              {
                locationModal && 
                  <Location 
                    onSubmit={onSubmitLocationModal} 
                    onClose={onModalHide}
                  />
              }
              {imageModal && <ImageUpload onClose={onModalHide} onSubmit={onSubmitImageModal} />}

            </Modal>


            
            <div className={styles.form_content}>

              <div onClick={onOpenTypesModal} style={{ border: `${typeInputError ? "2px solid rgb(209, 127, 127)" : "2px solid rgba(48, 47, 47, 0.3)"}` }} className={styles.select_type}>
                {typeValue ? 
                  <div> 
                    <img className={styles.input_icon} src={typeValue[0].icon} alt='' />
                    <span>{typeValue[0].value}</span>
                  </div>
                  :
                  <p style={{ padding: "10px" }}>Select type</p>
                }
              </div>

              <FormInput 
                isValid={true}
                type="description"
                name="Tell us about this place"
                value={descriptionValue}
                onChange={onSubmitDescription}
              >
                <div style={{ paddingLeft: "10px" }}></div>
              </FormInput>
              

              <div className={styles.logo_menu}>
                <img className={`${countryInputError && styles.icon_invalid} ${countryValue && !countryInputError && styles.icon_valid}`} onClick={onOpenCountryModal}  src={flag_icon} alt="" />
                <img className={`${locationInputError && styles.icon_invalid} ${locationValue && styles.icon_valid}`} onClick={onOpenLocationModal} src={map_icon} alt="" />
                <img className={`${imageInputError && styles.icon_invalid} ${imageValue && styles.icon_valid}`} onClick={onOpenImageModal} src={photo_icon} alt="" />
              </div>
            </div>



            <div className={styles.btn_container} >
              <AuthRequired>
                <Button onSubmit={onFormSubmitHandler} color="rgba(238, 125, 21, 1)">
                  <h1 style={{ color: "white" }}>Continue</h1>
                </Button>
              </AuthRequired>
            </div>


          </form>
        </div>
        :
        <LoadingSpinner asOverlay />
      }
    </>
  )
}

export default CreateTrip