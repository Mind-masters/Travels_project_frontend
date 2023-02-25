import React, {Fragment, useState} from 'react'

const InvitorForm = () => {

  const [showSearchBox, setShowSearchBox] = useState(false);

  const handleClick = () => {
    setShowSearchBox(true);
  }

  return (
    <Fragment>
    <div className='container m-auto justify-center'>
      <div>
      <form className="p-10 bg-white rounded-lg drop-shadow-lg space-y-4">
        <h1 className="text-2xl font-light capitalize text-[orangered]">Let's plan a new trip</h1>

        
        <div className="flex flex-col border-4">
            <label for="name"></label>
            <input type="date" name="name" id="date" required className="peer border border-slate-400 text-3xl"/>

            <p class="invisible peer-invalid:visible text-red-700 font-light">
                Please enter your date
            </p>
        </div>

        
        <div className="flex flex-col border-4">
            <label for="email"></label>
            <input type="search" name="search" id="search" required className="peer border border-slate-400 text-3xl" placeholder='where to go'/>
            <p className="invisible peer-invalid:visible text-red-700 font-light">
                Please enter a location
            </p>
        </div>

        
        <div className="flex flex-col">
            <label for="message">Message</label>
            <textarea name="message" id="message" cols="30" rows="3" required placeholder='Intro'
                className="peer border border-slate-400 text-center"></textarea>
        </div>
        <p className='text-center text-xl'>24 travellers who matches your interests</p>
        <div>
        {showSearchBox ? (
        <input className='border border-slate-400 text-2xl' type="text" placeholder="Search Traveller..." />
          ) : (
        <p className='text-[orange] text-2xl cursor-pointer text-center' onClick={handleClick}>Search for Fellow Travellers</p>
      )}
      </div>
    </form>
    </div>
    </div>
    </Fragment>
  ) 
}

export default InvitorForm