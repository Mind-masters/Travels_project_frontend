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
import MakeMoney from './MakeMoney';
import PlaceIcon from '../../assets/benefits/location.png';
import Envelope from '../../assets/benefits/envelope.png';
import Carlendar from '../../assets/benefits/carlendar.png';


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
      
        <MakeMoney/>

    

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
      <div className={styles.main_box}>
      <div className={styles.section_heading}>
        <h2 >Ways To Get Points</h2>
        <p>These points will help you knowing the locations of beautiful places that you’ll find interesting</p>
      </div>
      
      <div className={styles.row}>
        <div className={styles.column}>
          <div className={styles.card} onClick={()=>setShowLikesModal(true)}>
            <div className={styles.icon_wrapper}>
              <img src={PlaceIcon} alt='sahre place'/>
            </div>
            <h3 className={styles.earn_point}>Share unique places</h3>
            <div className={styles.description}>
              <p>Get 4 points every time</p>
              <p>you share new place</p>
              </div> 
          </div>
        </div>

        <div className={styles.column}>
          <div className={styles.card} onClick={()=>setShowInvitingsModal(true)}>
            <div className={styles.icon_wrapper}>
            <img src={Envelope} alt='invite people'/>
            </div>
            <h3 className={styles.earn_point}>Invite new people</h3>
            <div className={styles.point_description}>
              <p>Get points for inviting new people</p>
              <p> to join TripWhoop</p>
              </div>
          </div>
        </div>

        <div className={styles.column}>
          <div className={styles.card} onClick={()=>setShowBookingsModal(true)}>
            <div className={styles.icon_wrapper}>
            <img src={Carlendar} alt='login Everyday'/>
            </div>
            <h3 className={styles.earn_point}>Login every day</h3>
            <div  className={styles.point_description}>
              <p>Earn points for every booking made</p>
              <p> through this platform.</p>
              </div>
          </div>
        </div>

      </div>
      </div>


    </section>
  )
}

export default Benefits