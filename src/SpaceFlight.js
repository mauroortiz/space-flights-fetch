import React, {useEffect, useState} from 'react'
import axios from 'axios'; 
import './SpaceFlight.css';

function SpaceFlight() {
  const [flights, setFlights] = useState([ ])

  useEffect(() => {

    axios.get('https://api.spacexdata.com/v2/launches')
    .then((res) => {
      setFlights(res.data)
    })
    .catch((err) => {
      console.log("Error mientras conecta con el API de SpaceX", err)
    })
  }, [])
  return (
    <ul className='flights-list'>
      {flights.map((flight) => (
        <li key={flight.flight_number}>
          <div className='flights-info'>
            <img src={flight.links.mission_patch_small} alt={flight.mission_name}></img>
          </div>
          <div className='flights-data'>
            <h2>Mision Name: {flight.mission_name}</h2>
            <p>Flight Number: {flight.flight_number}</p>          
            <p>Flight date: {flight.launch_date_utc}</p>
            <p>Flight details: {flight.details}</p>
            <p>Launch Year: {flight.lauch_year}</p>
            <a href={flight.links.article_link}>Read more about the launch</a>
          </div>
        </li>
      ))}
    </ul>
  )  
 
}

export default SpaceFlight;
