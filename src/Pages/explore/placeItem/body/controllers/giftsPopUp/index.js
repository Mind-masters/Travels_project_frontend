import React from 'react'
import Modal from '../../../../../../components/shared/UI/Modal'
import styles from "./giftsPopUp.module.css";
import header_icon from "../../../../../../assets/explore/gifts_header.png";
import Balance from './balance';
import Button from '../../../../../../components/shared/UI/button/Button';
import donate_icon from "../../../../../../assets/explore/donate_icon.png";
import active_bonus_star from "../../../../../../assets/explore/active_star.png"
import not_active_bonus_star from "../../../../../../assets/explore/not_active_star.png"

import { useState } from 'react';

const GiftsPopUp = (props) => {

  const [isSelected, setIsSelected] = useState(1);
  const options = [4,9,13,17]

  const DonateOptions = ({options}) => {
    return <div className={styles.options_container}>
      {options &&
        options.map((option, key) => {
          return <div 
            key={key} 
            onClick={()=>setIsSelected(key)}
            className={styles.option_item}
            style={{ backgroundImage:`url(${isSelected===key ? active_bonus_star : not_active_bonus_star})` }}
          >
            <p style={{ color:`${isSelected===key ? "white":"#7a7a7a"}` }}>{option}</p>
          </div>
        })
      }
    </div>
  }

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

              <DonateOptions options={options} />

              <Button onSubmit={()=>{alert(`donating amount: ${options[isSelected]}`)}} height="auto" color="#EE7D15">
                <div className={styles.donate_btn_container}>
                  <img src={donate_icon} style={{ width: "28px", height: "28px" }} alt='' />
                  <h1>Donate</h1>
                </div>
              </Button>

            </div>
        </Modal>
    </>
  )
}

export default GiftsPopUp