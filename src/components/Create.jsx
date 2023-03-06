import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Create = () => {
    const [name, setName] = useState("")
    const [position, setPosition] = useState("")

    const [errors, setErrors] = useState([]); 

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const playerObj = {name, position}
        axios.post(`http://localhost:8000/api/players/new`, playerObj)
        .then(res => {
            navigate('/')
        })
        .catch(err =>{
        console.log("This is our create page catch error:", err)
        const errorResponse = err.response.data.errors; // Get the errors from err.response.data
        const errorArr = []; // Define a temp error array to push the messages in
        for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
        errorArr.push(errorResponse[key].message)
        }
        // Set Errors
        setErrors(errorArr);
    })            
}


  return (
    <div>
        <h3>Add a Player</h3>
        <form onSubmit={handleSubmit}>
            <div className='form-group'>
                <label>Name</label>
                <input type="text" onChange={(e) => {setName(e.target.value)}}></input>
            </div>
            <div className='form-group'>
                <label>Preferred Position</label>
                <input type="text" onChange={(e) => {setPosition(e.target.value)}}></input>
            </div>
            <button className='btn btn-success' type="submit">Add To Roster</button>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
        </form>
    </div>
  )
}

export default Create