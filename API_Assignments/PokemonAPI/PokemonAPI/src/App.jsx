import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'


function App() {

  // const [pokes, setPokemon] = useState([])
  const [name, setName] = useState("")
  const [Find, setFind] = useState("")
  const [Type, setType] = useState("")
  const [Img, setImg] = useState("")

  // const fetchPokemon = () => {
  //   fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
  //   .then(res => {
  //     console.log(res)
  //     return res.json();
  //   })
  //   .then(jsonData => {
  //     console.log(jsonData)
  //     setPokemon(jsonData.results.slice(0, 807));
  //   })
  //   .catch(err =>{
  //     console.log(err, "ERROR")
  //   })
  // }
  
  async function getPokemon() {
    let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${Find}`);
    console.log(res);
    setImg(res.data.sprites.front_shiny);
    setType(res.data.types[0].type.name);
  }
  useEffect(() => {
    getPokemon();
  }, [Find]);
  
  const typename = (e) => {
    setName(e.target.value);

  };
  const Search = () => {
    if (name !== "") setFind(name);
    setName("")
  }

  // const fetchAxiosPokemon = () => {
  //   axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
  //   .then(res => {
  //     setPokemon(res.data.results.slice(0, 807));
  //   })
  //   .catch(err => {
  //     console.log(err, "ERROR")
  //   })
  // }

  return (
    <> 
    <div className="back">
      <div className="card">
        <img src={`${Img}`} alt="" />
        <div className='name'>{Find.toLowerCase()}</div>
        <div className='type'>{Type}</div>
        <input type="text" onChange={typename} value={name} />
        <button onClick={Search}>Search</button>
      </div>
    </div>
    </>
  )
}

export default App
