import React, { useState } from 'react'
import Bg from '../Assests/img/LoginBg.jpg'

const Login = () => {
  const [Username, setUsername] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [conPass, setConPass] = useState('');
const [form, setForm] = useState('Signup');

const changeForm = () => {
  if (form === 'Signup') {
    setForm('Login')
  }
}
// console.log(form);


const userData = (e) => {
    e.preventDefault();
    console.log(Username);
    console.log(Email);
    console.log(Password);
    console.log(conPass);
    
}



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

            <div className={`Signup ${form === 'Signup' ? '' : 'hidden'}`}> 
              <div className='text-xl flex flex-col font-semibold items-center justify-center'>
                Hello, Buddyy!
                <div className='text-xs mt-2 w-[300px]'>
                  Enter your personal details and start your journey with us
                </div>

                <form action={userData} onSubmit={userData} className='flex flex-col mt-10'>
                  <div className='mb-1 text-xs font-bold'>Username</div>
                  <input type="text" className='border mb-5 rounded-lg px-3 py-2 w-[300px] text-sm ' onClick={(e) => {setUsername(e.target.value)}}/>
                  <div className='mb-1 text-xs font-bold'>Email</div>
                  <input type="text" className='border mb-5 rounded-lg px-3 py-2 w-[300px] text-sm ' onClick={(e) => {setEmail(e.target.value)}}/>
                  <div className='mb-1 text-xs font-bold'>Password</div>
                  <input type="Password" className='border mb-5 rounded-lg px-3 py-2 w-[300px] text-sm ' onClick={(e) => {setPassword(e.target.value)}}/>
                  <div className='mb-1 text-xs font-bold'>Confirm Password</div>
                  <input type="Password" className='border mb-5 rounded-lg px-3 py-2 w-[300px] text-sm ' onClick={(e) => {setConPass(e.target.value)}}/>

                  <button className='w-[300px] border rounded-lg text-sm font-bold text-white bg-[#41D6C7] py-2'>
                    Signup
                  </button>                  
                </form>

                <div className='text-sm mt-5'>
                  Already have an account? 
                  <button onClick={changeForm} className='ml-2 font-bold text-[#41D6C7]'>
                     Login
                  </button>
                </div>
              </div>
              {/* Login */}
            </div>



            <div className={`Login ${form === 'Login' ? '' : 'hidden'}`}> 
              <div className='text-xl flex flex-col font-semibold items-center justify-center'>
                Welcome Backk!
                <div className='text-xs mt-2 w-[300px]'>
                To keep connected with us please login with your personal info
                </div>

                <form action="" className='flex flex-col mt-14'>
                  <div className='mb-1 text-xs font-bold'>Username</div>
                  <input type="text" className='border mb-9 rounded-lg px-3 py-2 w-[300px] text-sm '/>
                
                  <div className='mb-1 text-xs font-bold'>Password</div>
                  <input type="Password" className='border mb-9 rounded-lg px-3 py-2 w-[300px] text-sm '/>
              
                  <button className='w-[300px] border rounded-lg text-sm font-bold text-white bg-[#41D6C7] py-2'>
                    Login
                  </button>                  
                </form>

                <div className='text-sm mt-5'>
                  Don't have an account? 
                  <button onClick={() => {form === 'Signup' ? setForm('Login') : setForm('Signup')}} className='ml-2 font-bold text-[#41D6C7]'>
                     Signup
                  </button>
                </div>
              </div>
              {/* Login */}
            </div>

            

          </div>

        </div>

      </div>
    </>
  )
}

export default Login
