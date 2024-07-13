import React from 'react'
import saputara from '../Assests/img/Saputara.jpg'

const PlaceCard = () => {
  return (
    <>
      <div>
        <div className="Card h-[370px] rounded-3xl shadow-xl w-[250px] flex flex-col">
            <img src={saputara} alt="" className='w-[250px] rounded-t-3xl '/>
            <div className="Place p-2 px-3 text-xl font-bold">Saputara</div>
            <div className='px-3 flex justify-between'>
                <div className='font-semibold'>3 Days</div>
                <div className='text-green-500'>₹3299</div>
            </div>
                <div className='px-3 pt-3 text-xs'>Call: <span className='font-bold'>+919876543210</span></div>
        </div>
      </div>
    </>
  )
}

export default PlaceCard
