import React from 'react'
import Modal from '../../../../../../components/shared/UI/Modal'
import styles from "./giftsPopUp.module.css";
import header_icon from "../../../../../../assets/explore/gifts_header.png";
import Balance from './balance';
import Button from '../../../../../../components/shared/UI/button/Button';
import donate_icon from "../../../../../../assets/explore/donate_icon.png";


const GiftsPopUp = (props) => {

  return (
    <>
        <Modal 
            show={props.show}
            onClose={props.onClose}
        >
            <div className={styles.container}>
              <div className={styles.header}>
                <img src={header_icon} alt=''/>
                <h1>Make an impact!</h1>
              </div>

              <div className={styles.paragraph}>
                <p>
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 
                </p>
              </div>

              <Balance />

              
              <div className={styles.paragraph}>
                <p>
                  Decide which amount to donate:
                </p>
              </div>

              <Button height="auto" color="#EE7D15">
                <div className={styles.donate_btn_container}>
                  <img src={donate_icon} alt='' />
                  <h1>Donate</h1>
                </div>
              </Button>

            </div>
        </Modal>
    </>
  )
}

export default GiftsPopUp