import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Contactpage from './pages/Contactpage'
import Aboutpage from './pages/Aboutpage'
import Loginpage from './pages/Loginpage'
import Servicespage from './pages/Servicespage'



function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='/Contactpage' element={<Contactpage/>} />
      <Route path='/Aboutpage' element={<Aboutpage/>} />
      <Route path='/Loginpage' element={<Loginpage/>} />
      <Route path='/Servicespage' element={<Servicespage/>} />
      
    </Routes>
  )
}

export default App

