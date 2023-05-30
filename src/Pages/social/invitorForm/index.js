import React, {Fragment, useContext} from 'react';
import { useState } from 'react';
import Input from "../../../components/shared/UI/formInput";
import styles from "./invitorForm.module.css";
import Button from "../../../components/shared/UI/button/Button";
import { Create } from '../../../components/utils/invitings/create';
import { AuthContext } from '../../../contextAPI/AuthContext';
import where_input_icon from "../../../assets/social/where_input_icon.png";
import about_input_icon from "../../../assets/social/about_input_icon.png";
import { useEffect } from 'react';
import InsideBounce from '../../../components/shared/UI/LoadingSpinner/InsideBounce';
import Modal from "../../../components/shared/UI/Modal";
import SelectCountry from "../../../components/shared/UI/Popups/selectCountryModal";

const InvitorForm = (props) => {

  const Auth = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const token = Auth.isLoggedIn ? Auth.authenticatedUser.token.access_token : null  // for storing date value

  // for storing FinalPlaceValue value
  const [destinationValue, setDestinationValue] = useState("");
  const [openCountryModal, setOpenCountryModal] = useState(false);
  const onDestinationChangeHandler = (value) => {
    setDestinationValue({
      flag: value.flag,
      name: value.name
    })

    setOpenCountryModal(false)
  }

  // for storing about value
  const [aboutValue, setAboutValue] = useState("")
  const onAboutChangeHandler = (value) => setAboutValue(value)


  useEffect(() => {

    if(isLoading){
      setTimeout(() => {
        setIsLoading(false);
      }, 1300);

    }

  }, [isLoading])

  const handleSubmitShedule = async() => {

    if(!token) {
      return props.onSignUp()
    }
    if(!destinationValue || !aboutValue)return alert("Please fill out the form below")
    
    setIsLoading(true)
    try {
      
      const create_new_inviting = await Create(
        {
          destination: {
            flag: destinationValue.flag,
            name: destinationValue.name
          },
          about: aboutValue,
        },
        token
      );

      if(!create_new_inviting.status)return alert(create_new_inviting.message);

      return props.onClose();

    } catch (error) {
      console.log("error occured: ", error);
    }
  }
  return (
    <Fragment>
      <div className={styles.wrapper}>
        <div>
          <form className={styles.container} onSubmit={(e) => {e.preventDefault()}}>
            <h1 className={`${styles.login_form_title}`}>
              Calling all travel enthusiasts
            </h1>
            <p className={styles.intro_paragraph}>
              Let's find the perfect companion for our upcoming odyssey!
            </p>

            <div className={styles.inputs_container}>


              <div onClick={()=>setOpenCountryModal(true)} className={styles.select_country}>
                <img style={{ width: "1.5rem", margin: "0 10px" }} src={where_input_icon} alt='' /> 
                <p>{destinationValue ? destinationValue.name : "Where are you going?"}</p>
              </div>

              <Modal
                show={openCountryModal}
                onClose={() => setOpenCountryModal(false)}
              > 
                <SelectCountry onSubmit={onDestinationChangeHandler}/>
              </Modal>

              <Input 
                type="description"
                value={aboutValue} 
                isValid={true} 
                name="Tell us more!"
                onChange={onAboutChangeHandler}
              >
                <img style={{ width: "10px", visibility: "hidden"}} src={about_input_icon} alt='' /> 
              </Input>
            </div>

            
            <div className={styles.submit_btn}>
              <Button color="#EE7D15" onSubmit={handleSubmitShedule}>
                <h1 style={{ color: "white" }}>{`${token ? "Shedule" : "Login"}`}</h1>
              </Button>
            </div>

          </form>
        </div>
        {
          isLoading && 
          <InsideBounce />
        }
      </div>
    </Fragment>
  ) 
}

export default InvitorForm