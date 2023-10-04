import React, { useState, } from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
    const [dropDown, setDropDown] = useState('people');
    const [id, setId] = useState('');


    return (
        <div>
            <h2>StarWars API App</h2>
            <div>
                <label htmlFor="dropDown">Select a Subject:</label>
                <select id="dropDown" value={dropDown} onChange={(e) => setDropDown(e.target.value)}>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                </select>
            </div>
            <div>
                <label htmlFor="characterId">Id:</label>
                <input type="number" id='characterId' value={id} onChange={(e) => setId(e.target.value)} />
                <Link to={`/${dropDown}/${id}`}>
                    <button>Search</button>
                </Link>
            </div>

        </div>
    )
}

export default Home;