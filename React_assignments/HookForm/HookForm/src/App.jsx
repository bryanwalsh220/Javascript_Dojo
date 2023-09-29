import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserForm from './components/UserForm'


function App() {

  const users = [];
  return (
    <fieldset>
      <legend>Form</legend>
      <UserForm users = {users}/>
    </fieldset>
  );
}

export default App