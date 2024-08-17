import React from 'react'
import { Link } from "react-router-dom";
import Use from '../Assests/svg/user12.svg'
import tp from '../Assests/svg/Tp.svg';
import about from '../Assests/svg/about.svg';
import exp from '../Assests/svg/exp.svg';

const Navbar = ({ user }) => {
  console.log(user);
  
  return (
    <>
      <div>
        <nav className='Navbar z-50 py-2 lg:py-4 px-4 lg:px-28 fixed top-0 backdrop-blur-xl flex flex-col w-[100vw]'>
          <div className='flex gap-4 justify-between items-center '>

            <div className='lg:pr-32 pr-1'>
              <Link to="/"><h2 className='fig text-3xl lg:text-5xl top-3 text-[#41D6C7] font-extrabold'>YourGuide.</h2></Link>
            </div>

            <div className='hidden lg:flex md:flex gap-5 lg:gap-24 font-semibold text-gray-700 ml-24'>
              <Link to="/explore"><div className=''>Explore</div></Link>
              <Link to="/tripPlanner"><div >Trip planner</div></Link>
              {/* <Link to="/blog"><div>Blog</div></Link> */}
              <Link to="/about"><div >About Us</div></Link>
            </div>

            <div className='flex justify-center items-center gap-5 font-bold'>
              {/* <Link to="/login"><button className='p-2 px-5  rounded-full shadow-md'>
              {user ? <p>Welcome, {user.username}!</p> : <p>Please log in</p>}
              </button></Link> */}
              <Link to="/login">
              <button className='p-2 px-5 invisible hidden lg:block md:block lg:visible md:visible rounded-full bg-[#41D6C7] text-white shadow-md'>
              {user ? <p>Welcome, {user.username}!</p> : <p>Login / Sign up</p>}
              </button>
              <div className='visible lg:invisible md:invisible block lg:hidden md:hidden p-2 rounded-full bg-[#41D6C7]'>
              <img src={Use} alt="" className=''/>
              </div>
              
              </Link>
            </div>
          </div>

        </nav>
          <div className='fixed z-50 bottom-0 bg-white border w-[98vw] p-1 mx-2 rounded-t-xl flex gap-10 lg:gap-24 font-semibold text-gray-700 justify-evenly items-center visible lg:h-0 lg:invisible md:invisible'>

              <Link to="/explore" className='flex gap-1 flex-col justify-center items-center'>
              <img src={exp} alt="" className='w-[20px]' />
              <div className='text-[8px]'>Explore</div>
              </Link>
              <Link to="/tripPlanner" className='flex gap-1 flex-col justify-center items-center'>
              <img src={tp} alt="" className='w-[20px]' />
              <div className='text-[8px]'>Trip planner</div>
              <div></div>
              </Link>
              {/* <Link to="/blog"><div>Blog</div></Link> */}
              <Link to="/about" className='flex gap-1 flex-col justify-center items-center'>
              <img src={about} alt="" className='w-[20px]' />
              <div className='text-[8px]'>About Us</div>
              </Link>
            </div>
      </div>
    </>
  )
}

export default Navbar
