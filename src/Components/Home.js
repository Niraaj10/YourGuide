import React from 'react'
import Navbar from './Navbar'
import bg from '../Assests/img/yash-raut--JVG6PsOrKA-unsplash.jpg'
import ExploreP from './ExploreP'
import Rating from './Rating'
import Review from './Review'
import Footer from './Footer'

const Home = () => {
    return (
        <>
            <div className='Home flex flex-col'>
                {/* <Navbar /> */}
                <div className='flex justify-center items-start z-1'>
                    <img src={bg} alt="" className='absolute top-[-110px] h-[800px]  w-[95vw] object-cover rounded-b-[70px]' />
                </div>
                <div className='flex flex-col relative z-40 '>
                    <div className=' flex flex-col justify-center px-36 pt-80'>
                        <div className='text-white drop-shadow-2xl text-2xl' style={{ textShadow: '2px 4px 6px rgba(0, 0, 0, 0.8)' }}>WELCOME TO </div>
                        <div className='fig text-white text-[220px] font-extrabold mt-[-50px] drop-shadow-2xl' style={{ textShadow: '2px 2px 20px rgba(0, 0, 0, 0.8)' }}>Your<span className='text-lg'>Tour</span>Guide<span>.</span></div>

                        {/* <div className='text-white drop-shadow-2xl text-2xl' style={{ textShadow: '2px 4px 6px rgba(0, 0, 0, 0.8)' }}>We'll guide you to </div>
                        <div className='text-[#41D6C7] allu text-7xl' style={{ textShadow: '2px 4px 6px rgba(0, 0, 0, 0.8)' }}>make the right </div>
                        <div className='fig text-white text-[220px] font-extrabold mt-[-110px] drop-shadow-2xl' style={{ textShadow: '2px 2px 20px rgba(0, 0, 0, 0.8)' }}>move<span>.</span></div> */}
                    </div>

                </div>

                <div className='relative z-40 flex flex-col justify-center gap-5 mx-96 p-2 py-14 bg-white shadow-xl rounded-2xl'>

                    <div className='flex justify-around'>
                        <div><input type="text" placeholder='Search City' className='border p-2 pr-20' /></div>
                        <div><button>Search</button></div>
                    </div>

                    <hr />
                </div>


                <div className='Weekly mt-20 flex flex-col justify-center items-center h-[200px]'>
                    <div className='font-bold text-5xl'>
                        Discover Weekly
                    </div>
                    {/* <div className='text-gray-500 font-bold pt-5'>
                        Best places to explore in India
                    </div> */}
                    <div className='text-gray-500 font-bold pt-5'>
                        Explore best places in maharashtra with our tour planners
                    </div>
                </div>

                <ExploreP />

                <Rating />

                <Review />



                <Footer />

            </div>
        </>
    )
}

export default Home
