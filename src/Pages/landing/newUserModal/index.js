import React, { useState } from 'react'
import Modal from "../../../components/shared/UI/Modal";
import DefineUserSettings from './defineUserSettings/defineUserSettisngs';
import PickUserAvatar from './pickUserAvatar';
import SelectUserInterests from './selectUserInterests';

const NewUser = () => {

    const [show, setShow] = useState(true);

    // declared states for showing or hiding modals
    const [showInterestsModal, setShowInterestsModal] = useState(true);
    const [showAvatarModal, setShowAvatarModal] = useState(false);
    const [showSettingsModal, setShowSettingsModal] = useState(false);

    // declared states for storing data
    const [selectedInterestsData, setSelectedInterestsData] = useState([]);
    const [selectedAvatarData, setSelectedAvatarData] = useState(null);
    const [selectedSettingsData, setSelectedSettingsData] = useState(null);


    const onClose = () => {
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
        setSelectedSettingsData(data)
        onRegistrationSubmit()
    }

    const onRegistrationSubmit = () => {
        setShow(false)

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