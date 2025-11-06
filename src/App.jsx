import React from 'react'
import Home from './pages/Home'
import { Navigate, Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Signin from './pages/Signin'
import Dashboard from './pages/Dashboard'
import Notfound from './pages/Notfound'
import About from './pages/About'
import Practice from './pages/Practice'
import Props from './pages/Props'

const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/my-about' element={<About/>}/>
        <Route path='/about' element={<Navigate to='/my-about'/>}/>
        <Route path='*' element={<Notfound/>}/>
        <Route path='/practice' element={<Practice/>}/>
        <Route path='/props' element={<Props/>}/>
      </Routes>
      <Footer/>

      {/* Routing - Dynamic Routing, Nested Routing, Programmatic Routing */}
      
      
    </>
    
  )
}

export default App