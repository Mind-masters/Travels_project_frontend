import React, { useEffect, useState } from 'react'
import Modal from "../../../components/shared/UI/Modal";
import DefineUserSettings from './defineUserSettings/defineUserSettisngs';
import PickUserAvatar from './pickUserAvatar';
import SelectUserInterests from './selectUserInterests';
import { useContext } from 'react';
import { AuthContext } from '../../../contextAPI/AuthContext';
import LoadingSpinner from '../../../components/shared/UI/LoadingSpinner';
import "react-toastify/dist/ReactToastify.css";
import { notify } from "../../../components/shared/UI/toast";


const NewUser = () => {
    const Auth = useContext(AuthContext);
    const [show, setShow] = useState(true);

    const [isLoading, setIsLoading] = useState(false);

    // declared states for showing or hiding modals
    const [showInterestsModal, setShowInterestsModal] = useState(true);
    const [showAvatarModal, setShowAvatarModal] = useState(false);
    const [showSettingsModal, setShowSettingsModal] = useState(false);

    // declared states for storing data
    const [selectedInterestsData, setSelectedInterestsData] = useState([]);
    const [selectedAvatarData, setSelectedAvatarData] = useState(null);
    const [selectedSettingsData, setSelectedSettingsData] = useState(null);


    useEffect(() => {
        Auth.changeUserModalStatus(true)
    })


    const onClose = () => {
        
        // Auth.changeUserModalStatus(false);
    }

    const onInterestsModalSubmit = (data) => {
        setShowInterestsModal(false);
        setShowAvatarModal(true);
        setSelectedInterestsData(data);
    }

    const onAvatarModalSubmit = (data) => {
        setShowSettingsModal(true);
        setShowAvatarModal(false);
        setSelectedAvatarData(data);
    }

    const onSettingsModalSubmit = (data) => {
        setShowSettingsModal(false);
        onRegistrationSubmit(data)
    }

    const onRegistrationSubmit = async (lastmodal) => {

        
        setIsLoading(true);


        try {
            const req  = await fetch("https://mind-master-backend-production.up.railway.app/api/v1/user/me/update", {
                method: "PATCH",
                headers: {
                  "Content-Type" : "application/json",
                  "accept" : "application/json",
                  "authorization" : `Bearer ${Auth.authenticatedUser.token.access_token}`
                },
                body: JSON.stringify({
                    country:lastmodal.country.name.common,
                    avatar: selectedAvatarData,
                    gender:lastmodal.gender,
                })
              })

              if(!req.ok)throw new Error("something went wrong");

              const requsestData = await req.json();
              const user = {data: requsestData.data,token: Auth.authenticatedUser.token}

              Auth.update(user)
              notify(requsestData.message, "success");
              setIsLoading(false)
              setShow(false);
            
        } catch (error) {

            setIsLoading(false);
            setShow(false);
            Auth.logout();
            notify(error.message || "operation failed", "error");
        }


    }
  
    return (
        <Modal
            show={show}
        >
            {
                isLoading ? <LoadingSpinner /> :
                <>
                    {showInterestsModal && <SelectUserInterests onClose={onClose} onSubmit={onInterestsModalSubmit} />}
                    {showAvatarModal && <PickUserAvatar onClose={onclose} onSubmit={onAvatarModalSubmit} />}
                    {showSettingsModal && <DefineUserSettings onClose={onclose} onSubmit={onSettingsModalSubmit} />}
                </>
            }
            
        </Modal>
    )
}

export default NewUser