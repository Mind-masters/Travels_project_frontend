import React, {Fragment} from 'react';
import { useState } from 'react';
import Input from "../../../../components/shared/UI/formInput";
import styles from "./invitorForm.module.css";
import Button from "../../../../components/shared/UI/button/Button";

const InvitorForm = () => {
  const [showSearchBox, setShowSearchBox] = useState(false);

  const [dateValue, setDateValue] = useState(null)
  const onDateChangeHandler = (value) => setDateValue(value)

  const handleClick = () => {
    setShowSearchBox(true);
  }
  return (
    <Fragment>
    <div className='container m-auto justify-center'>
      <div>
      <form className={styles.container}>
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
            value={null} 
            isValid={true} 
            name="Where are you going?"
            onChange={onDateChangeHandler}
          />

          <Input 
            value={null} 
            isValid={true} 
            name="Tell us more!"
            onChange={onDateChangeHandler}
          />
        </div>

        <div className={styles.submit_btn}>
          <Button onSubmit={() => {}}>
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