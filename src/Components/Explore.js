import React, { useRef, useState } from 'react'
import img1 from '../Assests/img/img-1.jpg'
import img2 from '../Assests/img/img-2.jpg'
import img3 from '../Assests/img/img-3.jpg'
import img4 from '../Assests/img/img-4.jpg'
import cloud from '../Assests/img/cloud.png'
import cloud2 from '../Assests/img/cloud2.png'
import navigate from '../Assests/svg/Navi.svg'
import search from '../Assests/svg/Search.svg'
import Footer from './Footer'
import Rat from '../Assests/svg/Rating.svg'
import { getACLocation, getAttractions } from '../ApiData/ApiData'
import { BounceLoader } from 'react-spinners'


const Explore = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [attraction, setAttraction] = useState([]);
  const ContRef = useRef(null);


 console.log(suggestions);
 
  const ChangeQuery = (e) => {
    setQuery(e.target.value);
  }

  // const handlequery = async () => {
  //   // const Loca = e.target.value;
  //   // setQuery(Loca);

  //   // if (Loca.length > 2) {
  //   //   setLoading(true)
  //     try {
  //       const LocaS = await getACLocation(query);
  //       setSuggestions(LocaS);
  //       console.log(suggestions);

  //       setLoading(false);
  //     } catch (error) {
  //       setError(error);
  //     } 
  //   } 
  //   // else {
  //   //   setSuggestions([]);

  //   // }


  // };

  const handlequery = async () => {
    setLoading(true)
    setSuggestions([]);
    setAttraction([])
    

      if (loading === true) {
        console.log("Loadingg....wait a min.....");
  
      }
  
      if (ContRef.current) {
        ContRef.current.scrollIntoView({ behaviur: 'smooth'});
      }
  
      try {
        const LocaS = await getACLocation(query);
        // const LocaS = await getAttractions(query);
        if (LocaS && LocaS.length > 0) {
          const LocId = LocaS[0].result_object.location_id;
          console.log(LocId);
          const AttractionsDt = await getAttractions(LocId);
          console.log(AttractionsDt);
          setAttraction(AttractionsDt);
        }
        setSuggestions(LocaS);
  
        // console.log(suggestions);
        // console.log(LocaS);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }   

  }






  return (
    <>
      <div>


        {/* <img src={bgEx} alt="" className='absolute top-0 z-0 w-[1010px]' /> */}
        <div className='ExplorePage mt-20 flex flex-col-reverse lg:flex-row relative '>

          <img src={cloud2} alt="" className='absolute top-0 z-0 h-[700px] hidden lg:block' />
          <div className='lg:basis-2/3 mt-[-100px] lg:mt-0 z-10 flex justify-start items-center px-7 py-4 lg:p-24 lg:my-10 relative '>
            <div className='bg-white  w-full  px-4 py-7 lg:p-8 rounded-3xl shadow-2xl'>
              <div className='w-full relative flex flex-col lg:gap-7'>
                <label htmlFor="" className='font-bold'>Enter your Destination</label>

                <div className='w-full flex items-center gap-3 lg:gap-11'>
                  <div className='flex w-[80%] '>
                    <img src={navigate} alt="" className='border-b border-[#777E91]' />

                    <input
                      type="text"
                      name=""
                      id=""
                      className='outline-none p-3  border-b w-full border-[#777E91]'
                      value={query}
                      placeholder='Enter place you want to explore'
                      onChange={ChangeQuery}
                    />

                    {/* <div>
                      {suggestions.map(loc => (
                        
                      ))}
                    </div> */}

                  </div>

                  <button onClick={handlequery} className='bg-[#41D6C7] p-3 rounded-full'>
                    <img src={search} alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>




          <div>
            <div className='lg:basis-1/3 relative bg-white' >
              <img src={cloud} alt="" className='absolute top-14 hidden lg:block' />
              <div className='grid grid-cols-2 gap-5 justify-center px-9 lg:p-20'>
                <div className='flex flex-col justify-end items-end flex-wrap '>
                  {/* <div>.</div> */}
                  <img src={img1} alt="" className='object-contain w-[220px] rounded-3xl' />
                </div>
                <div className='flex'>
                  <img src={img3} alt="" className='h-[280px] rounded-3xl' />
                </div>
                <div className='flex justify-end'>
                  <img src={img4} alt="" className='h-[280px] rounded-3xl' />
                </div>
                <div className='flex justify-start items-start '>
                  <img src={img2} alt="" className='w-[220px] object-contain rounded-3xl' />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="SearchCont bg-white grid grid-cols-2 gap-10 h-fit px-36 py-2 "> */}
        <div className={`text-xl  justify-center items-center mt-11 font-bold
         ${attraction.length === 0 ? 'hidden' : 'flex'} `} >
          Explore places in <span className='fig text-[#41D6C7] text-4xl pl-2'>{query}</span>
        </div>
        <div
          ref={ContRef}
          className={`SearchCont bg-white grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-10 px-8 lg:px-36 py-2 lg:pt-24 relative
          ${loading === false ? 'h-fit bg-[#FCFCFD]' : 'h-[40vh] '} `}
        >
      

          {loading && <>
          <div className='flex justify-center items-center absolute top-28 left-[42%] lg:left-[50%]'>
          <BounceLoader color="#41D6C7" />
          </div>
          </>}

          {error && 
          <div className='mx-auto absolute top-28 left-[50%]'>
          Sorryyy, No information found please enter valid place...
          </div>
          }
         

          {attraction.map((loc, index) => (
            <>


              {loc.name && loc.photo && loc.photo.images && (
                <>

                  {/* <div key={index} className='flex flex-col bg-white w-[300px] h-[350px] rounded-3xl shadow-sm '> */}
                  <div key={index} className='flex flex-col bg-white w-[40vw] h-[38vh] rounded-3xl shadow-sm '>


                    {/* <div>{loc.result_type}</div> */}
                    {loc.photo && loc.photo.images && (
                      <div className='flex-none  h-[200px] '>
                        <img src={loc.photo.images.medium.url} alt={loc.name} className='w-[300px] h-[200px] rounded-t-2xl' />
                      </div>
                    )}
                    <div className='p-3 flex-initial flex gap-0 flex-col justify-between h-full pb-5'>

                      <div className='flex justify-between'>
                        <div className='font-bold text-sm lg:text-lg w-[200px] items-start'>{loc?.name}</div>
                      </div>

                      <div className='text-xs'>
                        <div>
                        <span className='font-bold text-[10px]'>Add: </span>
                        {loc?.address}
                        </div>
                        {/* { loc.website && (
                        // <div className='text-[10px] font-bold'>
                        //   Official Website: 
                        //   <div className='truncate text-xs font-light'>
                        //   {loc?.website}
                        //   </div>
                          
                        // </div>
                        )} */}
                      </div>

                      <div className='flex justify-between gap-4 lg:gap-10'>
                        <div className='flex items-center justify-center gap-1 font-bold'>
                          <img src={Rat} alt="" className='w-3' />
                          {loc?.rating}
                          </div>
                        <div className={`items-end ${loc.open_now_text === 'Open Now' ? 'text-[#4AC63F]' : 'text-red-600'}`}>{loc?.open_now_text}</div>
                      </div>
                    </div>
                  </div>

                </>
              )}
            </>
          ))}


        </div>

        <Footer />
      </div>
    </>
  )
}

export default Explore
