import React, {useState} from 'react'
import styles from './footer.module.css';
import Background from '../../../../assets/footerSection/Vector.png'
import { Fragment } from 'react';
import Button from "../button/Button";

import LastFooter from './LastFooter';

const Footer = () => {
  const defaultForm = {
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  };

  const [formFields, setFormFields] = useState(defaultForm);
    const {firstName, lastName, email, message } = formFields;

    // resetting form fields
    const resetFormFields = ()=>{
      setFormFields(defaultForm);
    }

    //handleing the user input
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormFields({ ...formFields, [name]: value });

      console.log(formFields);
    };


    const handleSubmit =(event)=>{
      event.preventDefault();
      resetFormFields(defaultForm);
    }

  return (
  <Fragment>
    <img className={styles.Background} src={Background} alt=''/>
    <div className={styles.container}>

      <div className={styles.container_header}>
        <h1>Reach Out To Us</h1>
        <p>Fill out the following details to reach out to us.</p>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.fields}>
          <div className={styles.form_group}>
            <label htmlFor="firstname">First Name:</label>
            <input className={styles.text_input} type="text" id="firstname" name="firstName" value={firstName} required onChange={handleInputChange}/>
          </div>

          <div className={styles.form_group}>
            <label htmlFor="lastname">Last Name:</label>
            <input className={styles.text_input} type="text" id="lastname" name="lastName" value={lastName} required  onChange={handleInputChange}/>
          </div>

          <div className={styles.form_group}>
            <label htmlFor="email">Email:</label>
            <input className={styles.text_input} type="email" id="email" name="email" value={email} required  onChange={handleInputChange}/>
          </div>
        </div>

        <div className={styles.form_group}>
          <label htmlFor="message">Message:</label>
          <textarea placeholder='write a message here' name="message" value={message} required  onChange={handleInputChange}></textarea>
        </div>

        <div className={styles.btn}>
          <Button color="#EE7D15">
            <p>Send message</p>
          </Button>
        </div>

      </form>
    </div>

    <LastFooter/>

  </Fragment>  
  )
}

export default Footer
