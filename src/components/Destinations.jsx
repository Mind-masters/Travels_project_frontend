import React from 'react'
import 'tw-elements';

const Destinations = () => {
  return (
    <div>
      <h1 className=' text-transform: uppercase flex flex-col justify-center text-center items-center h-3/4
      text-4xl font-medium text-dark-gray font-weight: 800 m-8 p-9'>types of destinations</h1>
    {/*cards */}
    <div class="flex p-4">
    <div class="rounded-lg shadow-lg bg-white max-w-sm">
    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
      <img className="rounded-t-lg" src="https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
    </a>
    <div class="p-0 ">
      
      <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 bg-black
     text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg 
     focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg
      transition duration-150 ease-in-out">FOREST</button>
    </div>
  </div>
  
</div>
</div>
    
  )
}

export default Destinations
