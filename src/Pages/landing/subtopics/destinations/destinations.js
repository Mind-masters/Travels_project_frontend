import React, {useState, useEffect} from 'react';
import {FiChevronRight, FiChevronLeft} from 'react-icons/fi';
import './destination.css';
import data from './data';


const Destinations = () => {
  const [destination, setDestination] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(()=>{
    const lastIndex = destination.length -1;
    if(index < 0){
      setIndex(lastIndex)
    }/*when we ran out of items*/
    if(index > lastIndex){
      setIndex(0)
    }
  }, [index, destination])
/*For SetInterval */
  useEffect(()=>{
 let slider = setInterval(() => {
  setIndex(index + 1)
}, 3000);
return () => clearInterval(slider);
},[index])
  return (
    <section className='section'>
      <div className='title'>
      <h2>
        <span>...types of Destinations...</span>
        </h2>
      </div>
      <div className='section-center'>
      {destination.map((place, placeIndex)=>{
      const {id, image, name} = place

      let position = 'nextSlide';
      if(placeIndex === index){
        position = 'activeSlide';
      }
      if(placeIndex === index - 1 ||(index === 0 && placeIndex === destination.length -1)){
        position = 'lastSlide';
      }
      return (
      <article className={position} key={id}>
        <img src={image} alt={name} className="place-img"/>
        <h3 className='name-text'>{name}</h3>
      </article>
      )
      })}
      
      <button className='prev' onClick={()=> setIndex(index -1)}>
      <FiChevronLeft/>
      </button>
      <button className='next' onClick={()=> setIndex(index +1)}>
      <FiChevronRight/>
      </button>
      </div>
</section>
    
  )
}

export default Destinations
