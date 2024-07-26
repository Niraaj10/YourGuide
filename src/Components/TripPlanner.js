import React, { useRef, useState } from 'react';
import { fetchTripData, fetchTripDataC } from '../ApiData/ApiData'
import fullText from '../ApiData/Dataa';
import search from '../Assests/svg/Search.svg';
import down from '../Assests/svg/down.svg';
import BgTP from '../Assests/img/bgTP.jpg';
import { BounceLoader } from 'react-spinners'
import Footer from './Footer';




const TripPlanner = () => {
  const [cDes, setCDes] = useState('');
  const [hotels, setHotels] = useState([]);
  const [days, setDays] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [city, setCity] = useState('');
  const [startD, setStartD] = useState('');
  const [endD, setEndD] = useState('');
  const ContRef = useRef(null);



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
    setLoading(true)

    if (ContRef.current) {
      ContRef.current.scrollIntoView({ behaviur: 'smooth' });
    }

    try {
      // const PlanText = await fetchTripData(city, startD, endD);
      // const PlanText = await fetchTripDataC(city, startD, endD);
      // // const PlanText = await fetchTripDataC(fullText);

      // console.log(city);
      // console.log(startD);
      // console.log(endD);

      setLoading(false)

      // const parts = await PlanText.split('\n\nHotels:\n');
      // const cityDescription = parts[0];
      // setCDes(cityDescription);
      // const hotelParts = parts[1].split('\n\nDay ');
      // const hotelss = hotelParts[0].trim().split(/\n(?=\d+\.\s)/);
      // setHotels(hotelss);
      // const days = 'Day ' + hotelParts.slice(1).join('\n\nDay ');
      // const perrDayss = days.split('Day').slice(1);
      // setDays(perrDayss);\

      splitText(fullText)

    } catch (error) {
      console.error('Error Getting dataaaa', error);
      setError(error);
      setLoading(false)
    }

  }

  const ShowValue = () => {
    console.log(city);
    console.log(startD);
    console.log(endD);

  }






  return (
    <>
      <div className='mt-32 relative'>

        <img src={BgTP} alt="" className='absolute top-[-320px] rounded-b-[70px]' />

        <div className='w-full relative z-20  flex flex-col mx-auto justify-center items-center'>
          <div className='text-white mt-[160px]'>
            <div className='font-bold text-sm mb-[-42px]'>Plan your trip with us with the help of AI</div>
            <div className='fig text-[150px] font-bold drop-shadow-3xl' style={{ textShadow: '1px 1px 15px rgba(0, 0, 0, 0.6)' }}>Make your trip</div>
          </div>
          <div className='Inputs '>
            <div></div>
            <div className='flex flex-col gap-3 bg-white px-20 py-10 border rounded-3xl shadow-xl'>
              <div className='text-sm font-bold'>Please enter your trip details</div>

              <div className='border p-2 rounded-xl flex justify-center items-center'>
                <input type="text" className='outline-none focus:outline-none w-80 pl-5' placeholder='Enter city' value={city} onChange={(e) => setCity(e.target.value)} />

                <div className='relative'>
                  <div className='absolute top-[-28px;] right-[41px] text-xs bg-white px-2 font-semibold text-gray-300'>End-date</div>
                  <input type="date" name="" id="" className='outline-none focus:outline-none border-l px-2' placeholder='Enter city' value={startD} onChange={(e) => setStartD(e.target.value)} />
                </div>

                <div className='relative'>
                  <div className='absolute top-[-28px;] right-[63px] text-xs bg-white px-2 font-semibold text-gray-300'>End-date</div>
                  <input type="date" name="" id="" className='outline-none focus:outline-none border-l px-2 border-r mr-5' placeholder='Enter city' value={endD} onChange={(e) => setEndD(e.target.value)} />
                </div>

                <button onClick={handleClick} className='bg-[#41D6C7] p-3 rounded-full'>
                  <img src={search} alt="" className='' />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <div className='w-full mx-auto'>
          <button onClick={handleClick} className='bg-black text-white p-4 mx-auto'>Click</button>
        </div> */}

        <div
          ref={ContRef}
          className={`SearchCont bg-white px-36 py-2 pt-24 relative
        ${loading === false ? 'h-fit bg-[#FCFCFD]' : 'h-[40vh] '} `}
        >

          {loading && <>
            <div className='mx-auto absolute top-28 left-[50%]'>
              <BounceLoader color="#41D6C7" />
            </div>
          </>}


          {error &&
            <div className='mx-auto'>
              Sorryyy, No information found please enter valid place...
            </div>
          }

          <div
            className={`${cDes === '' ? 'invisible' : 'visible'} `}
          >

<div className='font-bold flex justify-center items-center my-9 text-xl'>{city.toUpperCase} ITINERARY</div>
            <div className='flex gap-8'>

              <div className='basis-[60%]'>

                <div className='mb-7'>
                  <h2 className='p-5'>Your trip to {city} for {days.length} days</h2>
                  <p>{cDes}</p>
                </div>

                <div className='mb-7'>
                  <h2>Places to stay</h2>
                  <p>{hotels.map((hot, index) => (
                    <li key={index}>{hot}</li>
                  ))}</p>
                </div>

                <div className='mb-7'>
                  {/* <h2>Days</h2> */}
                  <ul>
                    {days.map((day, index) => (
                      <>                      
                      <li key={index}>
                        <div className='pl-10 text-sm font-bold m-3 flex justify-between items-center'>
                          Day {index + 1}
                          <img src={down} alt="" />
                        </div>

                        <div className='flex'>
                          <div className='mb-5'>
                          <div className=' m-1 p-1 px-[11px] bg-[#41D6C7] text-white rounded-full'>{index+1}</div>
                          <div className='border-r-2 h-full w-[50%] border-[#41D6C7]'> </div>
                          </div>

                          <div>
                            {day}
                          </div>
                        </div>
                      </li>
                      </>
                    ))}
                  </ul>
                </div>

              </div>

              <div className='basis-[40%]'>
                    Mapppppp
              </div>


            </div>
          </div>





        </div>

        <Footer />
      </div>


    </>
  )
}

export default TripPlanner
