import React from 'react'
import styles from './MakeMoney.module.css';
import Beginner from '../../assets/benefits/beginner.png';
import Expert from '../../assets/benefits/expert.png';
import Guru from '../../assets/benefits/guru.png';
import Master from '../../assets/benefits/master.png';


const MakeMoney = () => {
  return (
    <div className={styles.money_container}>
    <div className={styles.text_heading}>
      <h2 >Ways To make Money with TripWhoop</h2>
      <p>There is always something interested near you. Share unique places and make money</p>
    </div>

    <div className={styles.row}>
        <div className={styles.container_column}>
          <div className={styles.point_card}>
            <div className={styles.icon_wrapper}>
              <img src={Beginner} alt='Beginner'/>
            </div>
            <h3 className={styles.earn_point}>Beginner</h3>
            <div className={styles.description}>
            <p>Once you sign in you </p>
            <p>became 1 level</p>
            </div>
          </div>
        </div> 

        <div className={styles.container_column}>
          <div className={styles.expert}>
          <div className={styles.point_card}>
            <div className={styles.icon_wrapper}>
              <img src={Expert} alt='Expert'/>
            </div>
            <h3 className={styles.earn_point}>Expert</h3>
            <div className={styles.description}>
            <p>Allows you to put price </p>
            <p>on your sharing </p>
            <p>between 0.5$ to 2$</p>
            </div>
          </div>
        </div>
        </div>

        <div className={styles.container_column}>
          <div className={styles.point_card}>
            <div className={styles.icon_wrapper}>
              <img src={Guru} alt='Guru'/>
            </div>
            <h3 className={styles.earn_point}>Guru</h3>
            <div className={styles.description}>
            <p>Allows you to put price </p>
            <p>on your sharing </p>
            <p>between 2$ to 5$</p>
            </div>
          </div>
        </div>

        <div className={styles.container_column}>
        <div className={styles.expert}>
          <div className={styles.point_card}>
            <div className={styles.icon_wrapper2}>
              <img src={Master} alt='ProMaster'/>
            </div>
            <h3 className={styles.earn_point}>Pro Master</h3>
            <div className={styles.description}>
            <p>Allows you to sell high </p>
            <p>quality place for </p>
            <p>as much as you want</p>
            </div>
            </div>
          </div>
        </div>
    </div>
</div>
  )
}

export default MakeMoney