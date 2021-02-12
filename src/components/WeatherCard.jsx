import React, {Fragment, useEffect, useState} from 'react'
import { meteoService } from '../service/WeatherService'
import ProgressBar from 'react-percent-bar';

export const WeatherCard = ({result}) => {

    const barStyle = {
        height: "40px",
        width: "50px"
      }

    return (
        <Fragment>
        <div className="Card">          
            <h1>{result.name}</h1>
            
            <p className="InfoGauche">{result.weather[0].description}</p>
            
            <hr/>
            <div className="Info">
            <p>Température: {result.main.temp}°C</p>
            <p>Ressenti: {result.main.feels_like}°C</p>
            <p>Min: {result.main.temp_min}°C</p>
            <p>Max: {result.main.temp_max}°C</p>
            <p>Humidity: <progress value={result.main.humidity} max="100"/> {result.main.humidity}%</p>
            <p>Pression: {result.main.pressure}hPa</p>
            
            </div>
        </div>      
        </Fragment>
    )
}
