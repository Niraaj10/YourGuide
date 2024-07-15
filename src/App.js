import React from 'react'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Explore from './Components/Explore'
import TopCities from './Components/TopCities'
import Blog from './Components/Blog'
import About from './Components/About'
import Login from './Components/Login'


const App = () => {
  return (
    <>
      <div>
        {/* Your Guide */}

        <Navbar/>
        {/* <BrowserRouter> */}
        

        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/explore' element={<Explore /> } />
          <Route path='/topcities' element={<TopCities /> } />
          <Route path='/blog' element={<Blog />  } />
          <Route path='/about' element={<About /> } />
          <Route path='/login' element={<Login />} />


        </Routes>
        
        
        
        {/* </BrowserRouter> */}

      </div>
    </>
  )
}

export default App

