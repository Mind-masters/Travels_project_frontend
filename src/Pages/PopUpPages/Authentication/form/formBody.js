import React, { useState } from 'react'
import styles from "./body.module.css";

import header_logo from "../../../../assets/landing/about_us_text_decoration.png";
import email_icon from "../../../../assets/authentication/email_icon.png";
import password_icon from "../../../../assets/authentication/password_icon.png";
import Button from '../../../../components/shared/UI/button/Button';
import FormInput from '../../../../components/shared/UI/formInput';

const FormBody = (props) => {

	const [nameValue, setNameValue] = useState(null);
	const onCHageNameValueHandler = (value) => setNameValue(value);

	const [emailValue, setEmailValue] = useState(null);
	const onCHageEmailValueHandler = (value) => setEmailValue(value);

	const [passwordValue, setPasswordValue] = useState(null);
	const onCHagePasswordValueHandler = (value) => setPasswordValue(value);

	const formSubmitHandler = (e) => {
		e.preventDefault();
		props.onSubmit(props.isLoginMode ? {email: emailValue, password: passwordValue} : {email: emailValue, password: passwordValue, name: nameValue})
	}

	// Validations
	const ValidName = props.errors && props.errors.name ? false : true
	const ValidEmail = props.errors && props.errors.email ? false : true
	const ValidPassword = props.errors && props.errors.password ? false : true

	return (
		<div className={styles.container}>
			
			<div className={styles.header_wrapper}>
				<img src={header_logo} alt='' />
				<div>
					<h1>Login</h1>
				</div>
			</div>

			<div className={styles.inputs_container}> 
				<FormInput 
					value={emailValue}
					isValid={ValidEmail}
					name="Email Address"
					message={(!ValidEmail && ((props.errors && props.errors.email) || "Error")) || null}
					onChange={onCHageEmailValueHandler}
				>
					<img style={{ margin: "0 1rem" }} src={email_icon} alt='' />
				</FormInput>

				<FormInput 
					value={passwordValue}
					isValid={ValidPassword}
					type="password"
					name="Password"
					message={(!ValidPassword && ((props.errors && props.errors.email) || "Error")) || null}
					onChange={onCHagePasswordValueHandler}
				>
					<img style={{ margin: "0 1rem" }} src={password_icon} alt='' />
				</FormInput>
			</div>

			<div className={styles.btn_container}>
				<Button color="#EE7D15">
					<h1 style={{ color: "white" }}>Login</h1>
				</Button>
			</div>
			
			<div className={styles.footer}>
			<p>New user?</p>
			<p style={{ fontWeight: "bold", marginLeft: "1rem" }}>Register Account</p>
			</div>


		</div>
	)
}

export default FormBody

