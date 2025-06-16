import React, { useRef, useState } from 'react';
import { fetchTripData, fetchTripDataC } from '../ApiData/ApiData'
import fullText from '../ApiData/Dataa';
import search from '../Assests/svg/Search.svg';
import down from '../Assests/svg/down.svg';
import MMap from '../Assests/svg/MagicMap.svg'
import BgTP from '../Assests/img/bgTP.jpg';
import H1 from '../Assests/img/PlaH1.png';
import BgTP2 from '../Assests/img/Tp2.jpg';
import { BounceLoader } from 'react-spinners'
import Footer from './Footer';
import Mapp from './Mapp';




const TripPlanner = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [city, setCity] = useState('');
  const [startD, setStartD] = useState('');
  const [endD, setEndD] = useState('');
  const ContRef = useRef(null);
  const [tripInfo, setTripInfo] = useState(null);
  const [isOpen, setIsOpen] = useState({
    0: true
  });
  const [isHotelOpen, setisHotelOpen] = useState({
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
  const toggleHotelCollapse = (index) => {
    setisHotelOpen((dayDivv) => ({
      ...dayDivv,
      [index]: !dayDivv[index],
    }));
    console.log(isOpen);

  }



  const handleClick = async (e) => {
    // setError(null);
    e.preventDefault();

    setLoading(true);

    if (ContRef.current) {
      ContRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    try {
      if (city.toLowerCase() === 'pune') {
        setLoading(false);
        return;
      }

      const tripDataa = await fetchTripDataC(city, startD, endD);

      setTripInfo(tripDataa);
      console.log("TD", tripDataa);
      console.log("useState", tripInfo);
      setLoading(false);
      // setError(false)

    } catch (err) {
      setError('Something went wrong. Try again.');
      setLoading(false);
    }
  };




  return (
    <>
      <div className='mt-0 lg:mt-32 relative'>

        <img src={BgTP} alt="" className='absolute top-[-320px] rounded-b-[70px] hidden lg:block' />
        <img src={BgTP2} alt="" className='object-contain absolute top-[-93px] rounded-b-[50px]  lg:hidden' />

        <div className='w-full relative z-20  flex flex-col mx-auto justify-center items-center'>
          {/* <div className='text-white mt-[477px] lg:mt-[160px]'> */}
          <div className='text-white mt-[435px] lg:mt-[160px]'>
            <div className='font-semibold lg:font-bold items-center text-center text-lg mx-auto lg:text-xl -mb-10 lg:-mb-32'>Plan your trip with us with the help of AI</div>
            <div className='fig text-[14vw] lg:text-[150px] font-bold drop-shadow-3xl' style={{ textShadow: '1px 1px 15px rgba(0, 0, 0, 0.6)' }}>
              <img src={H1} alt="" />
            </div>
          </div>
          <div className='Inputs '>
            <div></div>
            <div className='flex flex-col gap-3 bg-white px-3 py-4 lg:px-20 lg:py-10 border rounded-lg  lg:rounded-3xl shadow-xl'>
              <div className='text-sm font-bold'>Please enter your trip details</div>

              <form onSubmit={handleClick} className='lg:border w-fit p-2 rounded-xl flex flex-col lg:flex-row justify-center items-center'>
                <input type="text" className='outline-none border-b lg:border-none focus:outline-none w-80 pl-5' placeholder='Enter city' value={city} onChange={(e) => setCity(e.target.value)} />

                <div className='relative hidden lg:block'>
                  <div className='absolute top-[-28px;] right-[41px] text-xs bg-white px-2 font-semibold text-gray-300'>Start-date</div>
                  <input type="date" name="" id="" className='outline-none focus:outline-none lg:border-l lg:px-2' placeholder='Enter city' value={startD} onChange={(e) => setStartD(e.target.value)} />
                </div>

                <div className='relative hidden lg:block'>
                  <div className='absolute top-[-28px;] right-[63px] text-xs bg-white px-2 font-semibold text-gray-300'>End-date</div>
                  <input required type="date" name="" id="" className='outline-none focus:outline-none lg:border-l lg:px-2 lg:border-r lg:mr-5' placeholder='Enter city' value={endD} onChange={(e) => setEndD(e.target.value)} />
                </div>

                <div className='flex gap-3 px-2 lg:hidden border-b py-3 mb-2 mt-4'>
                  <div className='relative'>
                    <div className='absolute top-[-18px;] right-[41px] text-xs bg-white px-2 font-semibold text-gray-300'>Start-date</div>
                    <input required type="date" name="" id="" className='outline-none focus:outline-none lg:border-l lg:px-2' placeholder='Enter city' value={startD} onChange={(e) => setStartD(e.target.value)} />
                  </div>

                  <div className='relative'>
                    <div className='absolute top-[-18px;] right-[63px] text-xs bg-white px-2 font-semibold text-gray-300'>End-date</div>
                    <input required type="date" name="" id="" className='outline-none focus:outline-none lg:border-l lg:px-2 lg:border-r lg:mr-5' placeholder='Enter city' value={endD} onChange={(e) => setEndD(e.target.value)} />
                  </div>
                </div>

                {/* <button onClick={handleClick} className='bg-[#41D6C7] p-3 rounded-full'>
                  <img src={search} alt="" className='' />
                </button> */}
                <button type="submit" className='bg-[#41D6C7] p-3 rounded-full'>
                  <img src={search} alt="" className='' />
                </button>
              </form>
            </div>
          </div>
          {/* <div className='text-xs font-semibold text-gray-400'>If api request is failed </div>
          <div className='text-xs font-semibold text-gray-400'>use 'pune' for the dummy info to check how the stuff looks </div> */}
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


          {/* {error &&
            <div className='mx-auto flex flex-col lg:flex-row items-center justify-center'>
              Sorryyy, No information found please enter valid place...
              <span className='font-semibold'>or its api error use dummy info</span>
            </div>
          } */}


          {tripInfo && !loading && (
            <div className={`${tripInfo ? 'visible' : 'invisible'}`}>
              <div className='font-bold flex justify-center items-center my-9 text-xl'>{tripInfo?.city?.toUpperCase()} ITINERARY</div>
              <div className='flex gap-8  h-[70vh]'>

                <div className='lg:basis-[60%] overflow-y-scroll scroll-smooth no-scrollbar'>

                  <div className='mb-3'>
                    <div className='mb text-[10px] text-gray-400 flex gap-1 items-center'>
                      <div className='bg-[#41D6C7] p-1 rounded-full w-[25px]'><img src={MMap} alt="" /></div>
                      This trip is powered by AI
                    </div>
                    <h2 className='text-xl font-bold'>Your trip to <span className='text-[#41D6C7] text-2xl'>{tripInfo?.city}</span> for {tripInfo?.itinerary?.length} days</h2>
                    <p className='p-5'>{tripInfo?.description}</p>
                  </div>

                  <div className='flex items-center justify-center mb-7'>

                    <div className="relative bg-gradient-to-br from-[#41D6C7] to-[#5EA3F3] rounded-3xl shadow-xl text-white p-6 m-4 w-full mx-auto transition-transform duration-300">
                      <div className="absolute top-0 right-0 bg-white text-[#41D6C7] font-bold px-4 py-1 rounded-bl-2xl rounded-tr-3xl text-sm">
                        Hidden Gem 💎
                      </div>

                      <h2 className="text-2xl font-extrabold mb-2">{tripInfo?.hidden_place?.name}</h2>
                      <p className="text-sm mb-4 italic">{tripInfo?.hidden_place?.description}</p>

                      <div className="text-xs bg-white bg-opacity-10 p-3 rounded-lg">
                        <span className="font-semibold">📍 Address: </span>{tripInfo?.hidden_place?.address}
                      </div>
                    </div>
                  </div>

                  <div className='mb-7'>
                    <h2 className='text-md m-2 font-bold pl-4'>Best hotels in {city}</h2>

                    <ul>
                      {tripInfo?.hotels?.map((hotel, i) => (
                        <li key={i} className="mb-6">
                          <div className="flex items-center justify-center">
                            <div
                              className="relative mx-6 lg:mx-20 w-full cursor-pointer"
                              onClick={() => toggleHotelCollapse(i)}
                            >
                              <div className="flex items-center justify-between bg-gradient-to-r from-[#41D6C7] to-[#5EA3F3] text-white rounded-2xl p-4 shadow-md hover:scale-[1.02] transition-transform duration-300">
                                <div className="flex items-center gap-3">
                                  <div className="bg-white text-[#41D6C7] font-bold rounded-full h-8 w-8 flex items-center justify-center">
                                    {i + 1}
                                  </div>
                                  <span className="font-semibold text-lg">Hotel {i + 1}: {hotel.name}</span>
                                </div>
                                <img src={down} alt="expand" className="h-4 w-4" />
                              </div>
                            </div>
                          </div>

                          {isHotelOpen[i] && (
                            <div className="ml-16 mr-6 lg:mx-32 mt-3 p-4 bg-white border border-[#41D6C7] rounded-xl shadow-inner text-sm">
                              <p className="mb-2 text-gray-800"><strong>Description:</strong> {hotel.description}</p>
                              <p className="mb-1 text-gray-700"><strong>📍 Address:</strong> {hotel.address}</p>
                              <p className="text-gray-700"><strong>💰 Rate per Night:</strong> ₹{hotel.rate_per_night}</p>
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>


                  </div>

                  <div className='mb-7'>
                    <h2 className="text-xl font-black pl-6 mt-6 mb-4 text-[#3A4D39] underline decoration-[#41D6C7] underline-offset-4">
                      Your Travel Adventure Day by Day
                    </h2>
                    <div className="relative ml-8 border-l-4 border-dashed border-[#41D6C7]">
                      {tripInfo?.itinerary?.map((day, i) => (
                        <div key={i} className="mb-10 relative">
                          <div className="absolute -left-4 top-2 bg-[#41D6C7] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold shadow-md">
                            {i + 1}
                          </div>

                          <div className="ml-6 p-5 bg-white rounded-xl shadow-lg border border-[#E0F7F6] hover:shadow-xl transition duration-300 w-[90%]">
                            <h3 className="text-lg font-extrabold text-[#344E41] mb-2">📅 Day {i + 1}: {day.day}</h3>

                            <div className="mb-4">
                              <h4 className="text-[#5EA3F3] font-semibold mb-2">🎯 Things To Do</h4>
                              <div className="grid gap-3 sm:grid-cols-2">
                                {day.activities.map((activity, j) => (
                                  <div
                                    key={j}
                                    className="border-l-4 border-[#5EA3F3] bg-[#F0FAF9] p-3 rounded-lg shadow-sm"
                                  >
                                    <strong className="text-[#344E41]">{activity.name}</strong>
                                    <p className="text-sm text-gray-600">{activity.description}</p>
                                    <p className="text-xs text-gray-400 mt-1">📍 {activity.address}</p>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div>
                              <h4 className="text-[#41D6C7] font-semibold mb-2">🍽️ Places to Eat</h4>
                              <div className="grid gap-3 sm:grid-cols-2">
                                {day.restaurants.map((rest, k) => (
                                  <div
                                    key={k}
                                    className="border-l-4 border-[#41D6C7] bg-[#E8F9F8] p-3 rounded-lg shadow-sm"
                                  >
                                    <strong className="text-[#344E41]">{rest.name}</strong>
                                    <p className="text-sm text-gray-600">{rest.description}</p>
                                    <p className="text-xs text-gray-400 mt-1">📍 {rest.address}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>



                </div>

                <div className='basis-[40%] hidden lg:block'>
                  {/* Mapppppp */}
                  <Mapp city={city} lat={tripInfo.latitude} lng={tripInfo.longitude} />
                </div>


              </div>
              <hr className='mt-11' />
            </div>
          )}




        </div>

        <Footer />
      </div>


    </>
  )
}

export default TripPlanner
