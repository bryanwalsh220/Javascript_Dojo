import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PersonCard from './components/PersonCard.jsx'
import BirthdayButton from './components/BirthdayButton.jsx'

function App() {

  const preButton = [
    { firstName: 'Jane', lastName: 'Doe', age: 45, hairColor: 'Black' },
    { firstName: 'John', lastName: 'Cena', age: 88, hairColor: 'Brown' },
    { firstName: 'Gordon', lastName: 'Ramsey', age: 55, hairColor: 'Blonde' },
    { firstName: 'Barney', lastName: 'Dinosaur', age: 1000000, hairColor: 'Purple' },
  ];

  const [people, setPeople] = useState(preButton);

  const handleBirthdayClick = (index) => {
    const updatedPeople = [...people];
    updatedPeople[index].age += 1;
    setPeople(updatedPeople);
  };
  
  return (
  <>
    {people.map((person, index) => (
      <div key={index}>
        <PersonCard {...person}/>
        <BirthdayButton age={person.age} onBirthdayClick={() => handleBirthdayClick(index)} />
      </div>
    ))}
  </>
  );
}

export default App
      
      
      
      
      
      
      
    
      
