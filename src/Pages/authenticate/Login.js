import React, { useState } from "react";
import styles from "./Authenticate.module.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { notify } from "./toast";
import { Link } from "react-router-dom";
import Card from "../../components/shared/UI/Card";
import LoadingSpinner from "../../components/shared/UI/LoadingSpinner";
import { useContext } from "react";
import {AuthContext} from "../../contextAPI/AuthContext";
import logo from "../../assets/authentication-form-logo.png"
const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const User = useContext(AuthContext);

  const [touched, setTouched] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const checkData = async(obj) => {
    const { email, password } = obj;

    if (email.length && password.length) {


      try {

        setIsLoading(true);
        
        const Req = await fetch(`http://localhost:5000/api/v1/client/auth/login`, {
          method: "POST",
          headers: {
            "Content-Type" : "application/json",
            "accept" : "application/json"
          },
          body: JSON.stringify({
            email: email,
            password: password
          })
        });

        const responseData = await Req.json();

        if(!Req.ok){
          throw new Error(responseData.error || responseData.details[0].message)
        }


        notify("You loged In successfully", "success");

        User.login(responseData);

        setIsLoading(false);

        navigate("/")
        
      } catch (error) {
        setIsLoading(false)
        notify(error.message, "error");
      }

    } else {
      notify("Please Check fileds again", "error");
      setTouched({
        email: true,
        password: true,
      });
    }
  };

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
    await checkData(data);
  };

  return (
    <Card>

      {
        isLoading ? <LoadingSpinner asOverlay />
        :
        <form className={styles.formContainer} onSubmit={submitHandler} autoComplete="off">
          <h2>Sign In</h2>
          <div>
            <div>
              <input type="text" name="email" value={data.email} placeholder="E-mail" onChange={changeHandler} onFocus={focusHandler} autoComplete="off" />
            </div>
          </div>
          <div>
            <div>
              <input type="password" name="password" value={data.password} placeholder="Password" onChange={changeHandler} onFocus={focusHandler} autoComplete="off" />
            </div>
          </div>

          <div>
            <button type="submit">Login</button>
            <span style={{ color: "#a29494", textAlign: "center", display: "inline-block", width: "100%" }}>
              Don't have a account? <Link to="/auth/signup">Create account</Link>
            </span>
          </div>
        </form>
      }
      <img src={logo} alt="" className={styles.loginLogo} />
      <ToastContainer />
    </Card>
  );
};

export default Login;
