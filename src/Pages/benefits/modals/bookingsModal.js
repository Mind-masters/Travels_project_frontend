import React from 'react'
import { FaRegCalendarCheck } from 'react-icons/fa';
import BenefitsModalHeader from './header';
import styles from "./modals.module.css";

const BookingsModal = () => {
  

  return (
    <>
        <BenefitsModalHeader header="Get Points Daily">
            <FaRegCalendarCheck />
        </BenefitsModalHeader>

        <div className={styles.list_container}>
            <div className={styles.list_item}>
                <p>
                Log in every day to earn 1 bonus point. Accumulate points and unlock exciting rewards. Stay engaged and make the most of your daily bonus points. Happy exploring!
                </p>
            </div>
        </div>
    </>
)
}

export default BookingsModal