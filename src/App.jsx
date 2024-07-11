import { useState } from 'react'
import {Route, Routes, Navigate } from 'react-router-dom';

import SinglePlayer from './components/SinglePlayer'
import AllPlayers from './components/AllPlayers'
import NavBar from './components/NavBar'
import NewPlayerForm from './components/NewPlayerForm.jsx'


import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Link } from 'react-router-dom'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
       <NavBar />
      <main className='container content'>
        <Routes>
        <Route path='/' element={<AllPlayers />} />
        <Route path='/NewPlayerForm' element={<NewPlayerForm />} /> 
        <Route path='/players/:id' element={<SinglePlayer />} />
        </Routes>
      </main>
  
    </>
  )
}

export default App
