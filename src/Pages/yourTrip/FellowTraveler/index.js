import React, { Fragment } from 'react'
import styles from "./fellowTraveler.module.css"
import Button from '../../../components/shared/UI/button/Button';
import { useState } from 'react';
import InvitorForm from './invitorForm';
import InvitorsList from "./invitorsList";
import Controllers from './controllers';
import card_image_1 from "../../../assets/your-trip/card_image_1.png";
import card_image_2 from "../../../assets/your-trip/card_image_2.png";



const FellowTraveler = () => {

    const [showFormModal, setShowModal] = useState(false);

    const onModalClose = () => {
        setShowModal(false)
    }

    return (

        <div className={styles.wrapper}>
            <h1 className={styles.main_header}>
                Where interests become friendships
            </h1>

            <div className={styles.representing_cards}>

                
                <div className={styles.child_card}>
                    <img src={card_image_1} alt='' />
                    <h1>Join a group</h1>
                    <p>
                        Do what you love, meet others who love it, find your community. The rest is history
                    </p>
                </div>

                <div className={styles.child_card}>
                    <img src={card_image_2} alt='' />
                    <h1>Start a group</h1>
                    <p>
                        You don’t have to be an expert to gather people together and explore shared interests                    
                    </p>
                </div>                

            </div>

            <Controllers />
            <InvitorsList />
            {/* <AnimatedCircle/> */}
        </div>
    )
}

export default FellowTraveler