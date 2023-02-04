import React from 'react'
import { useState } from 'react';
import styles from "./formInput.module.css"


const FormInput = (props) => {

    const [isTouched, setIsTouched] = useState(false);

    const onInputChangeHanlder = (e) => {
        props.onChange(e.target.value);
    }


    return (
        <div 
            className =
            {
                `
                    ${styles.wrap_input}
                    ${(!props.isValid && styles.alert_validate) || (!props.value && isTouched && styles.alert_validate)}
                    ${styles.validate_input}
                `
            }
            data-validate={props.message || "Required"}
        >
            <input 
                onChange={onInputChangeHanlder} 
                className={`${styles.input} ${props.value && styles.has_val}`} 
                type="text"
                onBlur={()=>{setIsTouched(true)}}
            />

            <span 
                className={styles.focus_input} 
                data-placeholder={props.name || "Password"}
            >
            </span>

        </div>
    )
}

export default FormInput