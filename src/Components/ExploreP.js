import React from 'react'
import PlaceCard from './PlaceCard'

const ExploreP = () => {
  return (
    <>
      <div className='px-2  lg:p-10 lg:py-16 flex flex-col justify-center items-center'>
        <div className='text-xs text-gray-400'>Dummy data</div>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-14'>

        <PlaceCard />
        <PlaceCard />
        <PlaceCard />
        <PlaceCard />
        <PlaceCard />
        <PlaceCard />
        <PlaceCard />
        <PlaceCard />
        </div>
      </div>
    </>
  )
}

export default ExploreP
