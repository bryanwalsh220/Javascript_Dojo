import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/Form'
import List from './components/List'


function App() {
  const [list, setList] = useState([
    {"To-Do": "Make Bed", "completed" : false}, //dummy data for task list
    {"To-Do": "Take Out Trash", "completed" : false},
    {"To-Do": "Clean Room", "completed" : false},
    {"To-Do": "Feed Dogs", "completed" : false}
  ])

  const todoTask = (task) => setList([...list, {"To-Do": task, "completed" : false}]) //defining adding new task
  const deleteTask = (i) => setList(list.filter((_, index) => index !== i )) //delete task on list at index i
  const updateTask = (updateIdx) => { // checkbox update
    const listCopy = [...list];
    listCopy[updateIdx].completed = !listCopy[updateIdx].completed //if not checked, perform check else uncheck 
    setList(listCopy) //list is now updated with new task
  }

  return (//rendering Form and List components and passing down required props 
    <>
    <Form todoTask = {todoTask}/>
    <List list = {list} deleteTask={deleteTask} updateTask={updateTask} />
    </>
  )
}

export default App
