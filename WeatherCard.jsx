import React from 'react'
import './WeatherCard.css';

function WeatherCard({data}){
  const {name, main, weather} = data;
  const icon = weather.icon;
  const description = weather.description;
  
  return(
    <div className="weather-card">
      <h2>{name}</h2>;
      <p>{main.temperature}</p>
      <p>{main.description}</p>
    </div>
    );
};

export default WeatherCard;