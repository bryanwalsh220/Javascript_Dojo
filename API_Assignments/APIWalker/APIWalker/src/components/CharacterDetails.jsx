import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

const CharacterDetails = () => {
    const [character, setCharacter] = useState("");
    const [error, setError] = useState(null)

    const {id} = useParams();

    useEffect(() => {
        const getCharacter = async () => {
            try {
                const res = await fetch(`https://swapi.dev/api/people/${id}`);
                if (!res.ok) {
                    throw new Error('Character Not Found');
                }
                const data = await res.json();
                setCharacter(data);
                setError(null);
            } catch (err) {
                setError(err.message);
                setCharacter(null);
            }
        } 
        if (id) {
            getCharacter();
        }
    }, [id]);


    return (
        <>
        <div>
            <h2>Character Details</h2>
            {error ? (
                <p>{error}</p>
            ) : character ? (
            <div>
                <h3>Name: {character.name}</h3>
                <h3>Height: {character.height}</h3>
                <h3>Hair Color: {character.hair_color}</h3>
                <h3>Weight: {character.mass}</h3>
                <h3>Birth Year: {character.birth_year}</h3>
            </div>
            ) : null}
        </div>
        </>
    )
}

export default CharacterDetails