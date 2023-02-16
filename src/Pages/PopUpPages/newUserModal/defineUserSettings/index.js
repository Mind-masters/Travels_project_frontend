import React, { useState } from 'react'
import Modal from '../../../../components/shared/UI/Modal';
import SelectCountryModal from '../../../../components/shared/UI/Modal/subModals/selectCountryModal';
import SelectGenderModal from './selectGenderModal';
import "react-toastify/dist/ReactToastify.css";
import { notify } from "../../../../components/shared/UI/toast";
import { Button } from '@material-ui/core';
import styles from "./defineUserSettings.module.css";


import Header from '../header';

const DefineUserSettings = (props) => {

  const [isModalActive, setIsModalActive] = useState(false);

  const [genderValue, setGenderValue] = useState(null);
  const [openGenderModalActive, setOpenGenderModalActive] = useState(false);

  const [countryValue, setCountryValue] = useState(null);
  const [openCountryModalActive, setOpenCountryModalActive] = useState(false);

  const [bookingValue, setBookingValue] = useState(false);
  const [fellowValue, setFellowValue] = useState(false);
  const [homeStayValue, setHomeStayValue] = useState(false);


  const GenderInputActivateHandler = () => {
    setIsModalActive(true);
    setOpenGenderModalActive(true);
  }

  const SubmitGenderModal = (gender) => {
    closeModalHandler();
    setGenderValue(gender)
  }



  const CountryInputActivateHandler = () => {
    setIsModalActive(true);
    setOpenCountryModalActive(true);
  }

  const SubmitCountryModal = (country, status) => {
    closeModalHandler();
    if(!status)console.log("err");
    setCountryValue(country)
  }


  const closeModalHandler = () => {
    setIsModalActive(false)
    setOpenCountryModalActive(false);
    setOpenGenderModalActive(false);
  }

  const onSubmitHandler = () => {
    if(!genderValue) notify("Please define your gender", "error")
    if(!countryValue) notify("Please define your country", "error")
    if(genderValue && countryValue)return props.onSubmit(
      {
        gender: genderValue, 
        country: countryValue, 
        settings: {
          looking_followed_travelers: fellowValue, 
          home_stay_programs: homeStayValue, 
          booking_opportunities: bookingValue
        }
      }
    )
  }



  return (
    <div style={{ display:"flex", flexDirection: "column" }}>
      <Header 
        mainText={"About you"}
        subText={"Tell us about yourself to start building your profile"}
        onPrev={props.onPrev || null}
        page={3}
      />

      <form className={styles.form_container} onSubmit={onSubmitHandler}>
        <input placeholder='Gender' value={genderValue ? genderValue : ""} className={styles.type_input} onChange={()=>{}} onClick={GenderInputActivateHandler} />
        <input placeholder='Country' value={countryValue ? countryValue.name.common : ""} className={styles.type_input} onChange={()=>{}} onClick={CountryInputActivateHandler} />
        
        <Modal
          show={isModalActive}
          onClose={()=> {closeModalHandler()}}
        >
          {openCountryModalActive &&
            <SelectCountryModal onSubmit={SubmitCountryModal} onClose={closeModalHandler} /> 
          }

          {openGenderModalActive &&
            <SelectGenderModal onSubmit={SubmitGenderModal} onClose={closeModalHandler} /> 
          }
        </Modal>

        <div className={styles.settings}> 
            <div>
                <label htmlFor="fellow">I am looking for fellow travellers</label>
                <input type="checkbox" name="IsAccepted" id="fellow" onChange={(el)=>{setFellowValue(el.target.checked)}} />
            </div>

            <div>
                <label htmlFor="homestay">I am interesting in Homestay program</label>
                <input type="checkbox" name="IsAccepted" id="homestay" onChange={(el)=>{setHomeStayValue(el.target.checked)}}/>
            </div>

            <div>
                <label htmlFor="booking">I am interesting booking opportunities</label>
                <input type="checkbox" onChange={(el)=>{setBookingValue(el.target.checked)}} name="IsAccepted" id="booking" />
            </div>
        </div>

        <Button  
          style={{ width: "50%", borderRadius: 20, marginRight: "auto", marginLeft: "auto", backgroundColor: "rgba(137, 221, 108, 0.65)"}}
          onClick={onSubmitHandler} 
          variant="contained" 
        >
          Continue
        </Button>

      </form>
      
    </div>
  )
}

export default DefineUserSettings