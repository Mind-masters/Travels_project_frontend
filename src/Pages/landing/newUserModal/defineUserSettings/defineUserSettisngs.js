import React, { useState } from 'react'
import Modal from '../../../../components/shared/UI/Modal';
import SelectCountryModal from './selectCountryModal';
import SelectGenderModal from './selectGenderModal';


// Styles
import default_styles from "../default_modal_styles.module.css"
import custom_styles from "./defineUserSettings.module.css";


// Logos
import logo from "../../../../assets/logo.PNG"
import back_logo from "../../../../assets/back_logo.png"

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



  return (
    <div className={default_styles.modal_content}>

      <div className={default_styles.top_menu_container}>
        <img className={default_styles.close_logo} src={back_logo} alt="back" />
        <img className={default_styles.logo} src={logo} alt="logo" />
        <div className={default_styles.close_logo}><h4>Close</h4></div>
      </div>

      <div className={default_styles.about_container}>
          <h1>About you</h1>
          <p>Tell us about yourself to start building your profile</p>
      </div>

      <form className={custom_styles.form_container}>
        <input placeholder='Gender' value={genderValue ? genderValue : ""} className={custom_styles.type_input} onChange={()=>{}} onClick={GenderInputActivateHandler} />
        <input placeholder='Country' value={countryValue ? countryValue.name.common : ""} className={custom_styles.type_input} onChange={()=>{}} onClick={CountryInputActivateHandler} />
        <Modal
        onCancel={onclose}
        show={isModalActive}
        >
          {openCountryModalActive &&
            <SelectCountryModal onSubmit={SubmitCountryModal} onClose={closeModalHandler} /> 
          }

          {openGenderModalActive &&
            <SelectGenderModal onSubmit={SubmitGenderModal} onClose={closeModalHandler} /> 
          }
        </Modal>
        <div className={custom_styles.settings}> 
            <div>
                <input type="checkbox" name="IsAccepted" id="fellow" onChange={(el)=>{setFellowValue(el.target.checked)}} />
                <label htmlFor="fellow">I am looking for fellow travellers</label>
            </div>

            <div>
                <input type="checkbox" name="IsAccepted" id="homestay" onChange={(el)=>{setHomeStayValue(el.target.checked)}}/>
                <label htmlFor="homestay">I am interesting in Homestay program</label>
            </div>

            <div>
                <input type="checkbox" onChange={(el)=>{setBookingValue(el.target.checked)}} name="IsAccepted" id="booking" />
                <label htmlFor="booking">I am interesting booking opportunities</label>
            </div>
        </div>

        <button className={custom_styles.continue_btn} onClick={props.onSubmit.bind(null, {gender: genderValue, country: countryValue, fellowTravelers: fellowValue, homestay: homeStayValue, booking: bookingValue})}>Join</button>

      </form>

    </div>
  )
}

export default DefineUserSettings