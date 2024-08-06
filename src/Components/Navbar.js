import React from 'react'
import { Link } from "react-router-dom";

const Navbar = ({ user }) => {
  return (
    <>
      <div>
        <nav className='Navbar z-50  py-4 px-28 fixed top-0 backdrop-blur-xl w-[100%] '>
          <div className='flex gap-4 justify-between items-center '>

            <div className='pr-32'>
              <Link to="/"><h2 className='fig text-5xl top-3 text-[#41D6C7] font-extrabold'>YourGuide.</h2></Link>
            </div>

            <div className='flex gap-24 font-semibold text-gray-700 ml-24'>

              <Link to="/explore"><div>Explore</div></Link>
              <Link to="/tripPlanner"><div>Trip planner</div></Link>
              {/* <Link to="/blog"><div>Blog</div></Link> */}
              <Link to="/about"><div>About Us</div></Link>
            </div>

            <div className='flex gap-5 font-bold'>
              {/* <Link to="/login"><button className='p-2 px-5  rounded-full shadow-md'>
              {user ? <p>Welcome, {user.username}!</p> : <p>Please log in</p>}
              </button></Link> */}
              <Link to="/login"><button className='p-2 px-5  rounded-full bg-[#41D6C7] text-white shadow-md'>
              {user ? <p>Welcome, {user.username}!</p> : <p>Login / Sign up</p>}
              </button></Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar
