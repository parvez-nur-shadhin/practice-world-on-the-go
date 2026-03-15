import { useState } from 'react'
import './Country.css'

export default function Country({country, visitedCountry}) {

    const [visited, setVisited] = useState(false);
    const handleButton= () => {
        setVisited(!visited);
        visitedCountry({country});
    }

    return(
        <div className='country'>
            <img src={country.flags.flags.png} alt="" />
            <button className={visited ? "visited": "not-visited"} onClick={handleButton}>{visited ? "Visited" : "Not Visited"}</button>
            <h4>Country Name: {country?.name?.common}</h4>
            <p>Capital: {country.capital.capital}</p>
            <p>Region: {country.region.region}</p>
        </div>
    )
}