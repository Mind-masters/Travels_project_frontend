import React, {useState} from 'react'
import { CiUser } from 'react-icons/ci';
import { AiOutlineMail } from 'react-icons/ai'
import { HiOutlineLockClosed } from 'react-icons/hi';
import FacebookIcon from '../../assets/signup/facebook_icon.png';
import GoogleIcon from '../../assets/signup/google_icon.png';
import AppleIcon from '../../assets/signup/apple_icon.png';
import styles from './signUp.module.css'

const SignUp_Form = () => {

    const defaultForm = {
      userName: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
    
    const [formFields, setFormFields] = useState(defaultForm);
    const {userName, firstName, lastName, email, password, confirmPassword} = formFields;

    // resetting form fields
    const resetFormFields = ()=>{
      setFormFields(defaultForm);
    }
  return (
    
  <div className={styles.main_div}>
    <div className={styles.title}>Sign Up</div>
   
    <form action="#">
        <div className={styles.input_box}>
        <input
         type="text" placeholder="Username" required name='userName'/>
        <div className={styles.icon}><CiUser/></div>
      </div>
    <div className={styles.first_last}>
      <div className={styles.input_box}>
        <input
         type="text" placeholder="First Name" required name='firstName'/>
        <div className={styles.icon}><CiUser/></div>
      </div>

      <div className={styles.input_box}>
        <input
         type="text" placeholder="Last Name" required name='lastName'/>
        <div className={styles.icon}><CiUser/></div>
      </div>
      </div>

      <div className={styles.input_box}>
        <input
         type="email" placeholder="Email or Phone" required name='email'/>
        <div className={styles.icon}><AiOutlineMail/></div>
      </div>


      <div className={styles.input_box}>
        <input type="password" placeholder="Password" required name='password'/>
        <div className={styles.icon}><HiOutlineLockClosed/></div>
      </div>

      <div className={styles.input_box}>
        <input type="password" placeholder="Confirm Password" required name='confirmPassword'/>
        <div className={styles.icon}><HiOutlineLockClosed/> </div>
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

      <div className={styles.register }>
      <input type="submit" value="Register"/>
      </div>

      <div className={styles.sign_up}>
        Or Register with
      </div>

      <div className={styles.social_icons}>
      <img src={FacebookIcon}/>
      <img src={GoogleIcon}/>
      <img src={AppleIcon}/>
      </div>
    </form>
  </div>

  )
}

export default SignUp_Form
