import React from 'react'
import PlaceCard from './PlaceCard'

const ExploreP = () => {
  return (
    <>
      <div className='p-10 py-16 flex flex-col justify-center items-center'>
        <div className='text-xs text-gray-400'>Dummy data</div>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>

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
