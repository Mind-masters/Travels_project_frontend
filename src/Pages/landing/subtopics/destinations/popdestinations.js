// import styles from './popDestinations.module.css'
import React, {useState, useEffect} from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import dummy_user_logo from "../../../../assets/landing/dummy_user.png"
import StarsRating from '../../../../components/shared/UI/Ratings/stars';
import Like from '../../../../components/shared/UI/Ratings/like';
import { FaQuoteRight } from 'react-icons/fa';
import data from './popData';
import './popDestination.css'
import Footer from '../../../footer/Footer';
import { Fragment } from 'react';

const PopDestinations = () => {

  const [isClick, setClick] = useState(false);


  
  const [people, setPeople] = useState(data);
  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <Fragment>
    <section className="section">
      <div className="title">
      <div>
        <h1>
      <span className='dest_title'>popular Destinations</span> 
        </h1>
      </div>
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote, placeimage } = person;

          let position = 'nextSlide';
          if (personIndex === index) {
            position = 'activeSlide';
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = 'lastSlide';
          }

          return (
            <article className={position} key={id}>
              <div className='content'>
              <div className='user_avatar'>
              <div className='profile_container'>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              </div>
              <div className='styles.user_options'>
              <div className='styles.user_rating'>
              <StarsRating /> 
              </div>
              </div>
              </div>
              <div className='parent_image'>
                <div  className='place_img'>
                <img src={placeimage}/>
                </div>
                <div className='place_content_description'>
                <p>
                {quote}...<span id='read_more'>See More</span>
                </p>
                </div>
              </div>
              </div>
          <div className="carousel-indicators">
          {people.map((_, idx) => (
            <span
              key={idx}
              className={idx === setIndex ? "active" : ""}
              onClick={() => setIndex(idx)}
            ></span>
        ))}
          </div>
              {/* <FaQuoteRight className="icon" /> */}

      </article>
          );
        })}
      </div>
    

      {/* <div className={styles.place_content} >

        <div className={styles.place_content_title}>
          <h2>Maldives</h2>
        </div>

        <div>
          <Like isLiked={isClick} onClick={() => setClick(!isClick)} />
        </div>
          <Like />
        </div> */}

        
    
  {/* </div> */}
</section>
  {/* <Footer/> */}
</Fragment>
    
  )
}


export default PopDestinations;