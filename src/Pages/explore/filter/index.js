import React from 'react'
import styles from "./filter.module.css";
import Button from '../../../components/shared/UI/button/Button';
import { useNavigate } from 'react-router-dom';
// logos
import globe_logo from "../../../assets/explore/filter/globe.png";
import location_logo from "../../../assets/explore/filter/location.png";
import popularity_logo from "../../../assets/explore/filter/popularity.png";
import input_sign_logo from "../../../assets/landing/expanded_logo.png";
import add_new_place_logo from "../../../assets/explore/filter/add_new_place.png";


const Filter = (props) => {

  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      

      <div className={styles.btn_container}>
        <Button height="auto" color="#EE7D15">
          <h1>Filter</h1>
        </Button>
      </div>

      <div className={styles.filter_body}>

        <div className={styles.filter_option}>
          <h2>Country</h2>

          <div>
            <img src={globe_logo} alt='globe' />
            <p>Select</p>
            <img style={{ width: "1.5rem ", alignSelf: "center"}} src={input_sign_logo} alt='input' />
          </div>
        </div>

        <div className={styles.filter_option}>
          <h2>Popularity</h2>

          <div>
            <img src={location_logo} alt='location' />
            <p>Where to</p>
            <img style={{ width: "1.5rem ", alignSelf: "center"}} src={input_sign_logo} alt='input' />
          </div>
        </div>

        <div className={styles.filter_option}>
          <h2>Travel type</h2>

          <div>
            <img src={popularity_logo} alt='vacation' />
            <p>Vacation</p>
            <img style={{ width: "1.5rem ", alignSelf: "center"}} src={input_sign_logo} alt='input' />
          </div>
        </div>
        
      </div>

      <div onClick={()=>navigate("/my-places")} className={styles._add}>
        <p>If you dont find anything, share your experience if us!</p>
        <img src={add_new_place_logo} alt='plus' />

        <h1>Share your place</h1>
      </div>

    </div>
  )
}

export default Filter