import React, { useState } from 'react'
import { useContext } from 'react'
import Card from '../../components/shared/UI/Card';
import {AuthContext} from "../../contextAPI/AuthContext";
import data from './data';
import ProfilePage from './profilePage';

const Profile = () => {
    const [interest, setInterest] =useState(data)
    return (
        
        <ProfilePage interest ={interest}/>
    )
}

export default Profile