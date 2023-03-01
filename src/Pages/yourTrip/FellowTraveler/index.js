import React, { Fragment } from 'react'
import styles from "./fellowTraveler.module.css"
import fellow_travelers_logo from "../../../assets/your-trip/fellow_travellers.png";
import Button from '../../../components/shared/UI/button/Button';
import { useState } from 'react';
import Modal from '../../../components/shared/UI/Modal';
import InvitorForm from './invitorForm';
import InvitorsList from "./invitorsList";
import AnimatedCircle from '../../../components/shared/UI/circle';

const FellowTraveler = () => {

    const [showFormModal, setShowModal] = useState(false);

    const onModalClose = () => {
        setShowModal(false)
    }

    return (

        <div className={styles.container}>
            <div className={styles.fellow_friends_image}>

                <h1 className={styles.fellow_friends_header}>
                    Where interests become friendships
                </h1>
                
                <img className={styles.fellow_logo} src={fellow_travelers_logo} alt="" />

                <Modal
                    show={showFormModal}
                    onClose={onModalClose}
                >
                    <InvitorForm />
                </Modal>

                <h1 className={styles.fellow_friends_header}>
                    Looking for travel buddy?
                </h1>

                <div className={styles.invite_or_join}>
                    <Button onSubmit={() => {setShowModal(true)}}>
                        <h1 style={{color: "white"}}>Become invitor</h1>
                    </Button>

                    <span>Or</span>

                    <h2>Join others</h2>
                    
                </div>


                <InvitorsList />
                {/* <AnimatedCircle/> */}

            </div>
        </div>
    )
}

export default FellowTraveler