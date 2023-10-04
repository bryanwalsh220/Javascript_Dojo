import React from 'react'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'


const PlanetDetails = () => {
    const [planet, setPlanet] = useState(null);
    const [error, setError] = useState(null);

    const {id} = useParams();

    const getPlanet = async () => {
        try {
            const res = await fetch (`https://swapi.dev/api/planets/${id}`);
            if (!res.ok) {
                throw new Error("Planet Not Found");
            }
            const data = await res.json();
            setPlanet(data);
            setError(null);
        } catch (err) {
            setError(err.message);
            setPlanet(null)
        }
    };

    useEffect(() => {
        if (id) {
            getPlanet();
        }
    }, [id]);


    return (
        <div>
            <h2>Planet Details</h2>
            { error ? (
                <p>{error}</p>
            ) : planet ? (
                <div>
                    <h3>Name: {planet.name}</h3>
                    <p>Climate: {planet.climate}</p>
                    <p>Population: {planet.population}</p>
                    <p>Terrain: {planet.terrain}</p>
                </div>
            ) : null }

        </div>
    )
}

export default PlanetDetails