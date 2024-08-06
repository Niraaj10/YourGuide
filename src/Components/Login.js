import React, { useEffect, useState } from 'react'
import Bg from '../Assests/img/LoginBg.jpg'
import Profile from '../Assests/img/avatar/Profile.jpeg'
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ppass, setPpass] = useState('');
  const [conPass, setConPass] = useState('');
  const [form, setForm] = useState('Signup');
  const [errorMessage, setErrorMessage] = useState('');
  const [logUser, setLogUser] = useState('');
  const [logPass, setLogPass] = useState('');
  const [loggedUser, setloggedUser] = useState(null);
  const [userrr, setUserrr] = useState(null);

const changeForm = () => {
  if (form === 'Signup') {
    setForm('Login')
  }
}
// console.log(form);




const userData = async (e) => {
  e.preventDefault();

    if (ppass === conPass) {
      setPassword(ppass);
      setErrorMessage('')
    } else {
      setErrorMessage('Password does not match')
    }

    console.log(username);
    console.log(email);
    console.log(password);
    // console.log(conPass);

    
    
    try {
      // const res = await axios.get('/userData.json');
      const res = await axios.get('http://localhost:3001/users');
      console.log(res);
      
      const users = res.data;
      const newUser = {
        id: users.length+1,
        username,
        email,
        password: ppass,
      };

      // users.push(newUser);
      await axios.post('http://localhost:3001/users', newUser);
      // await axios.post('/userData.json', newUser);

      localStorage.setItem('loggedUser', JSON.stringify(newUser));
      setUserrr(newUser);
      
      console.log(users.length)
      console.log(users);

      //Clear
      setUsername('');
      setEmail('');
      setPassword('')
      
    } catch (error) {
      console.error('Error updating user data:', error);
    }  
      
}


useEffect(() => {
  const storedUser = localStorage.getItem('loggedUser');
  if (storedUser) {
    setloggedUser(JSON.parse(storedUser));
    console.log();    
  }
}, []);


const LogInForm = async (e) => {
  e.preventDefault();

  console.log(logUser);
  console.log(logPass);

  try {
    const res = await axios.get('/userData.json');
    const users = res.data.users;
    // console.log(users);

    const user = users.find( (u) => 
      u.username === logUser && u.password === logPass 
    );
    setUserrr(user);


    if (user) {
      // console.log(user)
      console.log(userrr)
      setloggedUser(user)
      localStorage.setItem('loggedUser', JSON.stringify(user))
      console.log('Logged In');      
      setErrorMessage('')      
    } else {
      setErrorMessage('Invalid username or password');
    }
    
  } catch (error) {
    console.error('Error fetching users data:', error);
    // setErrorMessage('bfjbf')
  }
}


const userLogout = () => {
  setloggedUser(null);
  localStorage.removeItem('loggedUser')
  setUserrr(null)
  console.log('Logoutttttt');
  console.log(userrr);    
};



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

      {/* {userrr.length === 0 ? <> */}
      {userrr ? <>
        {/* <div className='m-auto h-[100vh] w-full flex gap-7 justify-center items-center'> 
        <img src={Bg} alt="" className='absolute z-0' /> */}
        {/* </div> */}
        <div className='flex flex-col items-end'>

          <div>
              <button onClick={userLogout} className='bg-[#41D6C7] z-10 relative p-2 mt-9 text-white font-semibold text-sm rounded-xl px-4'>Logout</button>
          </div>
        <div className='mt-2 relative z-10 h-[74vh] w-[35vw] border bg-white rounded-3xl flex flex-col justify-center items-center'> 

          {/* hiiiiii userrrrrrrrrr */}

          <div>
            <img src={Profile} alt="" className='rounded-full w-24' />
          </div>

          <div>
            {userrr.name}
          </div>


        </div>

        </div>
      </> 

      : <>
      {/* </>} */}
          <div className=' mt-9 relative z-10 h-[74vh] w-[35vw] border bg-white rounded-3xl flex flex-col justify-center items-center'>

            <div className={`Signup ${form === 'Signup' ? '' : 'hidden'}`}> 
              {/* Signup */}
              <div className='text-xl flex flex-col font-semibold items-center justify-center'>
                Hello, Buddyy!
                <div className='text-xs mt-2 w-[300px]'>
                  Enter your personal details and start your journey with us
                </div>

                <form onSubmit={userData} className='flex flex-col mt-10'>
                  <div className='mb-1 text-xs font-bold'>Username</div>
                  <input type="text" value={username} className='border mb-5 rounded-lg px-3 py-2 w-[300px] text-sm ' onChange={(e) => setUsername(e.target.value)} required/>
                  <div className='mb-1 text-xs font-bold'>Email</div>
                  <input type="email" required value={email} className='border mb-5 rounded-lg px-3 py-2 w-[300px] text-sm ' onChange={(e) => setEmail(e.target.value)}/>
                  <div className='mb-1 text-xs font-bold'>Password</div>
                  <input type="Password" required value={ppass} className='border mb-5 rounded-lg px-3 py-2 w-[300px] text-sm ' onChange={(e) => setPpass(e.target.value)}/>
                  <div className='mb-1 text-xs font-bold'>Confirm Password</div>
                  <input type="Password" required value={conPass} className='border mb-5 rounded-lg px-3 py-2 w-[300px] text-sm ' onChange={(e) => setConPass(e.target.value)}/>
                  {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

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
            </div>



            <div className={`Login ${form === 'Login' ? '' : 'hidden'}`}> 
              {/* Login */}
              <div className='text-xl flex flex-col font-semibold items-center justify-center'>
                Welcome Backk!
                <div className='text-xs mt-2 w-[300px]'>
                To keep connected with us please login with your personal info
                </div>

                <form onSubmit={LogInForm} className='flex flex-col mt-14'>
                  <div className='mb-1 text-xs font-bold'>Username</div>
                  <input onChange={(e) => setLogUser(e.target.value)} type="text" className='border mb-9 rounded-lg px-3 py-2 w-[300px] text-sm '/>
                
                  <div className='mb-1 text-xs font-bold'>Password</div>
                  <input onChange={(e) => setLogPass(e.target.value)} type="Password" className='border mb-9 rounded-lg px-3 py-2 w-[300px] text-sm '/>

                  {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
              
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

            </div>

            
            <div>
              <button onClick={userLogout}>Logout</button>
            </div>
          </div>
          
          </>}


        </div>


      </div>
    </>
  )
}

export default Login
