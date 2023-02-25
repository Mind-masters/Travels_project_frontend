import React, {Fragment} from 'react'

const InvitorForm = () => {
  return (
    <Fragment>
    <div className='container m-auto justify-center'>
      <div>
      <form className="p-10 bg-white rounded-lg drop-shadow-lg space-y-4">
        <h1 className="text-2xl font-light capitalize text-[orangered]">Let's plan a new trip</h1>

        
        <div className="flex flex-col">
            <label for="name">Date</label>
            <input type="date" name="name" id="date" required className="peer border border-slate-400"/>

            <p class="invisible peer-invalid:visible text-red-700 font-light">
                Please enter your date
            </p>
        </div>

        
        <div className="flex flex-col">
            <label for="email">Location</label>
            <input type="search" name="search" id="search" required className="peer border border-slate-400" placeholder='where to go'/>
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
        <p className='text-[orange] text-2xl'>Search for Fellow Travellers</p>
        {/* <button type="submit" className="px-5 py-1 bg-[orangered] text-white">Post</button> */}
    </form>
      </div>
    </div>
    </Fragment>
  ) 
}

export default InvitorForm