import { useEffect, useState } from "react"
import Country from "../Country/Country";
import './Countries.css'

export default function Countries() {

    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/all')
        .then(response => response.json())
        .then(data => setCountries(data.countries));
    } ,[]);

    return (
        <div>
            <h1>Total Countries: {countries.length}</h1>
            <div className="country-container">
                {countries.map(country => <Country key={country.ccn3.ccn3} country={country}></Country>)}
            </div>
        </div>
    )
}