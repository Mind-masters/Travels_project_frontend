import React, { useEffect, useState } from "react";
import { validate } from "./validate";
import styles from "./Authenticate.module.css";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { notify } from "./toast";
import { Link } from "react-router-dom";
import Card from "../../components/shared/UI/Card";
import LoadingSpinner from "../../components/shared/UI/LoadingSpinner"
import { useContext } from "react";
import { AuthContext } from "../../contextAPI/AuthContext";
import logo from "../../assets/authentication-signup-logo.png"
const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    IsAccepted: false,
  });

  const navigation = useNavigate();
  const User = useContext(AuthContext);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setErrors(validate(data, "signUp"));
  }, [data, touched]);

  const changeHandler = (event) => {
    if (event.target.name === "IsAccepted") {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };

  const focusHandler = (event) => {
    setTouched({ ...touched, [event.target.name]: true });
  };

  const submitHandler = async(event) => {
    event.preventDefault();
    if (!Object.keys(errors).length) {


      try {

        setIsLoading(true);
        
        const Req = await fetch(`http://localhost:5000/api/v1/client/auth/register`, {
          method: "POST",
          headers: {
            "Content-Type" : "application/json",
            "accept" : "application/json"
          },
          body: JSON.stringify({
            name: data.name,
            email: data.email,
            password: data.password
          })
        });

        const responseData = await Req.json();

        if(!Req.ok && responseData.details){
          throw new Error(responseData.details[0].message)
        }

        notify("You signed Up successfully", "success");
        User.login(responseData);

        navigation("/")

        
      } catch (error) {
        setIsLoading(false);
        notify(error.message, "error");
      }

    } else {
      notify("Please Check fileds again", "error");
      setTouched({
        name: true,
        email: true,
        password: true,
        confirmPassword: true,
        IsAccepted: false,
      });
    }
  };

  return (
    <Card>
      {

        isLoading ? <LoadingSpinner asOverlay /> 
        
        :

        <form className={styles.formContainer} onSubmit={submitHandler} autoComplete="off">
          <h2>Sign Up</h2>
          <div>
            <div className={errors.name && touched.name ? styles.unCompleted : !errors.name && touched.name ? styles.completed : undefined}>
              <input type="text" name="name" value={data.name} placeholder="Name" onChange={changeHandler} onFocus={focusHandler} autoComplete="off" />
            </div>
            {errors.name && touched.name && <span className={styles.error}>{errors.name}</span>}
          </div>
          <div>
            <div className={errors.email && touched.email ? styles.unCompleted : !errors.email && touched.email ? styles.completed : undefined}>
              <input type="text" name="email" value={data.email} placeholder="E-mail" onChange={changeHandler} onFocus={focusHandler} autoComplete="off" />
            </div>
            {errors.email && touched.email && <span className={styles.error}>{errors.email}</span>}
          </div>
          <div>
            <div className={errors.password && touched.password ? styles.unCompleted : !errors.password && touched.password ? styles.completed : undefined}>
              <input type="password" name="password" value={data.password} placeholder="Password" onChange={changeHandler} onFocus={focusHandler} autoComplete="off" />
            </div>
            {errors.password && touched.password && <span className={styles.error}>{errors.password}</span>}
          </div>
          <div>
            <div className={errors.confirmPassword && touched.confirmPassword ? styles.unCompleted : !errors.confirmPassword && touched.confirmPassword ? styles.completed : !errors.confirmPassword && touched.confirmPassword ? styles.completed : undefined}>
              <input type="password" name="confirmPassword" value={data.confirmPassword} placeholder="Confirm Password" onChange={changeHandler} onFocus={focusHandler} autoComplete="off" />
            </div>
            {errors.confirmPassword && touched.confirmPassword && <span className={styles.error}>{errors.confirmPassword}</span>}
          </div>
          <div>
            <div className={styles.terms}>
              <input type="checkbox" name="IsAccepted" value={data.IsAccepted} id="accept" onChange={changeHandler} onFocus={focusHandler} />
              <label htmlFor="accept">I accept terms of privacy policy</label>
            </div>
            {errors.IsAccepted && touched.IsAccepted && <span className={styles.error}>{errors.IsAccepted}</span>}
          </div>
          <div>
            <button type="submit">Create Account</button>
            <span style={{ color: "#a29494", textAlign: "center", display: "inline-block", width: "100%" }}>
              Already have a account? <Link to="/auth/login">Sign In</Link>
            </span>
          </div>
        </form>

      }
      <img src={logo} alt="" className={styles.signupLogo} />
    </Card>
  );
};

export default SignUp;
