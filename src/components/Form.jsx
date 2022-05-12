import React , { useState}from 'react'
import { useNavigate } from 'react-router-dom';
const Form = () => {
    const [search, setSearch] = useState();
    const [id, setId] = useState();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/${search}/${id}`);
        clearForm()
    }
    const clearForm = () => {
        setId("")
        setSearch("")
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="search">Search for:</label>
            <select name="search" id="" value={search} onChange={e=>setSearch(e.target.value)}>
                <option hidden> Choose a category</option>
                <option value="planets">Planets</option>
                <option value="people">People</option>
                {/* <option value="starships">Starships</option> */}
            </select>
            <label htmlFor="id">ID:</label>
            <input type="text" name='id' value={id} onChange={e=>setId(e.target.value)}/>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
       
    </div>
  )
}

export default Form