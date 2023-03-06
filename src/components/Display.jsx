import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Display = () => {
    const[playerList, setPlayerList] = useState([])

    const [deleteToggle, setDeleteToggle] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/api/players')
        .then((res) => {
            console.log(res.data)
            setPlayerList(res.data)
        })
        .catch((err) => {console.log(err)})
    }, [deleteToggle])

    const handleDelete = (e, id) => {
        axios.delete(`http://localhost:8000/api/player/delete/${id}`)
        .then((res) => {
            setDeleteToggle(!deleteToggle)
        })
        .catch((err) => {console.log(err)})
    }




  return (
    <div>
        <table className="table">
            <thead>
                <tr>
                    <th>Player Name</th>
                    <th>Preferred Position</th>
                    <th>Actions Available</th>
                </tr>
            </thead>
            <tbody>
                {
                playerList.map((player, idx) => {
                    return(
                        <tr key={idx}>
                            <td>{player.name}</td>
                            <td>{player.position}</td>
                            <td><button className='btn btn-danger' onClick={ (e)=> { window.confirm("Are you sure you want to delete?") && handleDelete(e, player._id)}}>Delete</button></td>
                        </tr>
                    )
                    })
                }
            </tbody>
        </table>
        <button className='btn btn-warning'><Link to={'/create'}>Add Player</Link></button>


    </div>
  )
}

export default Display