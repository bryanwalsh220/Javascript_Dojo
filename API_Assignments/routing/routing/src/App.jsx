import { useState } from 'react'
import './App.css'
import {
  Link, 
  Routes,
  Route
} from 'react-router-dom'
import Home from './components/Home'
import NumberDisplay from './components/NumberDisplay'
import WordDisplay from './components/WordDisplay'
import ColoredWordDisplay from './components/ColoredWordDisplay'


function App() {


  return (
    <>
    <Routes>
      <Route path="/:num(\d+)" element={<NumberDisplay />}/>
      <Route path='/:word' element={ <WordDisplay/>} />
      <Route path='/:word/:textColor/:bgColor' element={<ColoredWordDisplay/>} />
      <Route path='/' element={<Home/>} />

    </Routes>
  
    </>
  )
}

export default App
