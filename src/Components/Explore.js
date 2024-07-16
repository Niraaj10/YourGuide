import React from 'react'
import img1 from '../Assests/img/img-1.jpg'
import img2 from '../Assests/img/img-2.jpg'
import img3 from '../Assests/img/img-3.jpg'
import img4 from '../Assests/img/img-4.jpg'
import cloud from '../Assests/img/cloud.png'
import cloud2 from '../Assests/img/cloud2.png'
import bgEx from '../Assests/img/bgEx.jpg'
import navigate from '../Assests/svg/Navi.svg'
import search from '../Assests/svg/Search.svg'
import Footer from './Footer'


const Explore = () => {
  return (
    <>
      <div>


        {/* <img src={bgEx} alt="" className='absolute top-0 z-0 w-[1010px]' /> */}
        <div className='ExplorePage mt-20 flex relative '>

          <img src={cloud2} alt="" className='absolute top-0 z-0 h-[700px]' />
          <div className='basis-2/3 flex justify-start items-center p-24 my-10 relative '>
            <div className='bg-white w-full p-8 rounded-3xl shadow-2xl'>
              <div className='w-full relative flex flex-col gap-7'>
                <label htmlFor="" className='font-bold'>Enter your Destination</label>

                <div className='w-full flex gap-11'>
                  <div className='flex w-[80%] '>
                  <img src={navigate} alt="" className='border-b border-[#777E91]'/>
                  <input type="text" name="" id="" className='outline-none p-3  border-b w-full border-[#777E91]' />
                  </div>
                  <button className='bg-[#41D6C7] p-3 rounded-full'>
                    <img src={search} alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>




          <div>
            <div className='basis-1/3 relative bg-white' >
              <img src={cloud} alt="" className='absolute top-14 ' />
              <div className='grid grid-cols-2 gap-5 justify-center p-20'>
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

        <div className="SearchCont">
          
        </div>

        <Footer />
      </div>
    </>
  )
}

export default Explore
