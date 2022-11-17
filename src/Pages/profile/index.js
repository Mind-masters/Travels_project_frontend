import React from 'react'
import { useContext } from 'react'
import Card from '../../components/shared/UI/Card';
import {AuthContext} from "../../contextAPI/AuthContext";
import styles from "./profile.module.css"

const Profile = () => {


    return (
        <Card>
            <div>hello from profile</div>
        </Card>
    )
}

export default Profile