import React, { useEffect, useState } from 'react'
import Modal from "../../../components/shared/UI/Modal";
import DefineUserSettings from './defineUserSettings/defineUserSettisngs';
import PickUserAvatar from './pickUserAvatar';
import SelectUserInterests from './selectUserInterests';
import { useContext } from 'react';
import { AuthContext } from '../../../contextAPI/AuthContext';
const NewUser = () => {
    const Auth = useContext(AuthContext);
    const [show, setShow] = useState(true);

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
        setShow(false);
        Auth.changeUserModalStatus(false);
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
        console.log("Submited results: ",
            {
                interests: selectedInterestsData,
                avatar: selectedAvatarData,
                settings: lastmodal
            }
        );
        


        try {
            const req  = await fetch("http://localhost:5000/api/v1/user/me/update", {
                method: "PATCH",
                headers: {
                  "Content-Type" : "application/json",
                  "accept" : "application/json",
                  "authorization" : `Bearer ${Auth.authenticatedUser.token.access_token}`
                },
                body: JSON.stringify({
                    name:"",
                    phone:"",
                    country:lastmodal.country.name.common,
                    avatar: selectedAvatarData,
                    gender:lastmodal.gender,
                    interest: selectedInterestsData
                })
              })

              console.log("req: ", req);
              if(!req.ok)throw new Error("something went wrong");

              const requsestData = await req.json();

              console.log("data back from server: ", requsestData)

              onclose()
            
        } catch (error) {
            console.log("erros: ", error)
        }

    }
  
    return <Modal
        onCancel={onclose}
        show={show}
    >
        {showInterestsModal && <SelectUserInterests onClose={onClose} onSubmit={onInterestsModalSubmit} />}
        {showAvatarModal && <PickUserAvatar onClose={onclose} onSubmit={onAvatarModalSubmit} />}
        {showSettingsModal && <DefineUserSettings onClose={onclose} onSubmit={onSettingsModalSubmit} />}

    </Modal>
}

export default NewUser