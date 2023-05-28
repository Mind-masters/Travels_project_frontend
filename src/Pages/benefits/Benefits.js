import React from 'react';
import styles from './benefits.module.css';
import { AiFillHeart } from 'react-icons/ai';
import { MdGroups } from 'react-icons/md';
import { FaRegCalendarCheck } from 'react-icons/fa';

const Benefits = () => {
  return (
    <div className={styles.main_container}>
    <section className={styles.container}>
      <div className={styles.section_heading}>
        <h2 >Ways to Earn Point</h2>
      </div>
      <div className={styles.row}>
        <div className={styles.column}>
          <div className={styles.card}>
            <div className={styles.icon_wrapper}>
              <AiFillHeart/>
            </div>
            <h3 className={styles.earn_point}>Earn Point with Likes</h3>
            <p className={styles.point_description}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.card}>
            <div className={styles.icon_wrapper}>
              <MdGroups/>
            </div>
            <h3 className={styles.earn_point}>Earn Points  By Referal</h3>
            <p className={styles.point_description}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.card}>
            <div className={styles.icon_wrapper}>
              <FaRegCalendarCheck/>
            </div>
            <h3 className={styles.earn_point}>Earn Point Booking</h3>
            <p  className={styles.point_description}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Benefits