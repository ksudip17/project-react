import "./WeatherApp.css";
import InfoBox from './InfoBox'
import SearchBox from './SearchBox'
import { useState } from "react";


export default function WeatherApp () {

    const [weatherInfo , setWeatherInfo] = useState(
        {
            city : "Kathmandu",
            feelslike : 28.25,
            humidity : 16,
            pressure : 1012,
            temp : 30.12,
            tempMin : 30.12,
            tempMax : 30.12,
            weather : "haze",
        }
    );


    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return (
        <div className="WeatherApp"> 
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <br /><br />
            <InfoBox info={weatherInfo}/>
        </div>
    );
}