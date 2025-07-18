import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home';

const App = () => {

  const isOwenerPath = useLocation().pathname.includes("owner");

  return (
    <div>
    {!isOwenerPath && <Navbar/>}
    <div className='min-h-[70vh]'>
    <Routes>
      <Route path='/' element={<Home/>} />
    </Routes>
    </div>
    </div>
  )
}

export default App
