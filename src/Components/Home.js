import React from 'react'
import { Link } from "react-router-dom";
import bg from '../Assests/img/yash-raut--JVG6PsOrKA-unsplash.jpg'
import glow from '../Assests/img/glow.png'
import h1 from '../Assests/svg/h2.svg'
import tp from '../Assests/svg/Tp.svg'
import global from '../Assests/svg/global.svg'
import exp from '../Assests/svg/exp.svg'
import ExploreP from './ExploreP'
import Rating from './Rating'
import Review from './Review'
import Footer from './Footer'


const Home = () => {

    return (
        <>
            <div className='Home flex flex-col relative overflow-hidden'>
                {/* <img src={glow} alt="" className='absolute z-0  w-[95vw] h-[150vh] top-0 left-[-600px] object-cover' /> */}


                <div className='HeroSec flex flex-col md:flex-row-reverse w-full md:h-[87vh] '>

                    <div className='relative w-full  md:w-[50vw] h-full px-10 flex flex-col justify-end items-center lg:items-center '>
                        <div className='bg-[#efefefd1] shadoww p-3 h-[310px] md:h-[810px] md:-ml-10 w-[90vw] md:w-[47vw] rounded-b-[20px]'>
                        <img src={bg} alt="" className='absolute right-8 md:right-14 z-0 top-[-5px] lg:top-[-110px] h-[300px] md:h-[845px] w-[85vw]  md:w-[45vw] object-cover rounded-b-[20px] lg:rounded-b-[20px] shadoww' />
                        </div>

                        <div className='absolute bottom-10 md:bottom-24 z-10 flex gap-5 justify-between items-center px-4 p-2 bg-white text-black rounded-lg w-[80%] md:-ml-10 '>
                            <p className='text-sm md:text-lg font-semibold uppercase'>Find the best places to visit in your city</p>
                            <button className='p-2 px-4 bg-[#41D6C7] text-white rounded-lg shadow-2xl' >
                                <Link to="/explore"><div className='uppercase font-semibold'>Explore</div></Link>
                            </button>


                        </div>
                    </div>

                    <div className='flex flex-col md:w-[50vw] justify-center items-start px-10 relative z-40 '>

                        <h1 className="text-3xl font-bold code md:mt-28">
                            <img src={h1} alt="" className='w-full h-auto object-cover' />
                        </h1>
                        <p className='md:w-[35vw] mb-3 px-5 mt-3'>Explore like never before. Live every city.
                            From sunrise hikes to midnight street food runs. We plan, you conquer.</p>
                        <h2 className="text-xl font-medium text-gray-700 px-5 mt-5">Your AI-Powered Travel Planner</h2>
                        <p className="text-base text-gray-600 px-5">
                            <ul className='flex items-center gap-2 mt-3'>
                                <img src={tp} alt="" /> Plan your dream trip effortlessly<br />
                            </ul>
                            <ul className='flex items-center gap-2 mt-3'>
                                <img src={global} alt="" /> Pick any city — we’ll show you where to go
                            </ul>
                            <ul className='flex items-center gap-2 mt-3'>
                                <img src={exp} alt="" /> Discover stays, sights, and secrets curated for you
                            </ul>
                        </p>

                        <Link to="/tripPlanner"><button className='p-2 px-5 ml-7 my-7 border border-gray-400 hover:border-[#41d6c7b7] rounded-md bg-white text-gray-700 hover:bg-[#41d6c733] hover:text-black hover:scale-110 transition-all duration-700 '>Make Your Trip with AI → </button></Link>


                        
                    </div>
                </div>

    
                <div className='Weekly mt-20 flex flex-col justify-center items-center h-[200px]'>
                    <div className='font-bold text-[9vw] sm:text-[9vw] md:text-[5vw] lg:text-5xl'>
                        Discover Weekly
                    </div>
                    {/* <div className='text-gray-500 font-bold pt-5'>
                        Best places to explore in India
                    </div> */}
                    <div className='text-gray-500 mx-7 font-bold pt-5'>
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
