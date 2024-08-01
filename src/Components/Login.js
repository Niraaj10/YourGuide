import React from 'react'
import Bg from '../Assests/img/LoginBg.jpg'

const Login = () => {
  return (
    <>
      <div>
      <div className='m-auto h-[100vh] w-full flex gap-7 justify-center items-center'>
      <img src={Bg} alt="" className='absolute z-0' />

      <div className='relative z-10'>
        {/* YourGuide */}
        <div className='text-white drop-shadow-2xl text-sm' style={{ textShadow: '2px 4px 6px rgba(0, 0, 0, 0.8)' }}>
          WELCOME TO 
        </div>
         <div className='fig text-white text-8xl font-extrabold drop-shadow-2xl' style={{ textShadow: '2px 2px 20px rgba(0, 0, 0, 0.8)' }}>
                          Your
                          {/* <span className='text-lg'>Tour</span> */}
                          Guide<span>.</span>
          </div>

      </div>

      <div className=' mt-9 relative z-10 h-[74vh] w-[35vw] border bg-white rounded-3xl flex flex-col justify-center items-center'>

        <div className='text-xl flex flex-col items-center justify-center'>
          Hello, Buddyy!
          <div className='text-sm'>
            Enter your personal details and start your journey with us
          </div>

          <form action="" className='flex flex-col mt-12'>
            <div>Username</div>
            <input type="text" />
            <div>Password</div>
            <input type="Passwors" />
          </form>
        </div>
        Login
      </div>

      </div>
      
      </div>
    </>
  )
}

export default Login
