import React, { useState } from 'react'
import { useEffect } from 'react';
import { useContext } from 'react'
import Card from '../../components/shared/UI/Card';
import {AuthContext} from "../../contextAPI/AuthContext";
import LoadingSpinner from "../../components/shared/UI/LoadingSpinner";
import ProfilePage from './profilePage';
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "../../components/shared/UI/toast";
import { fetchUserPlaces } from '../../components/utils/places/fetchPlaces';
import ProfileComponet from './new-profile/Profile_Component';


const Profile = () => {
    const Auth = useContext(AuthContext);
    const [authPlaces, setAuthPlaces] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserProfile = async() => {


            if(!Auth.authenticatedUser || !(Auth.authenticatedUser && Auth.authenticatedUser.token))return navigate("/");
            const Auth_places = await fetchUserPlaces(Auth.authenticatedUser.token.access_token)

            if(!Auth_places.status){
                notify(Auth_places.message, "error");
                Auth.logout();
                return navigate("/");
            }

            setAuthPlaces(Auth_places.data)


            setIsLoading(false);
        }

        fetchUserProfile();
    }, [])

    return (
        <>
        {
            (authPlaces && ! isLoading)  ?
            <Card>
                <ProfileComponet />
            </Card>
            :
            <LoadingSpinner />
            
        }
        </>
    )
}

export default Profile