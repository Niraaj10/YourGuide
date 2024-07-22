import React, { useState } from 'react';
import { fetchTripData, fetchTripDataC } from '../ApiData/ApiData'
import fullText from '../ApiData/Dataa';

const TripPlanner = () => {
  const [cDes, setCDes] = useState('');
  const [hotels, setHotels] = useState([]);
  const [days, setDays] = useState([]);


  const splitText = (text) => {
    const parts = text.split('\n\nHotels:\n');
    const cityDescription = parts[0];
    setCDes(cityDescription);
    const hotelParts = parts[1].split('\n\nDay ');
    const hotelss = hotelParts[0].trim().split(/\n(?=\d+\.\s)/);
    console.log(hotelss);
    
    setHotels(hotelss);
    const days = 'Day ' + hotelParts.slice(1).join('\n\nDay ');
    const perrDayss = days.split('Day').slice(1);
    setDays(perrDayss);
    return { cityDescription, hotelss, perrDayss };
  };

  const handleClick = async () => {
    try {
      // const PlanText = await fetchTripData('Pune', '2024-08-01', '2024-08-05');
      const PlanText = await fetchTripDataC('Pune', '2024-08-01', '2024-08-05');   
    // const { cityDescription, hotelss, PerrDayss } = splitText(PlanText);
    //   // const days = splitText(PlanText) ;
    //   setCDes(cityDescription);
    // // console.log(cDes);
    // setHotels(hotelss);
    // // console.log(hotels);
    // setDays(PerrDayss);
    // // console.log(days);


    const parts = await PlanText.split('\n\nHotels:\n');
    const cityDescription = parts[0];
    setCDes(cityDescription);
    const hotelParts = parts[1].split('\n\nDay ');
    const hotelss = hotelParts[0].trim().split(/\n(?=\d+\.\s)/);
    setHotels(hotelss);
    const days = 'Day ' + hotelParts.slice(1).join('\n\nDay ');
    const perrDayss = days.split('Day').slice(1);
    setDays(perrDayss);

    } catch (error) {
      console.error('Error Getting dataaaa', error);
    }

    // const { cityDescription, hotelss, perrDayss } = splitText(fullText);

    // console.log(cDes);

    // console.log(hotels);

    // console.log(days);

  }






  return (
    <>
      <div className='mt-32'>

        <div className='w-full flex flex-col mx-auto justify-center items-center'>
          Top Citiess

          <div className='w-full mx-auto'>
            <button onClick={handleClick} className='bg-black text-white p-4 mx-auto'>Click</button>
          </div>

          <div>
            <button onClick={handleClick}>Fetch Trip Data</button>
            <div className='mb-7'>
              <h2 className='p-5'>City Description</h2>
              <p>{cDes}</p>
            </div>
            <div className='mb-7'>
              <h2>Hotels</h2>
              <p>{hotels.map((hot, index) => (
                <li key={index}>{hot}</li>
              ))}</p>
            </div>
            <div className='mb-7'>
              <h2>Days</h2>
              <ul>
                {days.map((day, index) => (
                  <li key={index}>{day}</li>
                ))}
              </ul>
            </div>
          </div>



        </div>

      </div>
    </>
  )
}

export default TripPlanner
