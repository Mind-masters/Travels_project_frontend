import React,{useState} from 'react'
import Input from '../../../UI/formInput';
import Button from "../../../UI/button/Button";
import styles from "./contact.module.css";


const ContactUs = () => {
  const defaultForm = {
    firstName: '',
    lastName: '',
    email: '',
    textArea: '',
  };

  const [formFields, setFormFields] = useState(defaultForm);
  const { firstName, lastName, email, textArea } = formFields;

  
  //resetting the form fields
  const resetFormFileds = ()=>{
    setFormFields(defaultForm)
  }
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  // console.log(formFields)

  const handleSubmit = (e)=>{
    e.preventDefault();
    resetFormFileds();
  }

  return (
    <div>
         
      <div className={styles.container}>
        <form className={styles.box} onSubmit={handleSubmit}>

        <div className={styles.row}>
        <div className={styles.col_75}>
        <input
         className={styles.input_box} 
         type="text" id="fname" name="firstName"
          placeholder="First Name.." required
          value={firstName}
          onChange={handleInputChange}/>
       </div>
      </div>
          
      <div className={styles.row}>
        <div className={styles.col_75}>
        <input
         type="text" id="fname" name="lastName" 
         placeholder="Last Name.." required
         value={lastName}
         onChange={handleInputChange}/>
       </div>
      </div>

      <div className={styles.row}>
        <div className={styles.col_75}>
        <input 
        type="email" id="fname" name="email" 
        placeholder="Your Email.." required
        value={email}
        onChange={handleInputChange}/>
       </div>
      </div>

      <div className={styles.row}>
        <div className={styles.col_77}>
        <textarea className={styles.textinput} placeholder='write a message'
         name='textArea' required
         value={textArea}
         onChange={handleInputChange}/>
       </div>
      </div>

      <div className={styles.submit_btn}>
      <Button color="#EE7D15">
      <h1 style={{ color: "white" }}>Send Message</h1>
      </Button>
      </div>
      </form>
  </div>      
    </div>
  )
}

export default ContactUs