import React from 'react'
import { Link } from "react-router-dom";
import Navbar from './Navbar'
import bg from '../Assests/img/yash-raut--JVG6PsOrKA-unsplash.jpg'
import ExploreP from './ExploreP'
import Rating from './Rating'
import Review from './Review'
import Footer from './Footer'
import search from '../Assests/svg/Search.svg';
import downn from '../Assests/svg/downArrow.svg';

const Home = () => {

    // const explore = (e) => {
    //     e.preventDefault();
    //     /////////////////////////

    // }

    return (
        <>
            <div className='Home flex flex-col'>
                {/* <Navbar /> */}
                <div className='flex justify-center items-start z-1'>
                    <img src={bg} alt="" className='absolute top-[-245px] lg:top-[-110px] h-[800px]  w-[95vw] object-cover rounded-b-[30px] lg:rounded-b-[70px]' />
                </div>

                <div className='flex flex-col relative z-40 '>
                    <div className=' flex flex-col justify-center px-6 lg:px-36 md:px-36 pt-[382px] lg:pt-80 md:pt-80'>
                        <div className='text-white  drop-shadow-2xl text-xs lg:text-2xl md:text-2xl' style={{ textShadow: '2px 4px 6px rgba(0, 0, 0, 0.8)' }}>WELCOME TO </div>
                        <div className='fig mx-auto text-white text-[16vw] lg:text-[15vw] sm:text-[16vw] md:text-[14vw] font-extrabold lg:mt-[-65px] mt-[-18px] drop-shadow-2xl ' style={{ textShadow: '2px 2px 20px rgba(0, 0, 0, 0.8)' }}>Your<span className='text-xs lg:text-lg drop-shadow-2xl'>Tour</span>Guide<span>.</span></div>

                        {/* <div className='text-white drop-shadow-2xl text-2xl' style={{ textShadow: '2px 4px 6px rgba(0, 0, 0, 0.8)' }}>We'll guide you to </div>
                        <div className='text-[#41D6C7] allu text-7xl' style={{ textShadow: '2px 4px 6px rgba(0, 0, 0, 0.8)' }}>make the right </div>
                        <div className='fig text-white text-[220px] font-extrabold mt-[-110px] drop-shadow-2xl' style={{ textShadow: '2px 2px 20px rgba(0, 0, 0, 0.8)' }}>move<span>.</span></div> */}
                    </div>

                </div>

                <div className='relative z-40 flex flex-col justify-center gap-5 lg:mx-96 mx-6 p-1 px-6 lg:py-8 lg:bg-white md:bg-white md:shadow-xl lg:shadow-xl rounded-2xl'>

                    <div className='flex flex-col lg:flex-row md:flex-row gap-2 items-center justify-center lg:px-20 '>
                        <div className='bg-white shadow-xl md:shadow-none lg:shadow-none px-3 py-2 rounded-xl font-bold text-sm flex gap-2 items-center'> 
                            Want to explore places according to your desire city   »»
                            {/* <img src={downn} alt="" />     */}
                        </div>
                        
                    {/* <hr />  */}

                        <div className='flex justify-center  items-center px-5 py-2 rounded-2xl '>
                        {/* <input type="text" placeholder='Search City' className='outline-none focus:outline-none p-2 pr-20 w-full' />
                        <button className='bg-[#41D6C7] p-3 rounded-full'>
                         <img src={search} alt="" className='' />
                        </button> */}
                        <button className='p-2 px-5 bg-[#41D6C7] text-white rounded-xl shadow-2xl mt-[-10px] lg:mt-0 md:mt-0' >
                            {/* Explore */}
                            <Link to="/explore"><div>Explore</div></Link>
                        </button>
                        
                        </div>
                    </div>

                    {/* <div className='flex flex-col px-20 '>
                        <div className='mb-5 font-bold text-sm'>Enter the city you want to explore</div>
                        
                    <hr /> 

                        <div className='flex justify-center  items-center border px-5 py-2 rounded-2xl '>
                        <input type="text" placeholder='Search City' className='outline-none focus:outline-none p-2 pr-20 w-full' />
                        <button className='bg-[#41D6C7] p-3 rounded-full'>
                         <img src={search} alt="" className='' />
                        </button>
                        </div>
                    </div> */}

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
