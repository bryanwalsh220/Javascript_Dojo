import React,{ useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BoxForm from  './components/Form'
import Display from './components/Display'

function App() {
  const [boxes, setBoxes] =useState([]);
  const box = (color, size) => {
    setBoxes([...boxes,{"backgroundColor": color ,"newBoxSize": size}])
  }

  return (
<>
<BoxForm box = {box} />
<Display boxes = {boxes} />
</>
  )
}

export default App
