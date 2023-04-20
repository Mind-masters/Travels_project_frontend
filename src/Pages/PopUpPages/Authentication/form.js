import React, { useState } from 'react'
import FormInput from '../../../components/shared/UI/formInput'
import styles from "./form.module.css"
import Button from '../../../components/shared/UI/button/Button'

const Form = (props) => {

	const [nameValue, setNameValue] = useState(null);
	const onCHageNameValueHandler = (value) => setNameValue(value);

	const [emailValue, setEmailValue] = useState(props.email || null);
	const onCHageEmailValueHandler = (value) => setEmailValue(value);

	const [passwordValue, setPasswordValue] = useState(null);
	const onCHagePasswordValueHandler = (value) => setPasswordValue(value);

	// const [confirmedPasswordValue, setConfirmedPasswordValue] = useState(null);
	// const onCHageConfirmedPasswordValueHandler = (value) => setPasswordValue(value);

	const formSubmitHandler = (e) => {
		e.preventDefault();
		props.onSubmit(props.isLoginMode ? {email: emailValue, password: passwordValue} : {email: emailValue, password: passwordValue, name: nameValue})
	}

	// Validations
	const ValidName = props.errors && props.errors.name ? false : true
	const ValidEmail = props.errors && props.errors.email ? false : true
	const ValidPassword = props.errors && props.errors.password ? false : true


	return (

		<div className={`${styles.wrap_login}`}>

			<form onSubmit={formSubmitHandler} className={`${styles.login_form}`}>

				<h1 className={`${styles.login_form_title}`}>
					Welcome
				</h1>

				{ 	
					!props.isLoginMode &&
					
					<FormInput 
						value={nameValue}
						isValid={ValidName}
						name="Name"
						message={(!ValidName && (props.errors.name || "Error")) || null}
						onChange={onCHageNameValueHandler}
					/>
				}
				
			
				<FormInput 
					value={emailValue}
					isValid={ValidEmail}
					name="Email"
					message={(!ValidEmail && (props.errors.email || "Error")) || null}
					onChange={onCHageEmailValueHandler}
				/>

				<FormInput 
					value={passwordValue}
					isValid={ValidPassword}
					name="Password"
					message={(!ValidPassword && (props.errors.password || "Error")) || null}
					onChange={onCHagePasswordValueHandler}
				/>

				<div className={styles.btn}>
					<Button  onSubmit={props.onSubmit}>
						<h1 style={{ color: "whitesmoke" }}>{!props.isLoginMode ? "Continue" : "Login"}	</h1>
					</Button> 
				</div>
				

				<div className={`${styles.text_center}`}>
					<span className={`${styles.txt1}`}>
						{props.isLoginMode ? "Don' t have an account?" : "Already have an account?"}
					</span>

					<p className={`${styles.txt2}`} onClick={props.onSwithChMode}>
						{props.isLoginMode ? "Sign Up" : "Login"}
					</p>
				</div>
			</form>
		</div>
	)
}

export default Form