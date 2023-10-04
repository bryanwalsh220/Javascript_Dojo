import React from 'react'
import { useState } from 'react'
import {useParams} from 'react'
import {Link, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import CharacterDetails from './components/CharacterDetails'
import PlanetDetails from './components/PlanetDetails'

function App() {
  
  return (
    <>
    <Home/>
    <Routes>
      
        {/* <Route path="/" element={<Home/>} /> */}
        <Route path="/people/:id" element={<CharacterDetails/>} />
        <Route path="/planets/:id" element={<PlanetDetails/>} />
    
    </Routes>
    
      
    </>
  )
}

export default App
