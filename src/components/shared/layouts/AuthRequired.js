import React, {useContext, useEffect} from 'react'
import { AuthContext } from '../../../contextAPI/AuthContext'
import Authentication from '../../../Pages/PopUpPages/Authentication'
import { useState } from 'react'

const AuthRequired = (props) => {

    const AuthenticatedUser = useContext(AuthContext);
    const [showForm, setShowForm] = useState(false);


    const clickHandler = () => {
        if(!showForm){
            if(AuthenticatedUser.authenticatedUser)return props.onClick ? props.onClick() : null
            else setShowForm(true);
        }
    }

    useEffect(()=>{

    })

    const closeFormHandler = () => {
        setShowForm(false);
    }


    return (
        <div onClick={clickHandler}>
            {props.children}

            <Authentication
                signup
                show={showForm}
                onClose={closeFormHandler}
            />
        </div>
    )
}

export default AuthRequired