import React, {useState} from 'react'
import styles from './footer.module.css';
import Background from '../../../../assets/footerSection/Vector.png'
import { Fragment } from 'react';
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
    <img className={styles.Background} src={Background}/>
 <div className={styles.container}>
      <h1>Reach Out To Us</h1>
      <p>Fill out the following details to reach out to us.</p>

    <form onSubmit={handleSubmit}>
    <div className={styles.fields}>
    <div className={styles.form_group}>
    <label for="firstname">First Name:</label>
    <input className={styles.text_input} type="text" id="firstname" name="firstName" value={firstName} required onChange={handleInputChange}/>
  </div>

  <div className={styles.form_group}>
    <label for="lastname">Last Name:</label>
    <input className={styles.text_input} type="text" id="lastname" name="lastName" value={lastName} required  onChange={handleInputChange}/>
  </div>

  <div className={styles.form_group}>
    <label for="email">Email:</label>
    <input className={styles.text_input} type="email" id="email" name="email" value={email} required  onChange={handleInputChange}/>
  </div>
</div>
  <div className={styles.form_group}>
    <label for="message">Message:</label>
    <textarea id="message" name="message" value={message} required  onChange={handleInputChange}></textarea>
  </div>
  <button type="submit">Send Message</button>
</form>
</div>
<LastFooter/>

</Fragment>  
  )
}

export default Footer
