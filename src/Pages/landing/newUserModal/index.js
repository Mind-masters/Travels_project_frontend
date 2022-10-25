import React, { useState } from 'react'
import Modal from "../../../components/shared/UI/Modal";
import SelectUserInterests from './selectUserInterests';

const NewUser = () => {

    console.log("opening modal")

    const [show, setShow] = useState(true);

    const onClose = () => {
        setShow(false)
    }
  
    return <Modal
        onCancel={onclose}
        show={show}
    >
        <SelectUserInterests onClose={onClose} />
    </Modal>
}

export default NewUser