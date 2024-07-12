import React from 'react'

const Navbar = () => {
  return (
    <>
      <div>
        <nav className='Navbar z-50  py-4 px-28 fixed top-0 backdrop-blur-xl w-[100%] '>
            <div className='flex gap-4 justify-between items-center '>

            <div className='pr-32'>
            <h2 className='fig text-5xl top-3 text-[#41D6C7] font-extrabold'>YourGuide.</h2>
            </div>
            <div className='flex gap-24 font-semibold text-gray-500 pr-48'>
                <div>Explore</div>
                <div>Top Cities</div>
                <div>Blog</div>
                <div>About Us</div>
            </div>
            <div className='flex gap-5 font-bold'>
                <button className='p-2 px-5  rounded-full shadow-md'>Login</button>
                <button className='p-2 px-5  rounded-full bg-[#41D6C7] text-white shadow-md'>Sign up</button>
            </div>
            </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar
