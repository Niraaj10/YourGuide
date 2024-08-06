import React, { useState } from 'react'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Explore from './Components/Explore'
import TripPlanner from './Components/TripPlanner'
import Blog from './Components/Blog'
import About from './Components/About'
import Login from './Components/Login'


const App = () => {
  const [userr, setUserr] = useState(null);
  console.log(userr);
  
  return (
    <>
      <div>
        {/* Your Guide */}

        <Navbar user={userr}/>      

        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/explore' element={<Explore /> } />
          <Route path='/tripPlanner' element={<TripPlanner /> } />
          <Route path='/blog' element={<Blog />  } />
          <Route path='/about' element={<About /> } />
          <Route path='/login' element={<Login Userrr={setUserr} />} />


        </Routes>

      </div>
    </>
  )
}

export default App

