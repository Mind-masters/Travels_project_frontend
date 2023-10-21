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
        <h2 >Ways To Make money with TripWhoop</h2>
      </div>

      <div className={styles.make_money_container}>
        <div>
          <p>There is always something interested near you</p>
          <p>Share unique places and make money</p>
          <div>
            <p>1 level. Once you sign in you became 1 level</p>
            <p>2 level allows you to put price on your sharings between 0.5$ to 2$</p>
            <p>3 level allows you to put price on your sharings between 2$ to 5$</p>
            <p>Becoming a pro master allows you to sell hight quality places for as much as you want</p>
          </div>
        </div>
      </div>

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
            <h3 className={styles.earn_point}>Share unique places</h3>
            <p className={styles.description}>
              Get 4 points every time you share new place
            </p>
          </div>
        </div>

        <div className={styles.column}>
          <div className={styles.card} onClick={()=>setShowInvitingsModal(true)}>
            <div className={styles.icon_wrapper}>
              <MdGroups/>
            </div>
            <h3 className={styles.earn_point}>Invite new people</h3>
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
            <h3 className={styles.earn_point}>Login every day</h3>
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