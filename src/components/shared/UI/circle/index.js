import React from 'react'
import { Fragment } from 'react'
import WorldLogo from '../../../../assets/world.png'
import Styles from './animatedCircle.module.css';

const AnimatedCircle = () => {
  return (
    <Fragment>
    <div className='outerContainer'>
    <div className={Styles.container}>
      <div className={Styles.item}>
        <img src={WorldLogo} />
      </div>
      <div className={Styles.circle} style={{animationDelay: '-3s'}}></div>
      <div className={Styles.circle} style={{animationDelay: '-2s'}}></div>
      <div className={Styles.circle} style={{animationDelay: '-1s'}}></div>
      <div className={Styles.circle} style={{animationDelay: '0s'}}></div>
    </div>
  </div>
</Fragment>
  )
}

export default AnimatedCircle
