import React, { useRef, useState } from 'react';
import { fetchTripData, fetchTripDataC } from '../ApiData/ApiData'
import fullText from '../ApiData/Dataa';
import search from '../Assests/svg/Search.svg';
import down from '../Assests/svg/down.svg';
import MMap from '../Assests/svg/MagicMap.svg'
import BgTP from '../Assests/img/bgTP.jpg';
import BgTP2 from '../Assests/img/Tp2.jpg';
import { BounceLoader } from 'react-spinners'
import Footer from './Footer';
import Mapp from './Mapp';




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
  const [isOpen, setIsOpen] = useState({
    0: true
  });
  // const [isOpen, setIsOpen] = useState(0);

  const Collps = (index) => {

    setIsOpen((dayDivv) => ({
      ...dayDivv,
      [index]: !dayDivv[index],
    }));
    console.log(isOpen);

  }



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


  // Search function
  const handleClick = async () => {
    setError(null)
    console.log(days.length);
    // setCity(city.toLowerCase)

    setLoading(true)

    if (ContRef.current) {
      ContRef.current.scrollIntoView({ behaviur: 'smooth' });
    }

    //If the api is not working then this 'Pune' this dummy can able to show
    console.log(city);
    if (city === 'pune') {
      setLoading(false)
      splitText(fullText)
    } else {  
    // Fetching the chatgpt api data  
    try {
      const PlanText = await fetchTripData(city, startD, endD);
      // const PlanText = await fetchTripDataC(city, startD, endD);
      // // const PlanText = await fetchTripDataC(fullText);

      console.log(startD);
      console.log(endD);

      setLoading(false)
      console.log(PlanText);
      

      const parts = await PlanText.split('\n\nHotels:\n');
      const cityDescription = parts[0];
      setCDes(cityDescription);
      const hotelParts = parts[1].split('\n\nDay ');
      const hotelss = hotelParts[0].trim().split(/\n(?=\d+\.\s)/);
      setHotels(hotelss);
      const days = 'Day ' + hotelParts.slice(1).join('\n\nDay ');
      const perrDayss = days.split('Day').slice(1);
      setDays(perrDayss);

      // splitText(fullText)

    } catch (error) {
      console.error('Error Getting dataaaa', error);
      setError(error);
      setLoading(false)
    }
    setCDes('')
    setHotels([])
    setDays([])
  }


  }

  const ShowValue = () => {
    console.log(city);
    console.log(startD);
    console.log(endD);

  }






  return (
    <>
      <div className='mt-0 lg:mt-32 relative'>

        <img src={BgTP} alt="" className='absolute top-[-320px] rounded-b-[70px] hidden lg:block' />
        <img src={BgTP2} alt="" className='object-contain absolute top-[-93px] rounded-b-[50px]  lg:hidden' />

        <div className='w-full relative z-20  flex flex-col mx-auto justify-center items-center'>
          {/* <div className='text-white mt-[477px] lg:mt-[160px]'> */}
          <div className='text-white mt-[435px] lg:mt-[160px]'>
            <div className='font-semibold lg:font-bold text-lg mx-auto lg:text-sm mb-[-17px] lg:mb-[-42px]'>Plan your trip with us with the help of AI</div>
            <div className='fig text-[14vw] lg:text-[150px] font-bold drop-shadow-3xl' style={{ textShadow: '1px 1px 15px rgba(0, 0, 0, 0.6)' }}>Make your trip</div>
          </div>
          <div className='Inputs '>
            <div></div>
            <div className='flex flex-col gap-3 bg-white px-3 py-4 lg:px-20 lg:py-10 border rounded-lg  lg:rounded-3xl shadow-xl'>
              <div className='text-sm font-bold'>Please enter your trip details</div>

              <div className='lg:border w-fit p-2 rounded-xl flex flex-col lg:flex-row justify-center items-center'>
                <input type="text" className='outline-none border-b lg:border-none focus:outline-none w-80 pl-5' placeholder='Enter city' value={city} onChange={(e) => setCity(e.target.value)} />

                <div className='relative hidden lg:block'>
                  <div className='absolute top-[-28px;] right-[41px] text-xs bg-white px-2 font-semibold text-gray-300'>Start-date</div>
                  <input type="date" name="" id="" className='outline-none focus:outline-none lg:border-l lg:px-2' placeholder='Enter city' value={startD} onChange={(e) => setStartD(e.target.value)} />
                </div>

                <div className='relative hidden lg:block'>
                  <div className='absolute top-[-28px;] right-[63px] text-xs bg-white px-2 font-semibold text-gray-300'>End-date</div>
                  <input type="date" name="" id="" className='outline-none focus:outline-none lg:border-l lg:px-2 lg:border-r lg:mr-5' placeholder='Enter city' value={endD} onChange={(e) => setEndD(e.target.value)} />
                </div>

                <div className='flex gap-3 px-2 lg:hidden border-b py-3 mb-2 mt-4'>
                  <div className='relative'>
                  <div className='absolute top-[-18px;] right-[41px] text-xs bg-white px-2 font-semibold text-gray-300'>Start-date</div>
                  <input type="date" name="" id="" className='outline-none focus:outline-none lg:border-l lg:px-2' placeholder='Enter city' value={startD} onChange={(e) => setStartD(e.target.value)} />
                  </div>

                  <div className='relative'>
                  <div className='absolute top-[-18px;] right-[63px] text-xs bg-white px-2 font-semibold text-gray-300'>End-date</div>
                  <input type="date" name="" id="" className='outline-none focus:outline-none lg:border-l lg:px-2 lg:border-r lg:mr-5' placeholder='Enter city' value={endD} onChange={(e) => setEndD(e.target.value)} />
                  </div>
                </div>

                <button onClick={handleClick} className='bg-[#41D6C7] p-3 rounded-full'>
                  <img src={search} alt="" className='' />
                </button>
              </div>
            </div>
          </div>
          <div className='text-xs font-semibold text-gray-400'>If api request is failed </div>
          <div className='text-xs font-semibold text-gray-400'>use 'pune' for the dummy info to check how the stuff looks </div>
        </div>

        {/* <div className='w-full mx-auto'>
          <button onClick={handleClick} className='bg-black text-white p-4 mx-auto'>Click</button>
        </div> */}

        <div
          ref={ContRef}
          className={`SearchCont bg-white px-8 lg:px-36 lg:py-2 pt-24 relative
        ${loading === false ? 'h-fit bg-[#FCFCFD]' : 'h-[40vh] '} `}
        >

          {loading && <>
            <div className='mx-auto absolute top-28 left-[50%]'>
              <BounceLoader color="#41D6C7" />
            </div>
          </>}


          {error &&
            <div className='mx-auto flex flex-col lg:flex-row items-center justify-center'>
              Sorryyy, No information found please enter valid place...
              <span className='font-semibold'>or its api error use dummy info</span>
            </div>
          }

          <div
            className={`${cDes === '' ? 'invisible' : 'visible'} `}
          >

            <div className='font-bold flex justify-center items-center my-9 text-xl'>{city.toUpperCase} ITINERARY</div>
            <div className='flex gap-8  h-[70vh]'>

              <div className='lg:basis-[60%] overflow-y-scroll scroll-smooth no-scrollbar'>

                <div className='mb-7'>
                  <div className='mb text-[10px] text-gray-400 flex gap-1 items-center'>
                    <div className='bg-[#41D6C7] p-1 rounded-full w-[25px]'><img src={MMap} alt="" /></div>
                    This trip is powered by AI
                  </div>
                  <h2 className='text-xl font-bold'>Your trip to {city} <span className='text-[#41D6C7] text-2xl'>Pune</span> for {days.length} days</h2>
                  <p className='p-5'>{cDes}</p>
                </div>

                <div className='mb-7'>
                  <h2 className='text-md m-2 font-bold pl-4'>Best hotels in {city}</h2>
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
                          <div className='flex justify-center'>
                            {/* <div className='mb-5'>
                              <div className='m-1 p-1 px-[11px] bg-[#41D6C7] text-white rounded-full'>{index+1}
                              </div>
                              { days.length === index+1 ? <><div className='border-none'> </div></> : <>
                                <div className='border-r-2 h-full w-[50%] border-[#41D6C7]'> </div>
                              </> }
                          </div> */}

                            <div className='mx-12 mt-[-1px] text-sm font-bold m-3  mr-5 lg:mr-20 border rounded-3xl p-2 flex justify-between items-center w-full h-10' onClick={() => Collps(index)}>
                              Day {index + 1}
                              <img src={down} alt="" />
                            </div>
                          </div>



                          <div className='flex '>
                            <div className=''>
                              <div className='mt-[-48px] m-1 p-1 px-[11px] bg-[#41D6C7] text-white rounded-full'>{index + 1}
                              </div>
                              {days.length === index + 1 ? <><div className='border-none'> </div></> : <>
                                <div className='border-r-2 h-full w-[50%] border-[#41D6C7]'> </div>
                              </>}
                            </div>


                            {
                              isOpen[index] && (
                                <div className='ml-6 mr-5 lg:mr-20 mb-6'>
                                  {day}
                                </div>

                              )
                            }
                          </div>
                        </li>
                      </>
                    ))}
                  </ul>
                </div>

              </div>

              <div className='basis-[40%] hidden lg:block'>
                {/* Mapppppp */}
                <Mapp city={city}/>
              </div>


            </div>
            <hr className='mt-11'/>
          </div>





        </div>

        <Footer />
      </div>


    </>
  )
}

export default TripPlanner
