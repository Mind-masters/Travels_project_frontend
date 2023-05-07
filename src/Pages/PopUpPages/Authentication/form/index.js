import React, { useState } from 'react'
import styles from "./form.module.css"

import login_bg from "../../../../assets/authentication/login_bg_2.jpg"
import FormBody from './formBody'

const Form = (props) => {



	return (

		<div className={`${styles.wrapper}`}>

			<div className={`${styles.form_container}`}>

				<FormBody />

			</div>

			<div className={styles.background}>
				{/* <img src={login_bg} alt='' /> */}
				<div className={styles.background_filter}></div>
			</div>
		</div>
	)
}

export default Form