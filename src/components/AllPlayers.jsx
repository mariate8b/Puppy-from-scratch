import React, { useState, useEffect } from 'react';
import { useFetchPlayersQuery } from '../api/puppyBowlApi'


function AllPlayers() {
    //const [players, setPlayers] = useState([])

    const { data ,success, error} = useFetchPlayersQuery()
    
    //useEffect 

    return (
        <div>
        <h1>All Players</h1>
        <ul>
           {data?.data?.players.map(player => (
            <div key={player.id}>
              <p>{player.name}</p>
              <p>{player.breed}</p>
            <img src={player.imageUrl} alt="" />
            
              </div>
          ))} 
        </ul>
      </div>
    );
  }
  export default AllPlayers;