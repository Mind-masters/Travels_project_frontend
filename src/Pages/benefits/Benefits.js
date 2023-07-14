import React from 'react';
import styles from './benefits.module.css';
import { AiFillHeart } from 'react-icons/ai';
import { MdGroups } from 'react-icons/md';
import { FaRegCalendarCheck } from 'react-icons/fa';
import Modal from "../../components/shared/UI/Modal";
import { useState } from 'react';
import LikesModal from './modals/likesModal';
import InvitingsModal from './modals/invitingsModal';
import BookingsModal from './modals/bookingsModal';


const Benefits = () => {

  const [showLikesModal, setShowLikesModal] = useState(false);
  const [showInvitingsModal, setShowInvitingsModal] = useState(false);
  const [showBookingsModal, setShowBookingsModal] = useState(false);

  const onCloseModalHandler = () => {
    setShowLikesModal(false);
    setShowInvitingsModal(false);
    setShowBookingsModal(false);
  }



  return (
    <section className={styles.container}>
      <div className={styles.section_heading}>
        <h2 >Ways To Get Points</h2>
      </div>

      {
        <Modal
          show={showLikesModal || showInvitingsModal || showBookingsModal}
          onClose={onCloseModalHandler}
        >
          <div className={styles.modal_wrapper}>
            {showLikesModal && <LikesModal onClose={onCloseModalHandler}/>}
            {showInvitingsModal && <InvitingsModal onClose={onCloseModalHandler} />}
            {showBookingsModal && <BookingsModal />}
          </div>
        </Modal>
      }

      <div className={styles.row}>
        <div className={styles.column}>
          <div className={styles.card} onClick={()=>setShowLikesModal(true)}>
            <div className={styles.icon_wrapper}>
              <AiFillHeart/>
            </div>
            <h3 className={styles.earn_point}>Get Points with Likes <br/></h3>
            <p className={styles.description}>
              Sharing your favorite places has never been more rewarding! Get points based on the number of likes your shared place receives
            </p>
          </div>
        </div>

        <div className={styles.column}>
          <div className={styles.card} onClick={()=>setShowInvitingsModal(true)}>
            <div className={styles.icon_wrapper}>
              <MdGroups/>
            </div>
            <h3 className={styles.earn_point}>Get Points By Sharing</h3>
            <p className={styles.point_description}>
              Get points for inviting new people to join TripWhoop
            </p>
          </div>
        </div>

        <div className={styles.column}>
          <div className={styles.card} onClick={()=>setShowBookingsModal(true)}>
            <div className={styles.icon_wrapper}>
              <FaRegCalendarCheck/>
            </div>
            <h3 className={styles.earn_point}>Get Points Daily</h3>
            <p  className={styles.point_description}>
              Earn points for every booking made through this platform.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Benefits