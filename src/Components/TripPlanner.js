import React from 'react'
import { fetchTripData } from '../ApiData/ApiData'

const TripPlanner = () => {

  const handleClick = async () => {
    try {
      const PlanText = await fetchTripData('Pune', '2024-08-01', '2024-08-05');
      console.log(PlanText);
      
    } catch (error) {
      console.error('Error Getting dataaaa', error);
    }
  }


  return (
    <>
      <div className='mt-32'>

        <div className='w-full'>
          Top Citiess

          <div className='w-full'>
            <button onClick={handleClick} className='bg-black text-white p-4 mx-auto'>Click</button>
          </div>
        </div>

      </div>
    </>
  )
}

export default TripPlanner
