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

  const onInvitingsModalSubmit = (email) => {
    console.log("submiting invitings modal..");
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
            {showInvitingsModal && <InvitingsModal onSubmit={onInvitingsModalSubmit} />}
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

        {/* <div className={styles.point_details}>
          <p className={styles.point_description}>
            We are thrilled to introduce an exciting feature that rewards your engagement and creativity
            on our website. Starting today, you have the opportunity to earn points in multiple ways, unlocking
              a world of benefits and exclusive perks. Let's explore the various avenues through which you can
              accumulate points and enjoy the rewards!</p> <br/>
              <p className={styles.point_description}>Sharing and Likes: Sharing your favorite places has never been more rewarding! You can earn points based on the number of likes your shared place receives: <br/>

                a) 40 Points for 50 Likes: When a place you shared receives a minimum of 50 likes, you will earn a well-deserved 40 points. Your contributions to the community are recognized and appreciated.<br/>

                b) 70 Points for 80 Likes: Achieve a higher milestone by accumulating 80 likes on your shared place, and you will be rewarded with 70 points. Your popularity is growing, and so are your benefits!<br/>

                c) 100 Points for 100+ Likes: Aim for the stars and watch your points soar! If the place you shared surpasses 100 likes, you will earn an impressive 100 points. Your ability to captivate and engage the community is truly commendable.</p><br/>
                <p className={styles.point_description}>
                  d)Free Month Membership for 400+ Likes: We have something special in store for our most influential users. If the place you shared receives an outstanding 400 likes or more, you will not only earn points but also enjoy a complimentary month of our premium membership plan. Unlock exclusive features and premium benefits, making your experience even more extraordinary.</p><br/>
                <p className={styles.point_description}>Referrals: Sharing your positive experience with friends and family can be highly rewarding. When you refer someone to join our community, both you and the referred user will earn points. Spread the word, invite others to experience our platform, and watch your points grow as your network expands.</p><br/>
                <p className={styles.point_description}>Booking: We believe in rewarding your loyalty and trust in our platform. For every booking you make through our website, you will earn points. The more you explore and discover new places with us, the more points you will accumulate, bringing you closer to exciting rewards.
              </p>
            </div> */}
      </div>
    </section>
  )
}

export default Benefits