import React, {useEffect, useState }from 'react'
import {useParams } from 'react-router-dom'
import axios from 'axios';

const Planet = () => {
    const {id} = useParams();
    const [planet, setPlanet] = useState();
    useEffect(()=> {
        const url = `https://swapi.dev/api/planets/${id}`;
        axios.get(url).then(response=>{
            console.log(response.data);
            setPlanet(response.data)
        })
        .catch(err=>console.log(err))
    },[id]) 

  return (
    <div>
        
        {planet?
        <div>
            <h1>{planet.name}</h1>
            <p>Climate: {planet.climate}</p>
            <p>Surface Water: {planet.surface_water}</p>
            <p>Population: {planet.population}</p>
        </div>:<div>Not Found</div>}
    </div>
  )
}

export default Planet