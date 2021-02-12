import React, {Fragment, useState, useEffect} from 'react'
import { WeatherCard } from './WeatherCard'
import { meteoService } from '../service/WeatherService'

export const Search = () => {

    const [ville, setVille] = useState("")
    const [result, setResult] = useState("")
    
    const handleClick = (event, ville) => {
        event.preventDefault();
        meteoService.getMeteoByVille(ville).then(res => {
            setResult(res)})
        // setSearch(ville)
        console.log(result)
    }

    const handleChangeVille = (event) => {
        setVille(event.target.value)
        console.log(result)
    }

    return (
        <Fragment>
        <form className="search">
            <h3>Rechercher une ville :</h3>
            <input  onChange={handleChangeVille}name="search" type="search"/>
            <button onClick={(event) => handleClick(event, ville)}>Rechercher</button>
        </form>
        {result &&  <WeatherCard result = {result} /> }
        </Fragment>

        
    )
}
