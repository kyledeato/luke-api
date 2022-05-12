import React, {useEffect, useState }from 'react'
import {useParams } from 'react-router-dom'
import axios from 'axios';

const People = () => {
    const {id} = useParams();
    const [people, setPeople] = useState();
    useEffect(()=> {
        const url = `https://swapi.dev/api/people/${id}`;
        axios.get(url).then(response=>{
            console.log(response.data);
            setPeople(response.data)
        })
        .catch(err=>console.log(err))
    },[id]) 

  return (
    <div>
        
        {people?
        <div>
            <h1>{people.name}</h1>
            <p>Height: {people.height}</p>
            <p>Mass: {people.mass}</p>
            <p>Hair Color: {people.hair_color}</p>
            <p>SKin Color: {people.skin_color}</p>
        </div>:<div>Not Found</div>}
    </div>
  )
}

export default People