import React from 'react'
import './popdestinations.css'
import {FaStar} from 'react-icons/fa';

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
      <div className="grid grid-rows-3 grid-flow-col gap-4 ml-9">
     <div className="row-span-3 ... ml-40 mt-10"><img className='' src='https://images.pexels.com/photos/1662770/pexels-photo-1662770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''></img></div>
   <div className="col-span-2 ..."><img src='https://images.pexels.com/photos/705075/pexels-photo-705075.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' width="50%"></img></div>
    <div className="row-span-2 col-span-2 ..."><img src='https://images.pexels.com/photos/225203/pexels-photo-225203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' width="50%"></img></div>
  </div>

  {/* <div className="grid grid-rows-3 grid-flow-col gap-4 mt-10">
  <div className="row-span-3 ... ml-40"><img src='https://images.pexels.com/photos/974320/pexels-photo-974320.jpeg?auto=compress&cs=tinysrgb&w=600' className='w-fit h-fit'></img></div>
  <div className="col-span-2 ..."><img src='https://images.pexels.com/photos/1154198/pexels-photo-1154198.jpeg?auto=compress&cs=tinysrgb&w=600' className='w-80'></img></div>
  <div className="row-span-2 col-span-2 ..."><img src='https://images.pexels.com/photos/236171/pexels-photo-236171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='w-80'></img></div>
</div> */}
<div>
  <div>
    <h2>Green Hills, Gujarat</h2>
    <span>View on Map</span>
  </div>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
    been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of 
    type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the 
    leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
     release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
     like Aldus PageMaker including versions of Lorem Ipsum.</p>
</div>
</section>
  )
}
