import React from 'react'
import styles from './MakeMoney.module.css';
import Beginner from '../../assets/benefits/beginner.png';
import Expert from '../../assets/benefits/expert.png';
import Guru from '../../assets/benefits/guru.png';
import Master from '../../assets/benefits/master.png';
import Button from '../../components/shared/UI/button/Button';
import Upgrade from '../../assets/benefits/upgrade.png';


const MakeMoney = () => {
  return (
    <div className={styles.money_container}>
    <div className={styles.text_heading}>
      <h2 >Ways To make Money with <span>Trip</span>Whoop</h2>
      <p>There is always something interesting near you. Share unique place and make money</p>
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
            <p>between<span> 0.5$ </span>to <span> 2$</span></p>
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
            <p>between <span>2$</span> to <span>5$</span></p>
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
            <p><span>as much as you want</span></p>
            </div>
            </div>
          </div>
        </div>
    </div>
    <div className={styles.upgrade}>
    <Button color="#EE7D15">
      <span><img src={Upgrade} alt='upgrade'/></span>
      <h2>Upgrade to new level</h2>
    </Button>
    </div>
</div>
  )
}

export default MakeMoney