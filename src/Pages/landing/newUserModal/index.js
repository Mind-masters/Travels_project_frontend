import React, { useEffect, useState } from 'react'
import Modal from "../../../components/shared/UI/Modal";
import DefineUserSettings from './defineUserSettings';
import UserAvatar from "./defineUserAvatar/index";
import UserInterests from './defineUserInterests';
import { useContext } from 'react';
import { AuthContext } from '../../../contextAPI/AuthContext';
import LoadingSpinner from '../../../components/shared/UI/LoadingSpinner';
import "react-toastify/dist/ReactToastify.css";
import { notify } from "../../../components/shared/UI/toast";
import Wrapper from './wrapper';
import { submitNewUser } from './SubmitNewUserData';

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


    const backHandler = (page_number) => {
        if(page_number === 1){
            setShowAvatarModal(false);
            setShowInterestsModal(true);
        }

        if(page_number === 2){
            setShowSettingsModal(false);
            setShowAvatarModal(true);
        }
    }

    const onInterestsModalSubmit = (data) => {
        // console.log("onInterestsModalSubmit: ", data)
        setShowInterestsModal(false);
        setShowAvatarModal(true);
        setSelectedInterestsData(data);
    }

    const onAvatarModalSubmit = (data) => {
        // console.log("onAvatarModalSubmit: ", data)
        setShowSettingsModal(true);
        setShowAvatarModal(false);
        setSelectedAvatarData(data);
    }

    const onSettingsModalSubmit = (data) => {
        // console.log("onSettingsModalSubmit: ", data)
        setShowSettingsModal(false);
        onRegistrationSubmit(data)
    }

    const onRegistrationSubmit = async (lastmodal) => {
        setShow(false);

        setIsLoading(true);
        const submit_data = await submitNewUser(
            {
                country:lastmodal.country.name.common,
                avatar: selectedAvatarData,
                gender:lastmodal.gender,
            },
            Auth.authenticatedUser.token.access_token
        )


        if(!submit_data.status){
            setShow(true);
            notify(submit_data.message, "error");
            setShowInterestsModal(true);
            return;
        }
        else if(submit_data.status){
            setIsLoading(false);
            const user = {data: submit_data.data,token: Auth.authenticatedUser.token};
            notify(submit_data.message, "success");
            Auth.update(user)
        }

        return

    }
  
    return (
        <Modal
            show={show}
        >
            {
                isLoading ? <LoadingSpinner /> :
                <Wrapper>
                    {showInterestsModal && <UserInterests existing_data={selectedInterestsData || []} onSubmit={onInterestsModalSubmit} />}
                    {showAvatarModal && <UserAvatar onPrev={backHandler.bind(null, 1)} onSubmit={onAvatarModalSubmit} />}
                    {showSettingsModal && <DefineUserSettings onPrev={backHandler.bind(null, 2)} onSubmit={onSettingsModalSubmit} />}
                </Wrapper>
            }
            
        </Modal>
    )
}

export default NewUser