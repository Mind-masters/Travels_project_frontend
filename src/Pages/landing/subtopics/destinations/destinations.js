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
      <div className='destinations'>
      <button className='prev' onClick={()=> setIndex(index -1)}>
      <FiChevronLeft/>
      </button>
      <button className='next' onClick={()=> setIndex(index +1)}>
      <FiChevronRight/>
      </button>
        <h1>New Slid</h1>
        <div className='dest-container'>
          <div className='dest-card'>
            <div className='dest-image'>
            {/* <span className='rating'>yyyuy</span> */}
            <img  className='dest-thumb' src='https://images.pexels.com/photos/70365/forest-sunbeams-trees-sunlight-70365.jpeg?auto=compress&cs=tinysrgb&w=600' alt=''></img>
             <button className='red'>forest</button>
            </div>
          </div>
          
          <div className='dest-card'>
            <div className='dest-image'>
            {/* <span className='rating'>yyyuy</span> */}
            <img  className='dest-thumb' src='https://images.pexels.com/photos/753339/pexels-photo-753339.jpeg?auto=compress&cs=tinysrgb&w=600' alt=''></img>
             <button className='yellow'>culture</button>
            </div>
          </div>

          <div className='dest-card'>
            <div className='dest-image'>
            {/* <span className='rating'>yyyuy</span> */}
            <img  className='dest-thumb' src='https://images.pexels.com/photos/1658967/pexels-photo-1658967.jpeg?auto=compress&cs=tinysrgb&w=600' alt=''></img>
             <button className='red'>hills</button>
            </div>
          </div>

          {/* <div className='dest-card'>
            <div className='dest-image'>
            <span className='rating'>yyyuy</span>
            <img  className='dest-thumb' src='https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&w=600' alt=''></img>
             <button className='dest-btn'>town</button>
            </div>
          </div> */}
          
        </div>
      </div>
</section>
    
  )
}

export default Destinations
