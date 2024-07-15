import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div>
        <nav className='Navbar z-50  py-4 px-28 fixed top-0 backdrop-blur-xl w-[100%] '>
          <div className='flex gap-4 justify-between items-center '>

            <div className='pr-32'>
              <Link to="/"><h2 className='fig text-5xl top-3 text-[#41D6C7] font-extrabold'>YourGuide.</h2></Link>
            </div>
            <div className='flex gap-24 font-semibold text-gray-500 pr-48'>

              <Link to="/explore"><div>Explore</div></Link>
              <Link to="/topcities"><div>Top Cities</div></Link>
              <Link to="/blog"><div>Blog</div></Link>
              <Link to="/about"><div>About Us</div></Link>
            </div>
            <div className='flex gap-5 font-bold'>
              <Link to="/login"><button className='p-2 px-5  rounded-full shadow-md'>
                Login
              </button></Link>
              <Link to="/login"><button className='p-2 px-5  rounded-full bg-[#41D6C7] text-white shadow-md'>
                Sign up
              </button></Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar
