import React from 'react'
import styles from "./newUser.module.css"
import logo from "../../../assets/logo.PNG"

const SelectUserInterests = (props) => {

    const submitHandler = (option) => {
        console.log("option: ", option)
    }

    const DEFAULT_OPTIONS = [
        {key: 1, value: "Scary places"},
        {key: 2, value:  "Town"},
        {key: 3, value:  "trip by car"},
        {key: 4, value:  "Mysteryous places"},
        {key: 5, value:  "Hills"},
        {key: 6, value:  "Forrest"},
        {key: 7, value:  "Culture"},
        {key: 8, value:  "Bed and Breakfasts"},
        {key: 9, value:  "Hotels"},
        {key: 10, value:  "Caravanning"},
        {key: 11, value:  "Camping"},
        {key: 12, value:  "Exotic places"},
        {key: 13, value:  "Abandoned places"},
        {key: 14, value:  "Geocaching"},
    ]

  return (
    <div className={styles.modal_content}>

            <div className={styles.logo_container}>
                <img src={logo} alt="logo" />
                <h1 onClick={props.onClose}>
                    close
                </h1>
            </div>

            <div className={styles.about_container}>
                <h1>Interests</h1>
                <p>Pick 3 or more things you'd like to see and explore</p>
            </div>

            <div className={styles.scroll_container}>
                {
                    DEFAULT_OPTIONS.map(
                        option => 
                        
                        <button key={option.key} onClick={submitHandler.bind(null, option)}>
                            {option.value}
                        </button>
                    )
                }
            </div>

            <div className={styles.button_container}>
                <button>
                    Continue
                </button>
            </div>

        </div>

  )
}

export default SelectUserInterests