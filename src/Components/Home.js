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

    // const explore = (e) => {
    //     e.preventDefault();
    //     /////////////////////////

    // }

    return (
        <>
            <div className='Home flex flex-col relative overflow-hidden'>
                {/* <img src={glow} alt="" className='absolute z-0  w-[95vw] h-[150vh] top-0 left-[-600px] object-cover' /> */}


                <div className='HeroSec flex flex-row-reverse w-full h-[87vh] '>

                    <div className='relative w-[50vw] h-full px-10 flex flex-col justify-end items-center lg:items-center '>
                        <div className='bg-[#efefefd1] shadoww p-3 h-[810px] -ml-10 w-[47vw] rounded-b-[20px]'>
                        <img src={bg} alt="" className='absolute right-14 z-0 top-[-60px] lg:top-[-110px] h-[845px]  w-[45vw] object-cover rounded-b-[30px] lg:rounded-b-[20px] shadoww' />
                        </div>

                        <div className='absolute bottom-24 z-10 flex gap-5 justify-between items-center px-4 p-2 bg-white text-black rounded-lg w-[80%] -ml-10 '>
                            <p className=' text-lg font-semibold uppercase'>Find the best places to visit in your city</p>
                            <button className='p-2 px-4 bg-[#41D6C7] text-white rounded-lg shadow-2xl mt-[-10px] lg:mt-0 md:mt-0' >
                                <Link to="/explore"><div className='uppercase font-semibold'>Explore</div></Link>
                            </button>


                        </div>
                    </div>

                    <div className='flex flex-col w-[50vw] justify-center items-start px-10 relative z-40 '>

                        <h1 className="text-3xl font-bold code mt-28">
                            <img src={h1} alt="" className='w-full h-auto object-cover' />
                        </h1>
                        <p className='w-[35vw] mb-3 px-5 mt-3'>Explore like never before. Live every city.
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


                        {/* <div className=' flex flex-col justify-center px-6 lg:px-36 md:px-36 pt-[620px] lg:pt-80 md:pt-80'>
                            <div className='text-white  drop-shadow-2xl text-xs lg:text-2xl md:text-2xl' style={{ textShadow: '2px 4px 6px rgba(0, 0, 0, 0.8)' }}>WELCOME TO </div>
                            <div className='fig mx-auto text-white text-[16vw] lg:text-[15vw] sm:text-[16vw] md:text-[14vw] font-extrabold lg:mt-[-65px] mt-[-18px] drop-shadow-2xl ' style={{ textShadow: '2px 2px 20px rgba(0, 0, 0, 0.8)' }}>Your<span className='text-xs lg:text-lg drop-shadow-2xl'>Tour</span>Guide<span>.</span></div>

                            <div className='fig mx-auto text-white text-[16vw] lg:text-[15vw] sm:text-[16vw] md:text-[14vw] font-extrabold lg:mt-[-65px] mt-[-18px] drop-shadow-2xl ' style={{ textShadow: '2px 2px 20px rgba(0, 0, 0, 0.8)' }}>Your<span className='text-xs lg:text-lg drop-shadow-2xl'>Tour</span>Guide<span>.</span></div>
                        </div> */}

                    </div>
                </div>

                {/* <div className='relative z-40 flex flex-col justify-center gap-5 lg:mx-96 mx-6 p-1 px-6 lg:py-8 lg:bg-white md:bg-white md:shadow-xl lg:shadow-xl rounded-2xl'>

                    <div className='flex flex-col lg:flex-row md:flex-row gap-2 items-center justify-center lg:px-20 '>
                        <div className='bg-white shadow-xl md:shadow-none lg:shadow-none px-3 py-2 rounded-xl font-bold text-sm flex gap-2 items-center'>
                            Want to explore places according to your desire city   »»
                        </div>


                        <div className='flex justify-center  items-center px-5 py-2 rounded-2xl '>
                           
                            <button className='p-2 px-5 bg-[#41D6C7] text-white rounded-xl shadow-2xl mt-[-10px] lg:mt-0 md:mt-0' >
                                <Link to="/explore"><div>Explore</div></Link>
                            </button>

                        </div>
                    </div>

                    

                </div> */}


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
