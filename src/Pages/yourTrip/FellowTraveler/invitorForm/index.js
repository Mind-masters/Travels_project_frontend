import React, {Fragment, useContext} from 'react';
import { useState } from 'react';
import Input from "../../../../components/shared/UI/formInput";
import styles from "./invitorForm.module.css";
import Button from "../../../../components/shared/UI/button/Button";
import { Create } from '../../../../components/utils/invitings/create';
import { AuthContext } from '../../../../contextAPI/AuthContext';

const InvitorForm = () => {

  const Auth = useContext(AuthContext);
  const token = Auth.isLoggedIn ? Auth.authenticatedUser.token.access_token : null  // for storing date value
  const [dateValue, setDateValue] = useState(null)
  const onDateChangeHandler = (value) => setDateValue(value)

  // for storing FinalPlaceValue value
  const [finalPlaceValue, setFinalPlaceValue] = useState(null)
  const onFinalPlaceChangeHandler = (value) => setFinalPlaceValue(value)

  // for storing about value
  const [aboutValue, setAboutValue] = useState(null)
  const onAboutChangeHandler = (value) => setAboutValue(value)

  const handleSubmitShedule = async(e) => {
    // setShowSearchBox(true);
    
    try {
      
      const create_new_inviting = await Create(
        {
          date: dateValue,
          finalPlace: finalPlaceValue,
          about: aboutValue,
          userCountryImage: "https://flagcdn.com/w320/lt.png"
        },
        token
      );

      console.log("inviting: ", create_new_inviting)

    } catch (error) {
      console.log("error occured: ", error);
    }
  }
  return (
    <Fragment>
    <div className='container m-auto justify-center'>
      <div>
      <form className={styles.container} onSubmit={(e) => {e.preventDefault()}}>
        <h1 className={`${styles.login_form_title}`}>
          Let's plan a new trip
				</h1>

        <div className={styles.inputs_container}>
          <Input 
            type="date" 
            value={dateValue} 
            isValid={true} 
            onChange={onDateChangeHandler}
          />

          <Input 
            value={finalPlaceValue} 
            isValid={true} 
            name="Where are you going?"
            onChange={onFinalPlaceChangeHandler}
          />

          <Input 
            value={aboutValue} 
            isValid={true} 
            name="Tell us more!"
            onChange={onAboutChangeHandler}
          />
        </div>

        <div className={styles.submit_btn}>
          <Button onSubmit={handleSubmitShedule}>
            <h1 style={{ color: "white" }}>Shedule</h1>
          </Button>
        </div>
      

        {/* <div className="flex flex-col border-4">
            <label for="search"></label>
            <input type="search" name="search" id="search" required className="peer border border-slate-400 text-2xl" placeholder='where to go'/>
            <p className="invisible peer-invalid:visible text-red-700 font-light">
                Please enter a location
            </p>
        </div>
       
        <div className="flex flex-col">
            <label for="message">Message</label>
            <textarea name="message" id="message" cols="30" rows="3" required placeholder='Intro'
                className="peer border border-slate-400 text-center"></textarea>
        </div> */}
        {/* <p className='text-center text-xl'>24 travellers who matches your interests</p> */}

        {/* <div>
          {
            showSearchBox ? 

            (
              <input className='border border-slate-400 text-2xl' type="text" placeholder="Search Traveller..." />
            ) : 
            
            (
              <p className='text-[orange] text-2xl cursor-pointer' onClick={handleClick}>Search for Fellow Travellers</p>
            )
          }
        </div>  */}
                 
    </form>
    </div>
    </div>
    </Fragment>
  ) 
}

export default InvitorForm