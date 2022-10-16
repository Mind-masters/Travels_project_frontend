import React from 'react'
import './popdestinations.css'
import {FaStar} from 'react-icons/fa';
import {FaMapMarkerAlt} from 'react-icons/fa';
import {FcLike} from 'react-icons/fc';
import {BsPen} from 'react-icons/bs';

export const Popdestinations = () => {
  return (
    <section>
    
      <h1 className='dest-title'>popular Destinations</h1>
    <div className='box'>
        <div className='container'>
          <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600" alt='avatar'/>
          <p><span>Rubi Rose.</span></p>
          </div>
          <div className='stars'>
          <span><FaStar/></span>
          <span><FaStar/></span>
          <span><FaStar/></span>
          <span><FaStar/></span>
          <span><FaStar/></span>
          </div>
          <div>
          <span>...</span>
          </div>
        </div>
        {/*landing Gallery */}
        <div className='first-gallery'>
          <img src='https://images.pexels.com/photos/1662770/pexels-photo-1662770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''></img>
        <div className='second-gallery'>
          <img src='https://images.pexels.com/photos/705075/pexels-photo-705075.jpeg?auto=compress&cs=tinysrgb&w=600' alt=''></img>
          <img src='https://images.pexels.com/photos/225203/pexels-photo-225203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''></img>
        </div>
        </div>
      
    <div className="parent-box">
        <div className="clearfix">
            <div className="dest-name">
            <h2>Green Hills, Gujarat</h2>
            </div>
            {/* <div class="menu-div">
                <nav>
                    <ul>
                    <li><FaMapMarkerAlt className='map-icon'/></li>
                        <li>View on Map</li>
                        
                    </ul>
                </nav>
            </div> */}
        </div>
    </div>
    <div className='description'>
      
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
    been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of 
    . It has survived not only five centuries, but also the 
    leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
     release of Letraset sheets containing passages, and more recently with desktop publishing software 
     like Aldu.  ...<span id='read-more'>See More</span></p>
    </div>
    <div className='likes-comment'>
    <span><FcLike className='likes'/></span><h3>23 likes</h3>
    <span><BsPen className='comment'/></span><h3>8 comments</h3>
    </div>
</section>
  )
}
