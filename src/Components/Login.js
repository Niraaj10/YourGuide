import React from 'react'
import Bg from '../Assests/img/LoginBg.jpg'

const Login = () => {
  return (
    <>
      <div>
      <div className='m-auto h-[100vh] w-full flex justify-center items-center'>
      <img src={Bg} alt="" className='absolute z-0' />
      <div className='relative z-10'>
        YourGuide
      </div>

      <div className=' mt-9 relative z-10 h-[74vh] w-[37vw] border bg-white rounded-3xl'>


        Login
      </div>

      </div>
      
      </div>
    </>
  )
}

export default Login
