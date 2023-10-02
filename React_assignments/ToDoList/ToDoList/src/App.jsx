import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/Form'
import List from './components/List'


function App() {
  const [list, setList] = useState([
    {"To-Do": "Make Bed", "completed" : false},
    {"To-Do": "Take Out Trash", "completed" : false},
    {"To-Do": "Clean Room", "completed" : false},
    {"To-Do": "Feed Dogs", "completed" : false}
  ])

  const todoTask = (task) => setList([...list, {"To-Do": task, "completed" : false}])
  const deleteTask = (i) => setList(list.filter((each, index) => index !== i ))
  const updateTask = (updateIdx) => {
    const listCopy = [...list];
    listCopy[updateIdx].completed = !listCopy[updateIdx].completed
    setList(listCopy)
  }

  return (
    <>
    <Form todoTask = {todoTask}/>
    <List list = {list} deleteTask={deleteTask} updateTask={updateTask} />
    </>
  )
}

export default App
