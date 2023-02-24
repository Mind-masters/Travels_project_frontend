import React from 'react'
import styles from "./fellowTraveler.module.css"
import fellow_travelers_logo from "../../../assets/your-trip/fellow_travellers.png";
import Button from '../../../components/shared/UI/button/Button';
import { useState } from 'react';
import Modal from '../../../components/shared/UI/Modal';
import InvitorForm from './invitorForm';

const FellowTraveler = () => {

    const [showFormModal, setShowModal] = useState(false);

    const onModalClose = () => {
        console.log("closing modal");
        setShowModal(false)
    }

  return (
    <div className={styles.fellow_friends_image}>

        <h1>
            Looking for fellow traveller?
        </h1>
        
        <img src={fellow_travelers_logo} alt="fellow travelers" />

        <div>
            <Button onSubmit={() => {setShowModal(true)}}>Become invitor</Button>
        </div>


        <Modal
            show={showFormModal}
            onClose={onModalClose}
        >
            <InvitorForm />
        </Modal>

        </div>
  )
}

export default FellowTraveler