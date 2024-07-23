import React, { useState } from 'react';
import { fetchTripData, fetchTripDataC } from '../ApiData/ApiData'
import fullText from '../ApiData/Dataa';
import search from '../Assests/svg/Search.svg';
import BgTP from '../Assests/img/bgTP.jpg';




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
      <div className='mt-32 relative'>

      <img src={BgTP} alt="" className='absolute top-[-320px] rounded-b-[70px]' />

        <div className='w-full relative z-20  flex flex-col mx-auto justify-center items-center'>
          <div className='text-white mt-[125px]'>
            <div className='font-bold text-sm mb-[-42px]'>Plan your trip with us with the help of AI</div>
            <div className='fig text-[150px] font-bold drop-shadow-3xl' style={{ textShadow: '1px 1px 15px rgba(0, 0, 0, 0.6)' }}>Make your trip</div>  
          </div>
          <div className='Inputs '>
            <div></div>
            <div className='flex flex-col gap-3 bg-white px-20 py-10 border rounded-3xl shadow-xl'>    
              <div className='text-sm font-bold'>Please enter your trip details</div>
              <div className='border p-2 rounded-xl flex justify-center items-center'>
                <input type="text" className='outline-none focus:outline-none w-80 pl-5' placeholder='Enter city' />
                <div className='relative'>
                <div className='absolute top-[-28px;] right-[41px] text-xs bg-white px-2 font-semibold text-gray-300'>End-date</div>
                <input type="date" name="" id="" className='outline-none focus:outline-none border-l px-2'placeholder='Enter city'  />
                </div>

                <div className='relative'>
                <div className='absolute top-[-28px;] right-[63px] text-xs bg-white px-2 font-semibold text-gray-300'>End-date</div>
                <input type="date" name="" id="" className='outline-none focus:outline-none border-l px-2 border-r mr-5' placeholder='Enter city' />
                </div>
                <button onClick={handleClick} className='bg-[#41D6C7] p-3 rounded-full'>
                    <img src={search} alt="" className=''/>
                  </button>
              </div>    
            </div>

          </div>
        </div>

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

    
    </>
  )
}

export default TripPlanner
