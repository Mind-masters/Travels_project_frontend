import React, { useState } from 'react'
import { useEffect } from 'react';
import { useContext } from 'react'
import Card from '../../components/shared/UI/Card';
import { GetUserProfile } from '../../components/utils/user/getUserProfile';
import {AuthContext} from "../../contextAPI/AuthContext";
import LoadingSpinner from "../../components/shared/UI/LoadingSpinner";
import ProfilePage from './profilePage';
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "../../components/shared/UI/toast";


const Profile = () => {
    const Auth = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserProfile = async() => {

            if(!Auth.authenticatedUser || !(Auth.authenticatedUser && Auth.authenticatedUser.token))return

            const profile_request = await GetUserProfile(Auth.authenticatedUser.token.access_token);

            if(!profile_request.status){
                notify(profile_request.message || "Session expired!", "warning");
                Auth.logout();
                return navigate("/")
            }

            setIsLoading(false);
        }

        fetchUserProfile();
    })

    return (
        <>
        {
            isLoading ? 
            <LoadingSpinner />
            :
            <Card>
                <ProfilePage Auth={Auth}/>
            </Card>
        }
        </>
    )
}

export default Profile