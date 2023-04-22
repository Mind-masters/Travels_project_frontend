import React, {useState, Fragment} from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { HiOutlineLockClosed } from 'react-icons/hi';
import TravelSignIn from '../../assets/signup/travel_signin.png';
import styles from './sigIn.module.css';

const SignIn_Form = () => {

    const defaultForm = {    

        email: '',
        password: '',
        
      };

      const [formFields, setFormFields] = useState(defaultForm);
      const {email, password} = formFields;

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
      resetFormFields(defaultForm)
    }
  return (
    <Fragment>
  <div className={styles.container}>
  <div className={styles.main_div}>
    <div className={styles.slashecontainer}>

    <div className={styles.slashes}></div>
    <div className={styles.slashes2}></div>
    <div className={styles.slashes3}></div>
    <div className={styles.title}>Login</div>
    </div>
   
    <form onSubmit={handleSubmit}>

      <div className={styles.input_box}>
        <input
         type="email" placeholder="Email" required name='email' value={email} onChange={handleInputChange}/>
        <div className={styles.icon}><AiOutlineMail/></div>
      </div>


      <div className={styles.input_box}>
        <input type="password" placeholder="Password" required name='password' value={password} onChange={handleInputChange}/>
        <div className={styles.icon}><HiOutlineLockClosed/></div>
      </div>

      <div class={styles.option_div}>
        <div className={styles.check_box}>
        <input type="checkbox"/>
        <span>Remember me</span>
        </div>
        <div className={styles.forget_div}>
          <a href="#">Forgot password?</a>
        </div>
      </div>

      <div className={styles.login }>
      <button type="submit" value="">Login</button>
      </div>

      <div className={styles.sign_in}>
        New User ? Register Account
      </div>

      {/* <div className={styles.social_icons}>
      <img src={FacebookIcon}/>
      <img src={GoogleIcon}/>
      <img src={AppleIcon}/>
      </div> */}
    </form>
  </div>

  <div className={styles.travelsignin}>
    <img src={TravelSignIn} alt='travel_signIn'/>
  </div>
  </div>
  
    </Fragment>
  )
}

export default SignIn_Form
