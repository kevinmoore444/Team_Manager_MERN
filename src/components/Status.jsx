import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Status = () => {

    const[playerList, setPlayerList] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/players')
        .then((res) => {
            console.log(res.data)
            setPlayerList(res.data)
        })
        .catch((err) => {console.log(err)})
    }, [])

    
const updateStatus = (e, id) => {
    e.preventDefault()
    const updatedPlayerList = playerList.map((player) => {
        if (player._id === id){
            player.game1status = e.target.name
            axios.put(`http://localhost:8000/api/player/${id}`, player)
        }
        return player
    })
    setPlayerList(updatedPlayerList)
}


  return (
    <div>
        <h1>Player Status - Game 1</h1>
        <button><Link to={'/status'}>Game 1</Link></button> | <button><Link to={'/status2'}>Game 2</Link></button> | <button><Link to={'/status3'}>Game 3</Link></button>
        <table className='table'>
            <thead>
                <tr>
                    <th>Player Name</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                playerList.map((player, idx) => {
                    return(
                        <tr key={idx}>
                            <td>{player.name}</td>
                            <td><button name="playing" onClick={(e)=>{updateStatus(e, player._id)}} style={player.game1status === 'playing' ? {backgroundColor:"green"} : {backgroundColor:"white"} }>Playing</button> | <button name="notPlaying" onClick={(e)=>{updateStatus(e, player._id)}} style={player.game1status === 'notPlaying' ? {backgroundColor:"red"} : {backgroundColor:"white"} }>Not Playing</button> | <button name="undecided" onClick={(e)=>{updateStatus(e, player._id)}} style={player.game1status === 'undecided' ? {backgroundColor:"yellow"} : {backgroundColor:"white"} }>Undecided</button></td>
                        </tr>
                    )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default Status

