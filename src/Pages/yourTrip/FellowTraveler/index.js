import React, { Fragment } from 'react'
import styles from "./fellowTraveler.module.css"
import fellow_travelers_logo from "../../../assets/your-trip/fellow_travellers.png";
import Button from '../../../components/shared/UI/button/Button';
import { useState } from 'react';
import Modal from '../../../components/shared/UI/Modal';
import InvitorForm from './invitorForm';
import AdminImg from '../../../assets/culture.jpg'

const FellowTraveler = () => {

    const [showFormModal, setShowModal] = useState(false);

    const onModalClose = () => {
        console.log("closing modal");
        setShowModal(false)
    }

  return (
    <Fragment>

    <div className={styles.fellow_friends_image}>

        <h1>
            Looking for fellow traveller?
        </h1>
        
        <img src={fellow_travelers_logo} alt="fellow travelers" />
        <Modal
            show={showFormModal}
            onClose={onModalClose}
        >
            <InvitorForm />
        </Modal>

        </div>
        <div className='container justify-center w-52 m-auto'>
            <div className='mb-10'>
            <Button onSubmit={() => {setShowModal(true)}}>Become inviter</Button>
            </div>
            <div>
            <span className='text-[gray] text-3xl m-12 text-center p-10'>Or</span>
            <h1 className='text-4xl text-[orange] mt-10 md: mb-3'>Join others</h1>
            </div>
        </div>
        
        <div className='container m-auto w-50 justify-center'>
        <span className='bg-[orangered] w-50 rounded-3xl text-4xl text-white p-2 m-5'>Filter</span>
        <div className='container flex m-auto w-50 p-2'>
        <img className='w-20 object-cover rounded-full h-20 m-4' src={AdminImg}></img>
        <span className='justify-end absolute right-60 text-3xl text-center p-2 cursor-pointer bg-[orangered] rounded-3xl text-white w-40'>Details</span>
        </div>
        
        <div className='container flex m-auto w-50 p-2'>
        <img className='w-20 object-cover rounded-full h-20 m-4' src={AdminImg}></img>
        <span className='justify-end absolute right-60 text-3xl text-center p-2 cursor-pointer bg-[orangered] rounded-3xl text-white w-40'>Details</span>
        </div>
        </div>
    </Fragment>
  )
}

export default FellowTraveler